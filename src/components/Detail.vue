<template>
  <div class="contentsDetail">
    <Popup
      v-if="initialVisit"
      v-bind:handleAfterwards="handleAfterwards"
    />
    <Banner v-else/>

    <div class="contentsDetailContext">
      <div class="contentsDetailContextHeader">
        <p>{{contentDetailArticle && contentDetailArticle.no}}</p>
        <h1>{{contentDetailArticle && contentDetailArticle.title}}</h1>
      </div>
      <div class="contentsDetailContextBody">
        <p>{{contentDetailArticle && contentDetailArticle.contents}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Popup from './Popup';
import Banner from './Banner';

export default {
  name: 'Detail',
  data() {
    return {
      title: 'details',
      initialVisit: true,
      contentDetailArticle: null,
      contentDetailreplies: null,
    };
  },
  components: {
    Popup,
    Banner,
  },
  created() {
    this.getContentDetail(this.$route.params.contentsDetail);
  },
  methods: {
    handleAfterwards() {
      this.initialVisit = false;
    },
    getContentDetail(contentNumber) {
      const contentDetailApi = `http://comento.cafe24.com/detail.php?req_no=${contentNumber}`;
      axios.get(contentDetailApi)
        .then((res) => {
          console.log(res);
          this.contentDetailArticle = res.data.detail.article;
          this.contentDetailreplies = res.data.detail.replies;
          console.log(this);
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
};

</script>

<style lang="less" scoped>
  .contentsDetailContext {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .contentsDetailContextHeader {
        background: #fafafa;
        margin-top: 10px;
        padding: 10px;
        position: relative;
        border: 1px solid #999;
      }
      .contentsDetailContextBody {
        
      }
  }
</style>
