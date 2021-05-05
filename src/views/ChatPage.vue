<template>
  <div class="chat-box-container">
    <div class="chat-box">
      <div class="chat-header">
        <span class="user-status"></span><span class="user-title">{{ recipient_name }}</span>
      </div>
      <div class="chat-history">

        <div v-for="(message, id) in messages" :key="id">
          <div v-if="(message.sender === sender_id && message.recipient === recipient_id) || (message.recipient === sender_id && message.sender === recipient_id)">
            <div v-if="message.sender === sender_id" class="chat-message-right">
              <div  class="chat-message right-arrow">
                {{ message.content }}
              </div>
              <img src="../assets/stitch.jpg" alt="" srcset="" class="chat-image">
            </div>
            <div v-else class="chat-message-left">
              <img :src="require(`@/assets/${ recipient_image }`)" alt="" srcset="" class="chat-image">
              <div  class="chat-message left-arrow">
                {{ message.content }}
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div class="chat-form">
        <input type="text" name="" id="" class="input-message" placeholder="Type Here...">
        <input type="button" value="Send" class="btn-send">
      </div>
    </div>
  </div>
</template>

<script>
import users_data from '../../jsonUser.json';

export default {
  name: 'ChatPage',
  data(){
    return {
      sender_id: "8856",
      messages: [
        {
          "id": "0001",
          "sender": "4452",
          "recipient": "8856",
          "content": "Hi there! Looking to get started? I can help to answer to your question!"
        },
        {
          "id": "0002",
          "sender": "8856",
          "recipient": "4452",
          "content": "Yes! I really need help now"
        },
        {
          "id": "0003",
          "sender": "4452",
          "recipient": "8856",
          "content": "I will go now. See you!"
        },
        {
          "id": "0004",
          "sender": "3352",
          "recipient": "8856",
          "content": "test"
        }
      ]
    }
  },
  mounted(){

    this.getRecipient();
    
  },
  computed: {
    recipient_id(){
      return this.$route.params.id
    },
    recipient_name(){
      let rcpt = users_data.find(x => x.id === this.$route.params.id);
      return rcpt.name
    },
    recipient_image(){
      let rcpt = users_data.find(x => x.id === this.$route.params.id);
      return rcpt.image
    }
  },
  methods: {
    getRecipient(){

      let i = users_data.find(x => x.id === this.recipient_id);
      this.recipient_data = i;

    }
  }
}
</script>

<style scoped>

.chat-box-container {
  width: 60%;
  margin: 50px 0 50px 40%;
  padding: 0 5rem;
}

.chat-box {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.chat-history {
  height: 75vh;
  background: #202028;
  padding: 2rem;
  text-align: left;
  font-size: 14px;
  color: #9494A4;
  line-height: 1.5rem;
  overflow-y: scroll;
}

.chat-form {
  height: 100px;
  background: #202028;    
  border-radius: 0 0 4px 4px;
  padding: 2rem;
  border-top: 1px solid #7373f22e;
}

.chat-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.chat-message-left, .chat-message-right {
  display: flex;
  margin-bottom: 2rem;
}

.chat-message-right {
  justify-content: flex-end;
}

.chat-message {
  margin: 0 1rem;
  padding: 1rem;
  background: #2D2C3C;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  position: relative;
}

.left-arrow::before {
  content: '';
  border-width: 8px;
  border-style: solid;
  border-color: transparent #2d2c3c transparent transparent;
  position: absolute;
  top: 15px;
  left: -15px;
}

.right-arrow::after {
  content: '';
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent #2d2c3c;
  position: absolute;
  top: 15px;
  right: -15px;
}

.input-message {
  width: 50%;
  color: #C0B9B8;
  padding: 10px 20px;
  border: none;
  border-radius: 40px;
  background: #353544;
  outline: none;
  margin-right: 20px;
}

.btn-send {
  width: 15%;
  color: #fff;
  padding: 10px 20px;
  border: none;
  background: #6B6BF1;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-send:hover {
  background: #5E5ED0;
}

.chat-header {
  text-align: left;
  padding: 10px 20px;
  background: #202028;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #7373f22e;
}

.user-status {
  display: inline-block;
  border: 5px solid #46e646;
  border-radius: 50%;
  margin-right: 10px;
}

.user-title {
  color: #777782;
}
</style>
