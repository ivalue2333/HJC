/**

*/

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    get_user_id: function() {
        axios.get('/users/12345').then(function(response){
            this.message = response.data['data']
            alert(this.message)
        })
    }
  }
})

axios.get('/users/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.data['data']);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });