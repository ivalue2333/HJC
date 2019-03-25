/**
你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。
它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。
它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

text 和 textarea 元素使用 value 属性和 input 事件；
checkbox 和 radio 使用 checked 属性和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。
*/

var app = new Vue({
  el: '#app1',
  data: {
    message: ''
  }
})

new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})