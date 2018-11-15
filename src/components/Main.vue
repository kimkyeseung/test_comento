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
import axios from 'axios';

let list = [];
const order = 'asc';
const category = 1;
const page = 1;
axios.get(`http://comento.cafe24.com/request.php?page=${page}&ord=${order}&category=${category}`)
  .then((res) => {
    console.log(res.data);
    list = res.data;
  })
  .catch((err) => {
    throw err;
  });

export default {
  name: 'Main',
  data() {
    return {
      list,
    };
  },
};
</script>

<style lang="less" scoped>

</style>
