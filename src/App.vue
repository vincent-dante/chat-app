<template>
  <div class="side-bar">
    <div>
      <img :src="require(`@/assets/${ currentUser.image }`)" alt="" srcset="" class="image">
      <div>
        <p>{{ currentUser.name }}</p>
      </div>
    </div>

    <div class="search-container">
      <input type="text" value="" class="input-search" placeholder="Search user...">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-icon" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </div>
    
    <div class="user-item-container">
      <div class="user-item" v-for="user in users" :key="user.id" @click="selectUser(user.id)">
        <img :src="require(`@/assets/${user.image}`)" alt="" srcset="" class="image">
        <div class="user-name">
          <p>{{ user.name }}</p>
        </div>
      </div>
    </div>

  </div>

  <router-view />
</template>

<script>
import data from '../jsonUser.json';

export default {
  name: 'App',
  data(){
    return {
      id: "8856",
      currentUser: {
        name: "",
        image: "no_image.png"
      },
      users: [],
      userSelected: ""
    }
  },
  mounted(){

    this.getCurrentUsers();
    this.getUsers();
    
  },
  methods: {
    getCurrentUsers(){
      
      let arr = data;
      let i = arr.findIndex(obj => obj.id === this.id);
      
      this.currentUser = arr[i];

    },
    getUsers(){

      this.users = data;
      let i = this.users.findIndex(obj => obj.id === this.id);

      if (i > -1) {
        this.users.splice(i, 1);
      }

    },
    selectUser(id){

      this.$router.push({ path: `/${id}` }) 

    }
  }
}
</script>

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
  color: #777782;
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

.search-container {
  position: relative;
  margin-top: 50px;
}

.input-search {
  display: block;
  width: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: none;
  background: #2a2a33;
  color: #6F696D;
  padding: 10px 40px;
  outline: none;
}

.input-search:focus {
  transition: all 0.3s;
  background: #353544;
  color: #C0B9B8;
}

.input-search:focus + .search-icon {
  transition: all 0.5s;
  color: #C0B9B8;
}

.search-icon {
  position: absolute;
  top: 10px;
  left: 15px;
  color: #6F696D;
}

.image {
  width: 60px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.user-item-container {
  margin-top: 50px;
}

.user-item {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px;
  align-items: center;
}

.user-item:hover {
  transition: all 0.3s;
  background: #1e1e26;
  border-radius: 4px;
  cursor: pointer;
 
}

.user-name {
  font-size: 14px;
  padding-left: 10px;
}
</style>
