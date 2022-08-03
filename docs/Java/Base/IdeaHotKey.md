# Idea快速查找键

转载自不知道是什么网站，留着自己方便看

## 按名字搜索类

``Ctrl+N``

相当于eclipse的ctrl+shift+R，输入类名可以定位到这个类文件，就像idea在其它的搜索部分的表现一样，搜索类名也能对你所要搜索的内容多个部分进行匹配，而且如果能匹配的自己写的类，优先匹配自己写的类，甚至不是自己写的类也能搜索。

## 按文件名搜索文件

``Ctrl+Shift+N``

同搜索类类似，只不过可以匹配所有类型的文件了。

## 查看类的继承关系

``Ctrl+H``

查看类的继承关系，例如HashMap的父类是AbstractMap，子类则有一大堆。

## 查看子类方法实现

``Ctrl+Alt+B``

``Ctrl+B``可以查看父类或父方法定义，但是不如``ctrl+鼠标左键``方便。但是在这里，Ctrl+B或ctrl+鼠标左键只能看见Map接口的抽象方法put的定义，不是我们想要的，这时候Ctrl+Alt+B就可以查看HashMap的put方法。

## 查找类或方法在哪被使用

``Alt+F7``

相当于eclipse的ctrl+shif+H,但是速度快得多。

## 按照文本的内容查找

``Ctrl+F / Ctrl+Shift+F``

相当于eclipse的ctrl+H，速度优势更加明显。其中Ctrl+F是在本页查找，Ctrl+Shift+F是全局查找。

## 搜索任何东西

``Shift+Shift``

shift+shift非常强大，可搜索类、资源、配置项、方法等，还能搜索路径。其中搜索路径非常实用，例如你写了一个功能叫hello，在java，js，css，jsp中都有hello的文件夹，那我们可以搜索"hello/"找到路径中包含hello的文件夹。

## 查看接口的实现类

IDEA 风格 ``ctrl+alt+B``或者``Ctrl+Alt+鼠标左键``

