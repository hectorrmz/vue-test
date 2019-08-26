<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>User Identifier: {{id}}</h2>
    <button class="btn primary" @click="changeId()">Change</button>

    <div class="answer-box" v-if="data">
      <div class="answer" v-once>{{data.answer}}</div>
      <div class="image">
        <img :src="data.image" alt />
      </div>
    </div>

    <p>Users: {{users.length}}</p>

    <div class="info">
      <div class="user" v-for="user in users" :key="user.id">
        <div class="group">
          <p class="title">Username</p>
          <p>{{user.username}}</p>
        </div>
        <div class="group">
          <p class="title">Email</p>
          <p>{{user.email}}</p>
        </div>
        <div class="group">
          <p class="title">Password</p>
          <p>{{user.password}}</p>
        </div>
        <div class="group">
          <p class="title">Role</p>
          <p>{{user.role}}</p>
        </div>

        <button class="btn primary" @click="update(user.id)">Update</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  props: ['data'],
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(['users', 'id']),
  },
  methods: {
    changeId(): void {
      this.$store.commit('changeId', Math.random() * 100);
    },
    update(id: string) {
      this.$router.push({ name: 'contact', params: { id } });
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.answer-box {
  display: flex;
  width: 400px;
  margin: 25px auto;
  justify-content: space-around;
  align-items: center;

  img {
    max-width: 200px;
  }
}

.info {
  max-width: 500px;
  margin: 15px auto;
  padding: 15px;
  border: 1px solid $light-gray;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 1.5;

  .user {
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid $light-gray;
    text-align: right;

    .group {
      display: flex;
      justify-content: space-between;

      .title {
        font-weight: 500;
      }
    }
  }
}
</style>
