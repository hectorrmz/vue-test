<template>
  <div class="about">
    <h1>This is an About Page {{test}}</h1>
    <HelloWorld />

    <div class="admin-user">
      <div class="user">
        <div>Name</div>
        <div>Email</div>
        <div>Password</div>
      </div>
      <div class="user" v-for="user in adminUsers" :key="user.id">
        <div class="username">{{user.username}}</div>
        <div class="email">{{user.email}}</div>
        <div class="password">{{user.password}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import HelloWorld from '../components/HelloWorld.vue';
import { User } from '@/models/User';

export default Vue.extend({
  name: 'About',
  components: { HelloWorld },
  data() {
    return {
      test: 'It is Working!!',
    };
  },
  computed: {
    ...mapGetters(['adminUsers']),
  },
});
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.admin-user {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 10px 0;
  border: 1px solid $light-gray;

  .user {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid $light-gray;

    &:first-child {
      font-weight: 600;
    }

    &:last-child {
      border: 0;
    }

    .username {
      font-weight: 600;
    }
  }
}
</style>