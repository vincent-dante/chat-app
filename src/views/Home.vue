<template>
  <div class="chat-box">
    <div class="chat-history">

    </div>
    <div class="chat-form">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.chat-box {
  width: 60%;
  height: 500px;
  margin-left: 40%;
  padding: 5rem;
}

.chat-history {
  height: 500px;
  background: #202028;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.chat-form {
  margin-top: 20px;
  height: 10px;
  background: #202028;    
}

</style>
