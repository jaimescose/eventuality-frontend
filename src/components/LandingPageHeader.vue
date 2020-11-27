<template>
  <header class="header">
    <div class="content">
      <h1>Eventuality</h1>
      <p>{{ $t('slogan') }}</p>
      <router-link class="button-background" tag="button" to="/signup">{{ $t('signup.name') }}!</router-link>
      <button class="button-background" v-on:click="changeLocale">locale</button>
    </div>
    <img src="@/assets/happy-bunch-small.png" />
  </header>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "LandingPageHero",
  methods: {
    changeLocale() {
      console.log('locale')
      i18n.locale = "es";
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  background-color: var(--primary);
  color: var(--shadow);
  position: relative;
  text-align: center;
  height: 500px;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  h1 {
    margin-block-end: 1em;
  }

  .content {
    display: inline-block;
    padding-top: 2em;
  }
}
</style>
