# setTimeout-setInterval

通过这篇文章，你会知道：

- ​

[TOC]

## 是什么

## 为什么

## 怎么用

### 两者互换

```js
function run() {
    //其他代码
    setTimeout(function(){
        run();
    }, 10000);
}
setInterval(function(){
    run();
}, 10000);
```

第一段代码使用的是setTimeout来实现的，这个实现就有一个缺点，就是setTimeout是在代码的执行时间上加10秒，比如run()执行了100s,而整个过程可能是110s，第二段代码就不一样了，setInterval是当run()跑了不到10s，那么就是10s走一回，如果setInterval大于10s，我们后面详解。


## 怎么实现

## 总结

通过这篇文章，你会知道。

- ​

## 参考

- https://juejin.im/post/59cf06745188253fbe466f78