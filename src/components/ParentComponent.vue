<template>
  <div>
    <h1>Parent Component</h1>
    <ChildrenComponent 
      :todos="todos" 
      v-for="time in counter" 
      :key="`old-${time}`" 
      :parentStaticData="parentStaticData" 
      :style="style"
      @click="onClick" 
    />
    <hr>
    <hr>
    <hr>
    <ChildrenProxyComponent 
      v-for="time in counter" 
      :key="`new-${time}`" 
      :parentStaticData="parentStaticData" 
      :style="style"
      @click="onClick" 
    />
  </div>
</template>

<script>
import ChildrenComponent from './ChildrenComponent';
import ChildrenProxyComponent from './ChildrenProxyComponent';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      parentStaticData: 'I am parent static data',
      counter: 1,
    }
  },
  components: {
    ChildrenComponent,
    ChildrenProxyComponent,
  },
  computed: {
    ...mapState(['todos']),
    style() {
      return 'background-color: lightblue;';
    }
  },
  methods: {
    onClick(payload) {
      window.console.log(1, payload);
    },
  }
}
</script>