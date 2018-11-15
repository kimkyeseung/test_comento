<template>
  <div class="filterModalBackground">
    <div class="filterModal">
      <fieldset>
        <legend>{{title}}</legend>
        <button class="filterCloseBtn" v-on:click="handleModalClose">닫기</button>

        <template v-for="cat in category">
          <input
            type="checkbox"
            v-bind:value="cat.no"
            v-bind:id="cat.name"
            v-bind:key="'input' + cat.name"
            v-model="checkedCategory"
            true-value="yes"
            false-value="no"
          >
          <label v-bind:for="cat.name" v-bind:key="'label' + cat.name">{{cat.name}}</label>
        </template>
        <button class="filterSaveBtn" v-on:click="handleCategorySelect(checkedCategory)">저장</button>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterModal',
  props: {
    category: {
      type: Array,
      required: true,
    },
    handleModalClose: {
      type: Function,
      required: true,
    },
    selectedCategory: {
      type: Array,
    },
    handleCategorySelect: {
      type: Function,
      required: true,
    },
  },
  data() {
    // console.log(this.selectedCategory);
    return {
      title: '필터',
      checkedCategory: [],
    };
  },
  created() {
    for (let i = 0; i < this.selectedCategory.length; i++) {
      this.checkedCategory.push(this.selectedCategory[i]);
    }
  },
};
</script>

<style lang="less" scoped>
  .filterModalBackground {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .7);
    .filterModal {
      background: white;
      width: 400px;
      height: 100px;
      position: relative;
      top: 20%;
      left: 50%;
      margin-left: -200px;
      fieldset {
        border: 0;
        legend {
          text-align: left;
          display: block;
          font-size: 20px;
          line-height: 50px;
          margin-left: 50px;
        }
        .filterCloseBtn {
          position: absolute;
          right: 20px;
          top: 20px;
          width: 32px;
          height: 32px;
          text-indent: -9999px;
          border: 0;
          opacity: 0.3;
        }
        .filterCloseBtn::after, .filterCloseBtn::before {
          position: absolute;
          left: 15px;
          top: 4px;
          content: ' ';
          height: 24px;
          width: 2px;
          background-color: #333;
        }
        .filterCloseBtn::before {
          transform: rotate(45deg);
        }
        .filterCloseBtn::after {
          transform: rotate(-45deg);
        }
        .filterCloseBtn:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
