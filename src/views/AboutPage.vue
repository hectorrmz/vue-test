<template>
  <div class="about">
    <h1>This is an About Page {{test}}</h1>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default Vue.extend({
  name: 'About',
  components: { HelloWorld },
  data() {
    return {
      test: 'It is Working!!',
    };
  },
});
</script>
