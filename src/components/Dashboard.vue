<template>
  <div class="dashboard">
    <div class="container">
    <router-link to="/messenger">
      <h1>{{page_title}}</h1>
   <i class="medium material-icons">chat</i>
   <h3>{{sub_title}}</h3>
    </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      page_title: 'Vue Messenger',
      sub_title:'Enter'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,i {
  color: #42b983;
}

</style>
