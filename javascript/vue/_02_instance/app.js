/**
虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。
因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。

如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值.

同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())

Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令：如id，class，其他特性
*/
