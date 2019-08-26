<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="answer-box" v-if="data">
      <div class="answer" v-once>{{data.answer}}</div>
      <div class="image">
        <img :src="data.image" alt />
      </div>
    </div>

    <div class="info">
      <div class="list-header">
        <div class="total">Users: {{users.length}}</div>
        <div class="filter">
          <input
            type="text"
            class="form-control"
            v-model="filterInput"
            placeholder="Search by Name..."
            name="filter"
          />
        </div>
      </div>
      <div class="user" v-for="user in filteredUsers" :key="user.id">
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
import { User } from '@/models/User';

export default Vue.extend({
  name: 'home',
  props: ['data'],
  mounted() {
    this.$store.dispatch('loadUsers');
  },
  data() {
    return {
      filterInput: '',
    };
  },
  computed: {
    filteredUsers(): User[] {
      return this.$store.state.users.filter((user: User) =>
        user.username.toLowerCase().includes(this.filterInput.toLowerCase())
      );
    },
    ...mapState(['users']),
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

  .list-header {
    display: flex;
    border-bottom: 1px solid $light-gray;
    justify-content: space-between;
    align-items: center;
  }

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
