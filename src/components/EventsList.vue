<template>
  <section class="events">
    <div v-if="$apollo.queries.events.loading">
      Loading...
    </div>

    <div v-if="events" class="content">
      <ul>
        <li
          is="EventItemSummary"
          v-for="event in events"
          v-bind:event="event"
          v-bind:key="event.id"
        ></li>
      </ul>
    </div>
  </section>
</template>

<script>
import EventItemSummary from "./EventItemSummary.vue";
import { GET_EVENTS_QUERY } from '@/graphql/queries/eventQueries.js'

export default {
  name: "EventsList",
  components: {
    EventItemSummary,
  },
  data: function () {
    return {
      loading: false,
      error: null,
      events: [],
    };
  },
  apollo: {
    events: {query: GET_EVENTS_QUERY}
  }
};
</script>

<style scoped lang="scss">
</style>
