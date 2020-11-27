<template>
  <article class="card">
    <h3 class="title">{{ event.name }}</h3>
    <p class="description">{{ event.description }}</p>
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