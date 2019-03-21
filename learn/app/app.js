var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    pic: 'images/kitten.jpg',
    url: 'http://www.baidu.com'
  },
  methods: {
    laugh: function(event) {
        alert('ha ha ha')
    }
  }

})