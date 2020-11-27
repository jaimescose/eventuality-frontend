<template>
  <section class="events">
    <ul>
      <li
        is="EventItemSummary"
        v-for="event in eventsList"
        v-bind:event="event"
        v-bind:key="event.id"
      ></li>
    </ul>
  </section>
</template>

<script>
import EventItemSummary from "./EventItemSummary.vue";

export default {
  name: "EventsList",
  components: {
    EventItemSummary,
  },
  data: function () {
    return {
      eventsList: [
        {
          id: 0,
          name: "Event name",
          description: "This is the event description",
          category: "Category",
        },
        {
          id: 1,
          name: "Event name",
          description: "This is the event description",
          category: "Category",
        },
        {
          id: 2,
          name: "Event name",
          description: "This is the event description",
          category: "Category",
        },
        {
          id: 3,
          name: "Event name",
          description: "This is the event description",
          category: "Category",
        },
        {
          id: 4,
          name: "Event name",
          description: "This is the event description",
          category: "Category",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
