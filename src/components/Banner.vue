<template>
  <div class="banner">
    <p class="message">지금 가입하면 꿈꾸던 기업에 재직 중인 현직자와 <span>익명</span>으로 대화할 수 있습니다.</p>
    <div class="links">
      <button class="bannerSocialAuthentication">SNS계정으로 빠른 회원가입</button>
      <p>또는</p>
      <button class="bannerLogin">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
  .banner {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 20%;
    z-index: 1;
    border-top: 1px solid #666;
    .message {
      margin-top: 40px;
      font-size: 22px;
    }
    .links {
      width: 800px;
      margin: 0 auto;
      button {
        font-size: 20px;
        padding: 20px 40px;
        display: block;
        float: left;
      }
      p {
        float: left;
        padding: 20px 40px;
        font-size: 20px;
      }
    }
  }
</style>
