<template>
  <ChildrenComponent v-bind="attributes" v-dynamic-events="knownEvents" />
</template>

<script>
import ChildrenComponent from './ChildrenComponent';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      knownEvents: ['click'],
    }
  },
  components: {
    ChildrenComponent,
  },
  computed: {
    ...mapState(['todos']),
    attributes() {
      return {...this.$attrs, todos: this.todos};
    },
  },
  methods: {
    proxyEvent(eventName, eventData) {
      this.$emit(eventName, eventData)
    },
  },
}
</script>