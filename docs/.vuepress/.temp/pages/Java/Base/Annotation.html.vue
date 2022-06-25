<template><div><h1 id="annotation" tabindex="-1"><a class="header-anchor" href="#annotation" aria-hidden="true">#</a> Annotation</h1>
<h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2>
<ul>
<li>
<p>Annotation是从JDK 5.0开始引入的新技术</p>
</li>
<li>
<p>Annotation的作用：</p>
</li>
</ul>
<p>不是程序本身，可以对程序作出解释。(这一点和注释(comment)没什么区别)</p>
<p><code v-pre>可以被其他程序(比如:编译器等)读取</code></p>
<ul>
<li>Annotation的格式:</li>
</ul>
<p>注解是以<code v-pre>@注释名</code>在代码中存在的﹐还可以添加一些参数值，例如:@SuppressWarnings(value=&quot;unchecked&quot;)</p>
<ul>
<li>Annotation在哪里使用?</li>
</ul>
<p>可以附加在package , class , method , field等上面，相当于给他们添加了额外的辅助信息
可以通过反射机制编程实现对这些元数据的访问</p>
<h2 id="内置注解" tabindex="-1"><a class="header-anchor" href="#内置注解" aria-hidden="true">#</a> 内置注解</h2>
<ul>
<li>@Override:定义在java.lang.Override中,此注释只适用于修辞方法，表示一个方法声明打算<code v-pre>重写</code>超类中的另一个方法声明.</li>
<li>@Deprecated :定义在java.lang.Deprecated中,此注释可以用于修辞方法，属性、类，表示<code v-pre>不鼓励</code>程序员使用这样的元素，通常是因为它很<code v-pre>危险</code>或者存在<code v-pre>更好</code>的选择。</li>
<li>@suppressWarnings∶定义在java.lang.SuppressWarnings中，用来抑制编译时的<code v-pre>警告信息</code>。与前两个注释有所不同，需要添加一个参数才能正确使用，这些参数都是已经定义好了的，选择性的使用就好了。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"all"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"unchecked"</span> <span class="token punctuation">,</span> <span class="token string">"deprecation"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元注解" tabindex="-1"><a class="header-anchor" href="#元注解" aria-hidden="true">#</a> 元注解</h2>
<ul>
<li>
<p>元注解的作用就是负责<code v-pre>注解其他注解</code>，Java定义了4个标准的meta-annotation类型，他们被用来提供对其他annotation类型作说明。</p>
</li>
<li>
<p>这些类型和它们所支持的类在java.lang.annotation包中可以找到。(@Target , @Retention ,@Documented , @Inherited )</p>
</li>
</ul>
<h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target</h3>
<p>@Target：用于描述注解的使用范围(即:被描述的注解可以用在什么地方)</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>ANNOTATION_TYPE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Returns an array of the kinds of elements an annotation type
     * can be applied to.
     * <span class="token keyword">@return</span> an array of the kinds of elements an annotation type
     * can be applied to
     */</span>
    <span class="token class-name">ElementType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retention" tabindex="-1"><a class="header-anchor" href="#retention" aria-hidden="true">#</a> Retention</h3>
<p>@Retention：表示需要在什么级别保存该注释信息，用于描述注解的生命周期(SOURCE&lt; CLASS&lt; RUNTIME)</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>ANNOTATION_TYPE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Retention</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Returns the retention policy.
     * <span class="token keyword">@return</span> the retention policy
     */</span>
    <span class="token class-name">RetentionPolicy</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h3>
<p>@Document：说明该注解将被包含在javadoc中</p>
<h3 id="inherited" tabindex="-1"><a class="header-anchor" href="#inherited" aria-hidden="true">#</a> Inherited</h3>
<p>@Inherited：说明子类可以继承父类中的该注解</p>
<h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>nty<span class="token punctuation">.</span>annotation</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">//测试元注解</span>
<span class="token annotation punctuation">@MyAnnotation</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@MyAnnotation</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//定义一个注解</span>
<span class="token comment">//Target:表示注解可以用在哪些地方</span>
<span class="token comment">//Retention:表示注解在哪些地方有效 runtime>class>sources</span>
<span class="token comment">//Documented:表示是否将注解生成在Javadoc中</span>
<span class="token comment">//Inherited:表示子类可以继承父类</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="额外三个注解" tabindex="-1"><a class="header-anchor" href="#额外三个注解" aria-hidden="true">#</a> 额外三个注解</h2>
<p>从 Java 7 开始，额外添加了 3 个注解：</p>
<p>@SafeVarargs： Java 7 开始支持，忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告。</p>
<p>@FunctionalInterface： Java 8 开始支持，标识一个匿名函数或函数式接口。</p>
<p>@Repeatable： Java 8 开始支持，标识某注解可以在同一个声明上使用多次。</p>
<h2 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解" aria-hidden="true">#</a> 自定义注解</h2>
<p>使用<code v-pre>@interface</code>自定义注解时，自动继承了<code v-pre>java.lang.annotation.Annotation接口</code>。</p>
<p>分析:</p>
<p>interface用来声明一个注解，格式:public @interface注解名{定义内容}
其中的每一个方法实际上是声明了一个配置参数
方法的名称就是参数的名称
返回值类型就是参数的类型（返回值只能是基本类型,Class , String , enum ).√可以通过default来声明参数的默认值
如果只有一个参数成员，一般参数名为value
注解元素必须要有值，我们定义注解元素时,经常使用空字符串,0作为默认值</p>
<h3 id="demo-1" tabindex="-1"><a class="header-anchor" href="#demo-1" aria-hidden="true">#</a> Demo</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ashe<span class="token punctuation">.</span>annotation</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Retention</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RetentionPolicy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Target</span></span><span class="token punctuation">;</span>

<span class="token comment">//自定义注解</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test03</span> <span class="token punctuation">{</span>
    <span class="token comment">//注解可以显示赋值，如果没用默认值，就必须赋值</span>
    <span class="token annotation punctuation">@MyAnnotation2</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Ashe"</span><span class="token punctuation">,</span>num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> schools <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"西北大学"</span><span class="token punctuation">,</span><span class="token string">"NYU"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token annotation punctuation">@MyAnnotation3</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token comment">//如果就一个值，写个Value，只能是Value，就可以不用写</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation2</span><span class="token punctuation">{</span>
    <span class="token comment">//注解的参数:参数类型 + 参数名 ();</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">num</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//-1，就是不存在</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">schools</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token string">"Github"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation3</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
