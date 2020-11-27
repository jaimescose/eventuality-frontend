import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    slogan: 'Eventuality, a new day, a new adventure',
    signup: {
      name: 'Signup',
      errors: {
        usernameNotAvailable: 'Username is not available'
      }
    },
    login: {
      name: 'Login',
      errors: {}
    },
    username: 'Username',
    email: 'Email',
    password: 'Password',
  },
  'es': {
    slogan: 'Eventuality, un nuevo día, una nueva aventura',
    signup: {
      name: 'Registrarse',
      errors: {
        usernameNotAvailable: 'Nombre no disponible'
      }
    },
    login: {
      name: 'Iniciar sesión',
      errors: {}
    },
    username: 'Nombre de usuario',
    email: 'Correo electrónico',
    password: 'Contraseña',
  }
};

const i18n = new VueI18n({
  locale: 'en', 
  fallbackLocale: 'es',
  messages
});

export default i18n