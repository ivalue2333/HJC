/**
组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 <button-counter>。
我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用。

一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝

有的时候用一个事件来抛出一个特定的值是非常有用的。例如我们可能想让 <blog-post> 组件决定它的文本要放大多少。
这时可以使用 $emit 的第二个参数来提供这个值：
然后当在父级组件监听这个事件的时候，我们可以通过 $event 访问到被抛出的这个值：


一个重要的事情值得注意，关注点分离不等于文件类型分离。在现代 UI 开发中，
我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，
把它们划分为松散耦合的组件再将其组合起来更合理一些。
在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。
*/

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var app = new Vue({
  el: '#components-demo',
  data: {
    message: ''
  }
})


Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
    ],
    postFontSize: 1
  }
})