<template>
  <div class="home">
    <landing-page-header/>
    <events-list/>
  </div>
</template>

<script>
import LandingPageHeader from "@/components/LandingPageHeader.vue"
import EventsList from "@/components/EventsList.vue"

export default {
  name: "Home",
  components: {
    LandingPageHeader,
    EventsList
  }
}
</script>