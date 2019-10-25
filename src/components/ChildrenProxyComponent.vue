<template>
  <ChildrenComponent v-bind="attributes" v-on="$listeners" />
</template>

<script>
import ChildrenComponent from './ChildrenComponent';
import { mapState } from 'vuex';

export default {
  components: {
    ChildrenComponent,
  },
  computed: {
    ...mapState(['todos']),
    attributes() {
      return {...this.$attrs, todos: this.todos};
    },
  },
}
</script>
