<template>
  <div class="popup">
    <div class="popupModal">
      <h2>{{title}}</h2>
      <p class="message">지금 가입하면 꿈꾸던 기업에 재직 중인 현직자와 <span>익명</span>으로 대화할 수 있습니다.</p>
      <ul class="socialAuthentication">
        <li
          v-for="(social, index) in socialAuthentication"
          v-bind:key="index"
          v-bind:style="{backgroundColor: social.brandColor}"
        >
          {{social.name}} 계정으로 회원가입
        </li>
      </ul>
      <button class="Afterwards" v-on:click="handleAfterwards">나중에 하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    handleAfterwards: {
      type: Function,
      required: true,
    }
  },
  data() {
    return {
      title: '회원가입',
      socialAuthentication: [
        {
          name: '페이스북',
          brandColor: '#3b5998'
        },
        {
          name: '구글',
          brandColor: '#ea4335'
        },
        {
          name: '네이버',
          brandColor: '#00bd39'
        }
      ],
    };
  },
}
</script>

<style lang="less" scoped>
  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .7);
    .popupModal {
      background: white;
      width: 800px;
      position: relative;
      top: 20%;
      left: 50%;
      margin-left: -400px;
      padding-top: 20px;
      .message {
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        padding: 30px 140px;
        box-sizing: border-box;
        font-size: 22px;
        line-height: 30px;
        border: 1px solid black;
        span {
          color: red;
        }
      }
      .socialAuthentication {
        width: 90%;
        color: white;
        margin-left: 5%;
        li {
          border: 1px solid black;
          font-size: 20px;
          line-height: 50px;
          margin-top: 20px;
        }
      }
      .Afterwards {
        margin-top: 20px;
        border: 0;
        font-size: 16px;
        margin-bottom: 20px;
        padding: 5px;
      }
    }
  }
</style>
