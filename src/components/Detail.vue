<template>
  <div class="contentsDetail">
    <Popup
      v-if="initialVisit"
      v-bind:handleAfterwards="handleAfterwards"
    />
  </div>
</template>

<script>
import Popup from './Popup';

export default {
  name: 'Detail',
  data() {
    return {
      title: 'details',
      initialVisit: true,
    };
  },
  components: {
    Popup,
  },
  created() {

  },
  methods: {
    handleAfterwards() {
      this.initialVisit = false;
    },
  },
}
</script>

<style lang="less" scoped>

</style>
