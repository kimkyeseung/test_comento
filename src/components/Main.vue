<template>
  <div class="main">
    <FilterModal
      v-if="filterModalOn"
      v-bind:category="category"
      v-bind:handleModalClose="handleModalClose"
      v-bind:selectedCategory="selectedCategory"
      v-bind:handleCategorySelect="handleCategorySelect"
    />
    <div class="top">
      <div class="filter">
        <button v-on:click="filterModalOn = true">필터</button>
      </div>
      <div class="order">
        <input type="radio" name="order" id="orderAsc" checked>
        <label for="orderAsc" v-on:click="handleSort('asc')">오름차순</label>
        <input type="radio" name="order" id="orderDesc">
        <label for="orderDesc" v-on:click="handleSort('desc')">내림차순</label>
      </div>
    </div>
    <div class="contents">
      <ul>
        <li v-for="(content, index) in contentsList" v-bind:key="content.no">
          <div v-if="index && index % 4 === 0" class="ads">
            <p class="adsHeader">Sponsored</p>
            <div class="adsBody" >
              광고가 노출
              <!-- <img src="http://comento.cafe24.com/public/images/" alt=""> -->
            </div>
          </div>
          <router-link v-bind:to="content.no" >
            <div class="contentsHeader">
              <p class="contentsHeaderCategory">
                {{category[category.findIndex((cat) => cat.no === content.category_no)]
                  ? category[category.findIndex((cat) => cat.no === content.category_no)].name
                  : null}}
                <span class="contentsHeaderNumber">{{content.no}}</span>
              </p>
            </div>
            <div class="contentsBody">
              <p class="contentsBodyInfo">
                {{content.email}} | {{content.updated_at.split(' ')[0]}}
              </p>
              <h2 class="contentsBodyTitle">{{content.title}}</h2>
              <p class="contentsBodyContents">{{content.contents}}</p>
            </div>
          </router-link>
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
      adsList: [],
      adindex: 0,
      page: 1,
      order: 'asc',
      selectedCategory: [1, 2, 3],
      category: [],
      filterModalOn: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.onScroll, false);
    this.getContents(this.page, this.order);
    this.getCategory();
    this.getAds(this.page);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll, false);
  },
  components: {
    FilterModal,
  },
  methods: {
    handleModalClose() {
      this.filterModalOn = false;
    },
    handleCategorySelect(category) {
      this.selectedCategory = category.map(cat => Number(cat));
      this.$nextTick(() => {
        this.page = 1;
        this.contentsList.length = 0;
        this.getContents(this.page, this.order);
      });
    },
    getContents(page, order) {
      let contentsApi = `http://comento.cafe24.com/request.php?page=${page}&ord=${order}`;
      if (this.selectedCategory.length && this.selectedCategory.length < 3) {
        for (let i = 0; i < this.selectedCategory.length; i++) {
          contentsApi += `&category=${this.selectedCategory[i]}`;
          axios.get(contentsApi)
            .then((res) => {
              this.contentsList = this.contentsList.concat(res.data.list);
            })
            .catch((err) => {
              throw new Error(err);
            });
        }
      } else {
        axios.get(contentsApi)
          .then((res) => {
            this.contentsList = this.contentsList.concat(res.data.list);
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
    },
    getCategory() {
      axios.get('http://comento.cafe24.com/category.php')
        .then((res) => {
          this.category = res.data.list;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    getAds(page, limit = 3) {
      axios.get(`http://comento.cafe24.com/ads.php?page=${page}&limit${limit}`)
        .then((res) => {
          this.adsList = res.data.list;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    onScroll() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 4)) {
        this.page++;
        this.getContents(this.page, this.order);
      }
    },
    handleSort(order) {
      if (order === 'asc') {
        this.contentsList.sort((a, b) => a.no - b.no);
        this.order = 'asc';
      } else {
        this.contentsList.sort((a, b) => b.no - a.no);
        this.order = 'desc';
      }
    },
  },
  updated() {
  },
};
</script>

<style lang="less">
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
        input[type="radio"] + label {
          background: #fafafa;
          margin-left: 20px;
        }
        input[type="radio"]:checked + label {
          color: red;
        }
      }
    }

    .contents {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      text-align: left;
      .router-link {
        text-decoration: none;
      }
      .contentsHeader {
        background: #fafafa;
        margin-top: 10px;
        padding: 10px;
        position: relative;
        border: 1px solid #999;
        .contentsHeaderCategory {
          text-align: left;
        }
        .contentsHeaderNumber {
          position: absolute;
          right: 10px;
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
