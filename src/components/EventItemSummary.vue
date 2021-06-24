<template>
  <article class="card">
    <h3 class="title"> <a :href="'events/' + event.id"> {{ event.name }} </a></h3>
    <p class="description">{{ event.name }}</p>
  </article>
</template>

<script>
export default {
  name: 'EventItemSummary',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>