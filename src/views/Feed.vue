<template>
  <div class="feed">
    <events-list/>
  </div>
</template>

<script>
import EventsList from "@/components/EventsList.vue"

export default {
  name: "Feed",
  components: {
    EventsList
  }
}
</script>