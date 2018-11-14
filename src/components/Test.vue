<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <ul>
        <li>hi~</li>
        <li>hi~</li>
        <li>hi~</li>
        <li>hi~</li>
        <li>hi~</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      title: 'Hi! Vue',
      body: 'maybe we gonna be good friends',
    };
  },
};
</script>

<style lang="less" scoped>
h1 {
  font-size: 50px;
}
</style>
