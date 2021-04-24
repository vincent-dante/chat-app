<template>
  <div class="chat-box-container">
    <div class="chat-box">
      <div class="chat-history">

        <div class="chat-message-left">
          <img src="../assets/cat.png" alt="" srcset="" class="chat-image">
          <div class="chat-message left-arrow">
            Hi there! <br>
            Looking to get started? I can help answer to your question! <br>
          </div>
        </div>

        <div class="chat-message-right">
          <div class="chat-message right-arrow">
            Yes! I really need help now
          </div>
          <img src="../assets/mai-sakura.jpg" alt="" srcset="" class="chat-image">
        </div>

      </div>
      <div class="chat-form">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.chat-box-container {
  width: 60%;
  height: 500px;
  margin: 50px 0 0 40%;
  padding: 0 5rem;
}

.chat-box {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.chat-history {
  height: 500px;
  background: #202028;
  border-radius: 4px 4px 0 0;
  padding: 2rem;
  text-align: left;
  font-size: 14px;
  color: #9494A4;
  line-height: 1.5rem;
}

.chat-form {
  height: 100px;
  background: #2D2C3C;    
  border-radius: 0 0 4px 4px;
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
</style>
