### 安装

```
  npm install ew-drag --save-dev

```

安装的时候确保已经安装了`node.js`。然后安装完成之后，在`release`目录下找到`ewDrag.min.js`,然后在页面中通过`script`标签引入。

```
  <script src="/release/ewDrag.min.js"></script>

```

之后在页面中就可以创建一个构造函数使用呢，如下:

```
  var ewdrag = new ewDrag(option);

```

其中`option`为一个自定义的配置对象，后续会解释有哪些配置，我们也可以直接传一个`DOM元素`的`id`或`class`字符串，又或者直接传入一个`DOM`元素也行。一个简单的示例代码如下:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>demo</title>
    <style>
        .drag{
            width:100px;
            height:100px;
            border:1px solid;
        }
    </style>
</head>

<body>
    <div class="drag"></div>
    <script src="/ewdrag.min.js"></script>
    <script>
        var drag = new ewDrag('.drag');
    </script>
</body>

</html>

```

关于配置对象的详情描述，见下文。