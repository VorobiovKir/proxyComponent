<template>
  <div>
    <h2>Children Component {{ parentStaticData }}</h2>
    <div v-for="(todo, index) in todos" :key="index">
      <p @click="$emit('click', todo)">{{ todo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
    parentStaticData: {
      type: String,
      default: 'NO WAY'
    }
  }
}
</script>