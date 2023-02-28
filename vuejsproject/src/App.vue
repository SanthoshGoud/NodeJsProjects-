<template>
<div>{{ greet }} {{ name }}</div> <!-- mustache -->
 <div v-text="channel"></div>    <!-- v-text directive -->
<div v-html="welcome"></div>
<div v-html="hack"></div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
    greet:"Hello",
    name:"Santhosh",
    channel:"CodeEvoluation",
    welcome:"<b>Welcome</b>",
    hack:`<a href="#" onclick="alert('You have been hacked!')">Win a Price`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
