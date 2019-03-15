/**
在 v-for 块中，我们拥有对父作用域属性的完全访问权限。v-for 还支持一个可选的第二个参数为当前项的索引。
你也可以用 of 替代 in 作为分隔符，因为它是最接近 JavaScript 迭代器的语法：

以下两个都能实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新
Vue.set：Vue.set(vm.items, indexOfItem, newValue)， 好像会截断额
Array.prototype.splice：vm.items.splice(indexOfItem, 1, newValue)
你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
*/

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})

var vm = new Vue({
  el: '#array',
  data: {
    items: ['a', 'b', 'c', 'f']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的

vm.$set(vm.items, 2, 'xx')



Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})