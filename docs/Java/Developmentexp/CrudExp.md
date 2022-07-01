# Crud的一些经验

在使用Springboot去Crud过程中,不是写好普通的Controller/Mapper/Service层代码即可。

过程中会遇到很多小毛病，明明前端请求的JSON中的id对的上数据库中的数据，为什么后端响应的时候会出现数据错误？

等等类似的情况，需要利用些方法，例如需要自己写一个Jackson的映射处理器解决问题，明天就得写另外一个毫不相关的自定义的MetaObjectHandler

每个项目的依赖和框架都在变，今天解决了明天不一定能解决，因此考虑到通过自己写小文章来复盘自己是如何解决这些小问题，来加深印象。


## GlobalExceptionHandler

Spring 框架为开发人员提供了几种处理应用程序异常的选项。其中之一是带有@ControllerAdvice 和@ExceptionHandler注释的全局异常处理程序

### 问题/示例

开发环境：Springboot / MyBatis-Plus

原因：在开发过程中，做到了一个模块为在前端网页进行`Add employee`的增加操作，当输入New Employee的username已经存在的时候，由于在Mysql数据库中为Employee的username设定为UNIQUE KEY唯一约束。

因此程序会抛出异常

```java
java.sql.SQLIntegrityConstraintViolationException: Duplicate entry 'kaibutsusama’for key 'idx_username
```

因此，处理方法有两种
> 1.Try Catch进行捕获，但是新增多数量数据的时候Try Catch会进行多次，因此不推荐。
>
> 2.使用ExceptionHandler进行全局捕获，为什么不进行数据库对比呢？原因在于，能不查数据库就不查数据库

### 解决/代码

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.sql.SQLIntegrityConstraintViolationException;

/**
 * @author KaibutsuSama
 * @date 2022/6/28
 */
@ControllerAdvice(annotations = {RestController.class, Controller.class}) //任何类上加了RestController和Controller注解的都会被GlobalExceptionHandler处理
@ResponseBody//因为exceptionHandler最终需要把结果封装成Json数据去返回，所以需要添加@ResponseBody，
@Slf4j//日志，无所谓
public class GlobalExceptionHandler {

    /**
    * 异常处理方法
    */
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)//@ExceptionHandler开启作用，因此要处理的类是java.sql.SQLIntegrityConstraintViolationException，所以参数写这个
    public R<String> exceptionHandler(SQLIntegrityConstraintViolationException exception){
        
        log.error(exception.getMessage());//简单通过日志输出一下异常信息
        //-----------------------------------------------------
        //由于SQLIntegrityConstraintViolationException里边都是SQL相关的异常
        //为了更精准的提示,需要优化异常处理器内容
        //从exception.getMessage()中可得到信息Duplicate entry 'kaibutsusama’for key 'idx_username
        //1. 因此需要判断关键字如果包含 Duplicate entry 关键字,则相应相对应的ErrorMsg
        //2. 通过空格进行分隔,因此调用split()函数，Username在ErrorMsg中的数组的第二个下标，012，因此可通过split[2]得到Username的字符串
        if(exception.getMessage().contains("Duplicate entry")){
            String[] split = exception.getMessage().split(" ");
            String msg = split[2] + "已存在";
            return R.error(msg);
        }
        //-----------------------------------------------------
        return R.error("未知错误");
    }
    
}
```

