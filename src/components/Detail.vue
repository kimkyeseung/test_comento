<template>
  <div class="contentsDetail">
    <Popup
      v-if="initialVisit"
      v-bind:handleAfterwards="handleAfterwards"
    />
    <Banner v-else/>
  </div>
</template>

<script>
import Popup from './Popup';
import Banner from './Banner';

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
    Banner
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
