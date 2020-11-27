<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
:root {
  --primary: #691b99;
  --lightPrimary: #9b4dcb;
  --darkPrimary: #37006a;
  --secondary: #221f3b;
  --lightSecondary: #4b4666;
  --darkSecondary: #000016;
  --white: #ffffff;
  --shadow: #ebebeb;
  font-size: 18px;
}

body {
  margin: 0;
  border: 0;
  font-family: "Lato", sans-serif;
}

.button {
  background-color: var(--primary);
  border-color: var(--white);
  color: var(--white);
  border-radius: 2em;
  padding: 0.5em 2.5em;
  text-align: center;
  outline: none;
  border-style: none;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary);
  }

  &:active {
    background-color: var(--lightSecondary);
  }

  &-background {
    @extend .button;
    border-style: solid;
  }
}
</style>
