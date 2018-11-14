<template>
  <div class="main">
    <div class="filter">
      <button>필터</button>
      <div class="order">
        <input type="radio" name="order" id="orderAsc">
        <label for="orderAsc">오름차순</label>
        <input type="radio" name="order" id="orderDesc">
        <label for="orderDesc">내림차순</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>

</style>
