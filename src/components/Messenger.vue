<template>
  <div class="messenger">
    <div class="container">
      <router-link to="/" class="">
        <h1>{{page_title}}</h1>
        <i class="medium material-icons">chat</i>
      </router-link>
    </div>
    <div id="messagesDiv">
      <ul v-for="(message,index) in messages" :key="id">
        <li><p>{{message.message}}</p></li>
      </ul>
    </div>

      <textarea v-model="message" name = "message" v-on:keyup.enter="submitMessage"></textarea>
    
      <button @click="submitMessage" class="btn green">
        Submit<i class="material-icons right" id="sub_btn">send</i>
      </button>
      <button @click="deleteMessage" class="btn red" >
        Delete<i class="material-icons right" id="del_btn">delete</i>
      </button>
  </div>
</template>

<script>
  import db from './firebaseInit'
export default {
  name: 'Messenger',
  data () {
    return {
      page_title: 'Vue Messenger',
      message: null,
      id:null,
      messages:[],	  
      msg_id: 0
    }
  },
  methods: {
    fetchData() {
      this.messages.length = 0;	  
      db.collection('messageData').orderBy('msg_id').get().then(querySnapshot => {	 
	  this.msg_id = querySnapshot.size-1;
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'msg_id': doc.data().msg_id,
            'message': doc.data().message

          };
          this.messages.push(data);
        })
      })
    },
    deleteMessage() {
      this.message = "";
    },
    submitMessage() {
      this.msg_id++;
      db.collection('messageData').add({
        msg_id: this.msg_id,
        message: this.message
      })
      this.message = "";
      this.fetchData();
    }
   
  },
  created() {
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,i  {
  color: #42b983;
}

  #messagesDiv {
    padding: 2%;
    border: 6px solid #c0ca33;
    overflow-y: scroll;
    border-radius: 8px;
    max-height:300px;
    height:300px;
  }
  input, textarea {
    margin-top: 5%;
    border-radius: 8px;
  }
  p{
    color:darkblue;
  }
#sub_btn, #del_btn {
    color:white;
  }
</style>
