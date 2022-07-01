<template><div><h1 id="crud的一些经验" tabindex="-1"><a class="header-anchor" href="#crud的一些经验" aria-hidden="true">#</a> Crud的一些经验</h1>
<p>在使用Springboot去Crud过程中,不是写好普通的Controller/Mapper/Service层代码即可。</p>
<p>过程中会遇到很多小毛病，明明前端请求的JSON中的id对的上数据库中的数据，为什么后端响应的时候会出现数据错误？</p>
<p>等等类似的情况，需要利用些方法，例如需要自己写一个Jackson的映射处理器解决问题，明天就得写另外一个毫不相关的自定义的MetaObjectHandler</p>
<p>每个项目的依赖和框架都在变，今天解决了明天不一定能解决，因此考虑到通过自己写小文章来复盘自己是如何解决这些小问题，来加深印象。</p>
<h2 id="globalexceptionhandler" tabindex="-1"><a class="header-anchor" href="#globalexceptionhandler" aria-hidden="true">#</a> GlobalExceptionHandler</h2>
<p>Spring 框架为开发人员提供了几种处理应用程序异常的选项。其中之一是带有@ControllerAdvice 和@ExceptionHandler注释的全局异常处理程序</p>
<h3 id="问题-示例" tabindex="-1"><a class="header-anchor" href="#问题-示例" aria-hidden="true">#</a> 问题/示例</h3>
<p>开发环境：Springboot / MyBatis-Plus</p>
<p>原因：在开发过程中，做到了一个模块为在前端网页进行<code v-pre>Add employee</code>的增加操作，当输入New Employee的username已经存在的时候，由于在Mysql数据库中为Employee的username设定为UNIQUE KEY唯一约束。</p>
<p>因此程序会抛出异常</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>SQLIntegrityConstraintViolationException</span><span class="token operator">:</span> <span class="token class-name">Duplicate</span> entry 'kaibutsusama’<span class="token keyword">for</span> key 'idx_username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因此，处理方法有两种</p>
<blockquote>
<p>1.Try Catch进行捕获，但是新增多数量数据的时候Try Catch会进行多次，因此不推荐。</p>
<p>2.使用ExceptionHandler进行全局捕获，为什么不进行数据库对比呢？原因在于，能不查数据库就不查数据库</p>
</blockquote>
<h3 id="解决-代码" tabindex="-1"><a class="header-anchor" href="#解决-代码" aria-hidden="true">#</a> 解决/代码</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ControllerAdvice</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ExceptionHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResponseBody</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLIntegrityConstraintViolationException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> KaibutsuSama
 * <span class="token keyword">@date</span> 2022/6/28
 */</span>
<span class="token annotation punctuation">@ControllerAdvice</span><span class="token punctuation">(</span>annotations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">RestController</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Controller</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//任何类上加了RestController和Controller注解的都会被GlobalExceptionHandler处理</span>
<span class="token annotation punctuation">@ResponseBody</span><span class="token comment">//因为exceptionHandler最终需要把结果封装成Json数据去返回，所以需要添加@ResponseBody，</span>
<span class="token annotation punctuation">@Slf4j</span><span class="token comment">//日志，无所谓</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHandler</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
    * 异常处理方法
    */</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">SQLIntegrityConstraintViolationException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//@ExceptionHandler开启作用，因此要处理的类是java.sql.SQLIntegrityConstraintViolationException，所以参数写这个</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">exceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">SQLIntegrityConstraintViolationException</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>exception<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//简单通过日志输出一下异常信息</span>
        <span class="token comment">//-----------------------------------------------------</span>
        <span class="token comment">//由于SQLIntegrityConstraintViolationException里边都是SQL相关的异常</span>
        <span class="token comment">//为了更精准的提示,需要优化异常处理器内容</span>
        <span class="token comment">//从exception.getMessage()中可得到信息Duplicate entry 'kaibutsusama’for key 'idx_username</span>
        <span class="token comment">//1. 因此需要判断关键字如果包含 Duplicate entry 关键字,则相应相对应的ErrorMsg</span>
        <span class="token comment">//2. 通过空格进行分隔,因此调用split()函数，Username在ErrorMsg中的数组的第二个下标，012，因此可通过split[2]得到Username的字符串</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>exception<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"Duplicate entry"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> split <span class="token operator">=</span> exception<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> split<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"已存在"</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//-----------------------------------------------------</span>
        <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"未知错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
