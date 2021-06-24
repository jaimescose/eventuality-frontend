<template>
  <div class="login">
    <h1 class="title">{{ $t('login')}}</h1>
    <form action class="form" v-on:submit.prevent="login">
      <label class="form-label" for="#user-identifier">{{ $t('username') }} / {{ $t('email') }}:</label>
      <input 
        v-model="userIdentifier"
        class="form-input"
        type="username"
        id="user-identifier"
        required placeholder="username / user@email.com" />
      <label class="form-label" for="#password">{{ $t('password') }}:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="$t('password')" />
      <input class="form-submit" type="submit" value="Login" />
    </form>
  </div>
</template>


<script>
import { LOGIN_USER_MUTATION } from '@/graphql/queries/userQueries.js'

export default {
  name: "Login",
  data: function () {
    return {
      userIdentifier: "",
      password: "",
      email: "",
      username: "",
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$apollo.mutate({
          mutation: LOGIN_USER_MUTATION,
          variables: {
            userIdentifier: this.userIdentifier,
            password: this.password,
          }
        })
        const data = response.data.loginUser

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
  watch: {
    userIdentifier: function (newUserIdentifier) {
      if (newUserIdentifier.includes("@")) {
        this.email = newUserIdentifier
        this.username = ""
      } else {
        this.username = newUserIdentifier
        this.email = ""
      }
    }
  }
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
</style>