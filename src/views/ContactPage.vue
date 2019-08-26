<template>
  <div class="contact-page">
    <h1>Contact Page</h1>
    <div class="contact-form">
      <UserForm :user="user" @submitted="updateUser" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import UserForm from '../components/UserForm.vue';
import { User } from '../models/User';
import yesNoService from '../services/yesno';

export default Vue.extend({
  name: 'Contact',
  props: ['id'],
  components: { UserForm },
  computed: {
    user(): User {
      return this.$store.getters.filteredUser(this.id);
    },
  },
  methods: {
    updateUser(user: User) {
      this.$store.dispatch('submitUser', user).then(res => {
        this.$router.push({ name: 'home', params: { data: res } });
      });
    },
  },
});
</script>

<style lang="scss" scoped>
</style>

