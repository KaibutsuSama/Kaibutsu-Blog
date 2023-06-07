(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{338:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("文章的理解是在我阅读C++Primer第五册过程中的学习笔记，主要记录之前第一次学习的缺漏，以及对一些知识点的理解。")])]),t._v(" "),s("h2",{attrs:{id:"main-函数的返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-函数的返回值"}},[t._v("#")]),t._v(" Main 函数的返回值")]),t._v(" "),s("p",[t._v("在大多数系统中，main的返回值被用来指示状态，返回值为"),s("code",[t._v("0")]),t._v("表示成功，非0的返回值的含义由系统定义，通常用来指出错误类型。")]),t._v(" "),s("h2",{attrs:{id:"左值引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左值引用"}},[t._v("#")]),t._v(" 左值引用")]),t._v(" "),s("p",[t._v("C++11 新增引用，也就是右值引用，主要用作与内置类，而本节讨论左引用")]),t._v(" "),s("p",[t._v("引用及别名，初始化变量的过程中，初始值会被拷贝到新建的对象中，而引用则是将变量名和初始值绑定在一起，而不是拷贝。引用必须初始化")]),t._v(" "),s("p",[t._v("引用并非对象，只是为了一个存在对象取别名。也因此，不能定义引用的引用。")]),t._v(" "),s("p",[t._v("引用只能绑定在对象上，不能绑定在字面值或者表达式上，因为字面值和表达式并非对象。")]),t._v(" "),s("h2",{attrs:{id:"指针和引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指针和引用"}},[t._v("#")]),t._v(" 指针和引用")]),t._v(" "),s("ol",[s("li",[t._v("引用不是一个对象，而是别名，指针是一个对象")]),t._v(" "),s("li",[t._v("引用只能指向一个对象，不能指向一个字面值或者表达式，指针可以指向一个对象，也可以指向一个字面值或者表达式。")]),t._v(" "),s("li",[t._v("空值：指针可以具有空值（nullptr），表示指向无效或未初始化的内存。引用必须始终引用一个有效的对象，不允许为空。")])]),t._v(" "),s("p",[t._v("指针应该处于一下4个状态")]),t._v(" "),s("ol",[s("li",[t._v("指向一个对象")]),t._v(" "),s("li",[t._v("指向紧邻对象所占空间的下一个位置")]),t._v(" "),s("li",[t._v("空指针，指针没有指向任何对象")]),t._v(" "),s("li",[t._v("无效指针，也就是上述情况之外的其他值")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("初始化所有的指针，定义为nullptr或者0，使用未经初始化的指针是程序报错的重大原因之一。")])]),t._v(" "),s("h2",{attrs:{id:"使用array初始化vector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用array初始化vector"}},[t._v("#")]),t._v(" 使用Array初始化Vector")]),t._v(" "),s("p",[t._v("Vector对象无法初始化数组，但是Array可以初始化Vector")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("C++标准库")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n       *  @brief  Builds a %vector from a range.\n       *  @param  __first  An input iterator.\n       *  @param  __last  An input iterator.\n       *  @param  __a  An allocator.\n       *\n       *  Create a %vector consisting of copies of the elements from\n       *  [first,last).\n       *\n       *  If the iterators are forward, bidirectional, or\n       *  random-access, then this will call the elements' copy\n       *  constructor N times (where N is distance(first,last)) and do\n       *  no memory reallocation.  But if only input iterators are\n       *  used, then this will do at most 2N calls to the copy\n       *  constructor, and logN memory reallocations.\n       */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("__cplusplus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("201103L")])])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_InputIterator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("_RequireInputIter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_InputIterator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_InputIterator __first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _InputIterator __last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allocator_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" __a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allocator_type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_Base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_M_range_initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t      std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__iterator_category")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])])]),t._v(" "),s("p",[t._v("这段代码是关于C++标准库中vector容器构造函数的注释，它说明了构造函数的功能和行为。")]),t._v(" "),s("p",[t._v("注释中描述的是使用迭代器范围构造vector对象的构造函数。具体来说，这个构造函数接受两个迭代器__first和__last，表示一个范围。它会从指定的范围中复制元素来构造vector对象。")]),t._v(" "),s("p",[t._v("如果传入的迭代器是前向迭代器、双向迭代器或随机访问迭代器，那么构造函数将会调用元素的拷贝构造函数N次（其中N是first和last之间的距离），并且不进行内存重分配。但是，如果只使用输入迭代器，那么构造函数最多会调用2N次拷贝构造函数，并且进行logN次内存重分配。")]),t._v(" "),s("p",[t._v("这段代码中还包含了一个条件编译的部分，根据编译器是否支持C++11及以上版本的特性来确定是否启用这个构造函数的定义。")])])}),[],!1,null,null,null);s.default=r.exports}}]);