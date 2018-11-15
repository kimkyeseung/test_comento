<template>
  <div class="main">
    <FilterModal v-if="filterModalOn"/>
    <div class="top">
      <div class="filter">
        <button v-on:click="filterModalOn = true">필터</button>
      </div>
      <div class="order">
        <input type="radio" name="order" id="orderAsc">
        <label for="orderAsc">오름차순</label>
        <input type="radio" name="order" id="orderDesc">
        <label for="orderDesc">내림차순</label>
      </div>
    </div>
    <div class="contents">
      <ul>
        <li v-for="content in contentsList" v-bind:key="content.no">
          <div class="contentsHeader">
            <p class="contentsHeaderCategory">
              category <span class="contentsHeaderNumber">{{content.no}}</span>
            </p>
          </div>
          <div class="contentsBody">
            <p class="contentsBodyInfo">{{content.email}} | {{content.updated_at.split(' ')[0]}}</p>
            <h2 class="contentsBodyTitle">{{content.title}}</h2>
            <p class="contentsBodyContents">{{content.contents}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FilterModal from './FilterModal';

export default {
  name: 'Main',
  data() {
    return {
      contentsList: [],
      page: 1,
      order: 'asc',
      category: 1,
      filterModalOn: false,
    };
  },
  created() {
    axios.get(`http://comento.cafe24.com/request.php?page=${this.page}&ord=${this.order}&category=${this.category}`)
      .then((res) => {
        console.log(res.data);
        this.contentsList = res.data.list;
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  components: {
    FilterModal,
  },
  methods: {},
  computed: {},
};
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  ul,li {
    list-style: none;
  }

  .main {
    .top {
      width: 100%;
      height: 50px;
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 30px;
      position: relative;
      .filter {
        position: absolute;
        left: 0;
        button {
          width: 60px;
          height: 40px;
          border: 1px solid #666;
          font-size: 20px;
        }
      }
      .order {
        position: absolute;
        right: 0;
        font-size: 20px;
        line-height: 40px;
        input[type="radio"] {
          display: none
        }
        label {
          background: #fafafa;
          margin-left: 20px;
        }
      }
    }

    .contents {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      text-align: left;
      .contentsHeader {
        background: #fafafa;
        padding: 4px;
        position: relative;
        border: 1px solid #999;
        .contentsHeaderCategory {
          text-align: left;
        }
        .contentsHeaderNumber {
          position: absolute;
          right: 0;
        }
      }
      .contentsBody {
        border: 1px solid #999;
        border-top: 0;
        padding: 10px;
        .contentsBodyInfo {
          color: #666
        }
      }
    }
  }
</style>
