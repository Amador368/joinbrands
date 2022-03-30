<template>
  <div class="homepage">             
    <header class="header flex justify-end">
      <nav class="flex justify-end">
        <router-link class="link bg-green-500 rounded-sm p-2 m-1" to="/sign-up">Sing up</router-link>
        <router-link  class="link bg-green-500 rounded-sm	p-2 m-1" to="/sign-in">Sign in</router-link>
      </nav>
    </header>
    <HelloWorld msg="Welcome to my homepage"/> 
  <router-view/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
$base-color: #c6538c;
$white: #fff;
.homepage {
  padding: 1rem;
}
.link {
  color: $white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
