(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{310:function(s,a,e){s.exports=e.p+"assets/img/redis01.b69dca8c.png"},328:function(s,a,e){"use strict";e.r(a);var t=e(6),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("本教程是基于 Linux CentOS7 系统进行安装")]),s._v(" "),a("p",[s._v("在安装之前需要对 Linux 系统进行网络服务，防火墙等设置更改")])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#sql-vs-nosql"}},[s._v("SQL vs NoSQL")]),a("ul",[a("li",[a("a",{attrs:{href:"#redis-特点"}},[s._v("Redis 特点")])])])]),a("li",[a("a",{attrs:{href:"#安装-redis"}},[s._v("安装 Redis")]),a("ul",[a("li",[a("a",{attrs:{href:"#系统配置"}},[s._v("系统配置")])]),a("li",[a("a",{attrs:{href:"#安装依赖库"}},[s._v("安装依赖库")])]),a("li",[a("a",{attrs:{href:"#上传与解压"}},[s._v("上传与解压")])])])]),a("li",[a("a",{attrs:{href:"#启动redis"}},[s._v("启动Redis")]),a("ul",[a("li",[a("a",{attrs:{href:"#前台启动"}},[s._v("前台启动")])]),a("li",[a("a",{attrs:{href:"#后台启动"}},[s._v("后台启动")])]),a("li",[a("a",{attrs:{href:"#开机自启"}},[s._v("开机自启")])])])]),a("li",[a("a",{attrs:{href:"#图形界面redis"}},[s._v("图形界面Redis")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"sql-vs-nosql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-vs-nosql"}},[s._v("#")]),s._v(" SQL vs NoSQL")]),s._v(" "),a("blockquote",[a("p",[s._v("SQL 是关系型数据库，NoSQL 是非关系型数据库")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(310),alt:""}})]),s._v(" "),a("h3",{attrs:{id:"redis-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-特点"}},[s._v("#")]),s._v(" Redis 特点")]),s._v(" "),a("p",[s._v("Redis是一个基于内存的 "),a("code",[s._v("Key Value")]),s._v("的 NoSQL 数据库")]),s._v(" "),a("ul",[a("li",[s._v("键值（key-value）型，value支持多种不同数据结构，功能丰富")]),s._v(" "),a("li",[s._v("单线程，每个命令具备原子性")]),s._v(" "),a("li",[s._v("低延迟，速度快（基于内存、IO多路复用、良好的编码）")]),s._v(" "),a("li",[s._v("支持数据持久化")]),s._v(" "),a("li",[s._v("支持主从集群、分片集群")]),s._v(" "),a("li",[s._v("支持多语言客户端")])]),s._v(" "),a("h2",{attrs:{id:"安装-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-redis"}},[s._v("#")]),s._v(" 安装 Redis")]),s._v(" "),a("h3",{attrs:{id:"系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统配置"}},[s._v("#")]),s._v(" 系统配置")]),s._v(" "),a("p",[s._v("Linux 版本 CentOS7")]),s._v(" "),a("h3",{attrs:{id:"安装依赖库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖库"}},[s._v("#")]),s._v(" 安装依赖库")]),s._v(" "),a("p",[s._v("Redis是基于C语言编写的，因此首先需要安装Redis所需要的gcc依赖：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装环境")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y centos-release-scl scl-utils-build devtoolset-8-toolchain gcc-c++\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 devtoolset-8")]),s._v("\nscl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" devtoolset-8 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试gcc版本")]),s._v("\ngcc --version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"上传与解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传与解压"}},[s._v("#")]),s._v(" 上传与解压")]),s._v(" "),a("p",[s._v("下载 redis-6.2.6.tar.gz 放到任意目录")]),s._v(" "),a("p",[s._v("例如 /usr/local/src")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("解压")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzf redis-6.2.6.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入 redis 目录")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-6.2.6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行编译命令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果没有出错，应该就安装成功了。")]),s._v(" "),a("p",[s._v("默认的安装路径是在 "),a("code",[s._v("/usr/local/bin")]),s._v(" 目录下：")]),s._v(" "),a("p",[s._v("该目录以及默认配置到环境变量，因此可以在任意目录下运行这些命令。其中：")]),s._v(" "),a("ul",[a("li",[s._v("redis-cli：是redis提供的命令行客户端")]),s._v(" "),a("li",[s._v("redis-server：是redis的服务端启动脚本")]),s._v(" "),a("li",[s._v("redis-sentinel：是redis的哨兵启动脚本")])]),s._v(" "),a("h2",{attrs:{id:"启动redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动redis"}},[s._v("#")]),s._v(" 启动Redis")]),s._v(" "),a("p",[s._v("redis 的启动方式有很多种，例如：")]),s._v(" "),a("ul",[a("li",[s._v("默认启动")]),s._v(" "),a("li",[s._v("指定配置启动")]),s._v(" "),a("li",[s._v("开机自启")])]),s._v(" "),a("h3",{attrs:{id:"前台启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台启动"}},[s._v("#")]),s._v(" 前台启动")]),s._v(" "),a("p",[s._v("安装完成后，在任意目录输入"),a("code",[s._v("redis-server")]),s._v("命令即可启动 Redis")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("redis-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("前台启动会阻塞整个会话窗口，窗口关闭或者按下"),a("code",[s._v("CTRL + C")]),s._v("则 Redis 停止。不推荐使用。")]),s._v(" "),a("h3",{attrs:{id:"后台启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台启动"}},[s._v("#")]),s._v(" 后台启动")]),s._v(" "),a("p",[s._v("如果要让 Redis 以"),a("code",[s._v("后台")]),s._v("方式启动，则必须修改Redis配置文件，就在之前解压的 redis 安装包下（"),a("code",[s._v("/usr/local/src/redis-6.2.6")]),s._v("），名字叫 redis.conf")]),s._v(" "),a("p",[s._v("先将这个配置文件备份一份防止操作失误")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf redis.conf.bck\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后修改 redis.conf 文件中的一些配置：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("0.0.0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 守护进程，修改为yes后即可后台运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("daemonize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码，设置后访问Redis必须输入密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("requirepass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Redis 的其它常见配置：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听的端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("databases")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置redis能够使用的最大内存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("maxmemory")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("512mb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件，默认为空，不记录日志，可以指定日志文件名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("logfile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"redis.log"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("启动 Redis ：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入redis安装目录 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/redis-6.2.6\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nredis-server redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("停止服务：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用redis-cli来执行 shutdown 命令，即可停止 Redis 服务，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为之前配置了密码，因此需要通过 -u 来指定密码")]),s._v("\nredis-cli -u "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开机自启"}},[s._v("#")]),s._v(" 开机自启")]),s._v(" "),a("p",[s._v("可以通过配置来实现开机自启。")]),s._v(" "),a("p",[s._v("首先，新建一个系统服务文件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/systemd/system/redis.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("内容如下：")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[Unit]\nDescription=redis-server\nAfter=network.target\n\n[Service]\nType=forking\nExecStart=/usr/local/bin/redis-server /usr/local/src/redis-6.2.6/redis.conf\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("然后重载系统服务：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl daemon-reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在，可以用下面这组命令来操作 redis 了：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsystemctl start redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\nsystemctl stop redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nsystemctl restart redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("执行下面的命令，可以让 redis 开机自启：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"图形界面redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图形界面redis"}},[s._v("#")]),s._v(" 图形界面Redis")]),s._v(" "),a("p",[s._v("GitHub上的大神编写了 Redis 的图形化桌面客户端，"),a("a",{attrs:{href:"https://github.com/uglide/RedisDesktopManager",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我跳转"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("不过该仓库提供的是 RedisDesktopManager 的源码，并未提供 windows 安装包。")]),s._v(" "),a("p",[s._v("在下面这个仓库可以找到安装包，"),a("a",{attrs:{href:"https://github.com/lework/RedisDesktopManager-Windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我跳转"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);