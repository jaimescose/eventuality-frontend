<template>
  <div class="signup">
    <h1 class="title">{{ $t('signup.name')}}</h1>
    <form action class="form" v-on:submit.prevent="signup">
      <label class="form-label" for="#email">{{ $t('email') }}:</label>
      <input 
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required placeholder="user@email.com" />
      <label class="form-label" for="#username">{{ $t('username') }}:</label>
      <input 
        v-model="username"
        class="form-input"
        type="username"
        id="username"
        required
        placeholder="username" />
      <label class="form-label" for="#password">{{ $t('password') }}:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="$t('password')" />
      <div v-if="exception">
        <p v-for="e in exceptions" v-bind:key="e" class="error">
          {{ $t(`${e.field}`) }}: {{ e.message }}
        </p>
      </div>
      <input class="form-submit" type="submit" value="Signup" />
    </form>
  </div>
</template>


<script>
import { CREATE_USER_MUTATION } from '@/graphql/queries/userQueries.js'

export default {
  name: "Signup",
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      usernameChanged: true,
      exception: false,
      exceptions: [],
      user: null,
    }
  },
  computed: {
  },
  watch: {
    email: function (newEmail, oldEmail) {
      const oldUsername = oldEmail.split("@")[0]
      if ((this.username === "" || this.username === oldUsername) && this.usernameChanged !== false) {
        this.username = newEmail.split("@")[0]
      } else {
        this.usernameChanged = true
      }
    }
  },
  methods: {
    async signup() {
      try {
        const response = await this.$apollo.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            username: this.username,
            email: this.email,
            password: this.password,
          }
        })
        const data = response.data.createUser

        this.exception = !data.success
        this.exceptions = data.exceptions

        if (!this.exception) {
          console.log('perform login')
          this.$router.replace('/feed')
        }
      
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>