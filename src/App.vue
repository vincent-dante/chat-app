<template>
  <div class="side-bar">
    <h1>Chat App</h1>

    <input type="text" value="" class="input-search">
    
    <div>
      <div class="user-item">
        <img src="./assets/cat.png" alt="" srcset="" class="image">
        <div>
          <p>Cat Suu</p>
        </div>
      </div>
      <div class="user-item">
        <img src="./assets/mai-sakura.jpg" alt="" srcset="" class="image">
        <div>
          <p>Mai Sakura</p>
        </div>
      </div>
      <div class="user-item">
        <img src="./assets/spongebob.jpg" alt="" srcset="" class="image">
        <div>
          <p>SpongeBob</p>
        </div>        
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

body {
  background: #272732;
  color: #fff;
}


#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.side-bar {
  background: #202028;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 40%;
  padding: 3rem 10rem;
}

.input-search {
  display: block;
  width: 100%;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 10px 30px;
  background: #48485b;
  color: #C0B9B8;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin-top: 50px;
}

.image {
  border-radius: 50%;
  width: 80px;
}

.user-item {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
}
</style>
