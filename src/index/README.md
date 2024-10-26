---
title: 功能
index: false
icon: fa-solid fa-scroll
category:
  - 使用指南


headerDepth: 6

---

## 有的内容加载较慢可能是因为页面内内容比较多导致的

<Catalog />



::: normal-demo

```html
<!DOCTYPE html>
<html lang="en">
     
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            (function() {
                var a_idx = 0;
                window.onclick = function(event) {
                    var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤",
                        "❤敬业❤", "❤诚信❤", "❤友善❤");
                    var heart = document.createElement("b"); //创建b元素
                    heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
 
                    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
                    a_idx = (a_idx + 1) % a.length;
                    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
 
                    var f = 13, // 字体大小
                        x = event.clientX - f / 2 - 30, // 横坐标
                        y = event.clientY - f, // 纵坐标
                        c = randomColor(), // 随机颜色
                        a = 1, // 透明度
                        s = 0.8; // 放大缩小
 
                    var timer = setInterval(function() { //添加定时器
                        if (a <= 0) {
                            document.body.removeChild(heart);
                            clearInterval(timer);
                        } else {
                            heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                                c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                                s + ");";
 
                            y--;
                            a -= 0.016;
                            s += 0.002;
                        }
                    }, 15)
                }
                // 随机颜色
 
                function randomColor() {
                    return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                        .random() * 255)) + ")";
                }
            }());
        </script>
    </head>
     
    <body>
         <h1>鼠标点击画面</h1>
 
        <div style="margin: auto; width: 100%; text-align: center; background: #3a4f66; border-width: 1px;border-color: #00f2ea;color:white;
margin-top:30px;padding-top:15px;padding-bottom:15px;
border-radius:12px">
            <script>
                let ip_inter = ''
                const ipString = ''
                var key = 0;
 
                function getIP(json) {
 
                    const ipString = `$ {
                        json.ip
                    }`;
                    document.write("你的IP是：", json.ip)
                    ip_inter = String(json.ip);
                    document.write(country);
                    console.log(country);
                }
            </script>
            <script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
        </div>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>
        <link href="https://fonts.googleapis.com/css2?family=Kablammo:MORF@60&display=swap" rel="stylesheet">
        <div class="quzhewoniuguangtel">
            <style>
                /*小白勿动*/
                @keyframes morphEffect {
                    0% {
                        font-variation-settings:"MORF" 0;
                        color: #eb4132
                    }
                    25% {
                        font-variation-settings:"MORF" 20;
                        color: #fbbd01
                    }
                    50% {
                        font-variation-settings:"MORF" 40;
                        color: #31aa52
                    }
                    75% {
                        font-variation-settings:"MORF" 60;
                        color: #4086f4
                    }
                    100% {
                        font-variation-settings:"MORF" 0;
                        color: #eb4132
                    }
                }
                .quzhewoniuguangtel {
                    /*小白勿动*/
                    font-family:"Kablammo", system-ui;
                    animation: morphEffect 5s infinite;
                    text-align: center;
                    margin: 20px auto 20px auto;
                    /*调节字体大小*/
                    font-size: 50px;
                }
            </style>
            <!-- 底下字段修改为你想输出的文字：英文、阿拉伯数字-->Welcome to my website!
            <svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"></path>
            </svg>
        </div>
        <div style="position: relative;">
            <img src="https://pic.rmb.bdstatic.com/bjh/240929/7904baab6049ac8e1093ee3dee2048335930.png
" alt="描述" style="position: absolute;top:-10px;right: 10px;width:23%; z-index: 1;">
             <h1>AGC安装包说明</h1>
 
             <h2>一、该安装哪个APK文件？</h2>
 
            <ul>
                <li>对于“大多数”手机，您可以安装常规APK包</li>
                <li>三星手机使用 samsung 包</li>
                <li>一加使用 Snapcam 包</li>
                <li>XIAOMI/REDMI可以使用任何包</li>
                <li>对于Realme/Oppo和少数OnePlus设备,在A12/13上Aweme软件包大概会导致裁剪后的照片变黑，这并不是由于AGC问题而是由于您的手机软件</li>
            </ul>
             <h2>二、如何导入配置文件和库文件？</h2>
 
            <p>配置文件和库文件的导入可参考我的博客教程（教程演示包用的日文的8.4），导入过程无异。</p>
            <p>🧩<a href="https://www.ourbotapp.top/%e8%b0%b7%e6%ad%8c%e7%9b%b8%e6%9c%ba%e6%97%a5%e6%96%87%e5%a4%a7%e4%bd%ac%e7%89%88%e4%bd%bf%e7%94%a8%e6%95%99%e7%a8%8b/71/" title="谷歌相机导入配置文件和库文件教程">【教程点击此处】</a>
            </p>
             <h2>三、配置文件和库文件在哪找？</h2>
 
            <p>🧩配置文件和库文件可在AGCTOOKIT内找（注意下载的文件要和安装包和手机型号一致）</p>
            <p>🧩日文大佬的配置文件和库文件在相关文件夹里，自己去翻一下</p>
        </div>
    </body>
 
</html>
```

:::