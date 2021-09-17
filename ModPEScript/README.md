## 什么是ModPE?
ModPE Script（非官方译作ModPE脚本，无歧义时通常简称为ModPE）是一类相继由 ModPE 插件和BlockLauncher 支持的模组的统称，一般情况下多指后者。严格来说，前者与后者是同一对象的不同阶段，后者本质上是对前者内容的扩充。在 ModPE Script 产生的早期，同一个脚本可能能够同时在 iOS 和 Android 上运行。若无特殊说明，下文中 ModPE 均指 ModPE Script。

ModPE（在 MinecraftPE 圈内）也称 JS（得名于该脚本文件的后缀为 .js），是一种由 JavaScript 编写的脚本。一个单独的 .js 文件可被 BlockLauncher 直接加载。

ModPE 实际是通过 Mozilla Rhino 执行的，由 libmcpelauncher.so（BlockLauncher 内的库文件）和 JNI 向 ModPE 提供原生函数（指 MinecraftPE 本身的函数）支持，这些函数在 BlockLauncher 的 Java 层声明并由 C++ 层将其实现，实现于JVM 的 Rhino 能够直接对其调用。

......

### 为什么要记录？
这些作品几乎是我在刚刚接触编程时创造的（初中 16岁），
当然现在已经无法使用了。

在步入社会、光阴飞逝，现在已是一名职业码农，看到曾今的作品
不经感慨，我老了。无法理解曾今连电脑都没有，通过手机如何
写出这样的代码。

由于最初没有保存到云盘(或者已被删除)
仅有部分内容保留下来

### 目录介绍

- Space_70701 JS 1.8 [2014-12]
- 70701_Series -0.1.js [2014-2015]
