<template>
  <form @submit.prevent="submit()">
    <h2>User Form</h2>
    <span>{{user.id}}</span>
    <div class="form-group">
      <input
        type="text"
        :class="{ 'error': $v.userData.username.$error }"
        v-model="$v.userData.username.$model"
        class="form-control"
        placeholder="Username"
        required
      />
      <div
        class="error-text"
        v-if="$v.userData.username.$error"
      >Username is required, at least 4 chars</div>
      <input
        type="text"
        v-model="$v.userData.email.$model"
        :class="{ 'error': $v.userData.email.$error }"
        name="email"
        class="form-control"
        placeholder="Email"
        debounce="500"
      />
      <div class="error-text" v-if="$v.userData.email.$error">Please provide a valid email address</div>
      <input
        type="password"
        v-model="userData.password"
        name="password"
        class="form-control"
        placeholder="Password"
      />
      <input
        type="password"
        name="confirmPassword"
        class="form-control"
        placeholder="Confirm Password"
      />
      <select class="form-control" name="role" v-model="userData.role">
        <option value>Select Role...</option>
        <option v-for="option in options" :value="option" :key="option">{{option}}</option>
      </select>
      <label for="keepLog" clas>
        <input v-model="keepSession" type="checkbox" id="keepLog" />
        Keep Session active
      </label>
    </div>
    <div class="form-group btn-bar">
      <button type="submit" class="btn primary" v-once>{{btnText}}</button>
      <button type="button" @click="cancel" class="btn secondary">Cancel</button>
    </div>
    {{$v.userData.username}}
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import passwordDirective from '../shared/password-directive';
import { validationMixin } from 'vuelidate';
import { minLength, required, email } from 'vuelidate/lib/validators';

export default Vue.extend({
  name: 'UserForm',
  directives: { pass: passwordDirective },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  mixins: [validationMixin],
  data() {
    return {
      keepSession: true,
      options: ['Admin', 'Super', 'Normal', 'Slave'],
      userData: { ...this.user },
    };
  },
  mounted() {
    console.log(this.userData);
  },
  computed: {
    btnText(): string {
      return this.user.id ? 'Update' : 'Create';
    },
  },
  validations: {
    userData: {
      username: { required, minLength: minLength(4) },
      email: { required, email },
      password: { required },
    },
    keepSession: { required },
  },
  methods: {
    submit() {
      this.$emit('submitted', this.userData);
    },
    cancel() {
      this.$router.back();
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 40px;
  box-sizing: border-box;
  border: 1px solid $light-gray;
  border-radius: 3px;
}
</style>