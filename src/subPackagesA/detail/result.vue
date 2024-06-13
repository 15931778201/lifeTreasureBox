<template>
  <view class="pageCommon" :style="{ '--bgImg': detailForm.backgroundImage }">
    <div class="header">
      <h2>结果仅供参考</h2>
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in detailForm.resultData" :key="index">
        <div class="text" v-for="(text, tIndex) in item.split('')" :key="tIndex">{{ text }}</div>
      </div>
    </div>
    <div class="footer">
      <button class="button button0" @click="toIndex">返回首页</button>
      <button class="button" @click="toQiming">重新再来</button>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        detailForm: {
          id: 'application-004',
          applicationName: '宝宝起名', // 应用名称
          coverImage: 'https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png', // 封面图片
          backgroundImage:
            'https://img.cifnews.com/dev/20240606/c09ec784782a409ab0c6d995c65256af.png', // 页面背景图
          detailJson: [
            {
              label: '',
            },
          ], // 后台配置内容
          decription: '宝宝起名', // 描述 非必填
          tips: '', // 提示 非必填
          group: '最热推荐', // 分组
          sortIndex: 3, // 分组权重
          resultData: [
            '刘弘文',
            '刘子轩',
            '刘志远',
            '刘昊天',
            '刘丑男',
            '刘浩宇',
            '刘家伟',
            '刘大宝',
          ],
        },
        submitForm: {},
        options: {},
      };
    },
    onShow() {},
    methods: {
      toIndex() {
        uni.switchTab({
          url: '/pages/home/index',
        });
      },
      toQiming() {
        uni.navigateTo({
          url: '/subPackagesA/home/qiming',
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  .pageCommon {
    $bgImg: var(--bgImg);
    background: url(https://img.cifnews.com/dev/20240606/c09ec784782a409ab0c6d995c65256af.png)
      no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
    // background-position: center;
  }
  .header {
    padding-top: 20rpx;
    padding-bottom: 30rpx;
    text-align: center;
  }
  .content {
    width: 80vw;
    // height: 80vh;
    margin: auto;
    padding: 30rpx;
    background: #fff;
    border-radius: 15rpx;
    .item {
      padding: 20rpx;
      border: 1px solid #f1aa2e;
      margin-bottom: 20rpx;
      border-radius: 8rpx;
      .text {
        display: inline-block;
        padding: 10rpx;
        margin-right: 20rpx;
        border: 1px solid #aaa;
        border-radius: 4rpx;
      }
    }
  }
  .footer {
    // padding: auto;
    display: flex;
    justify-content: center;
    gap: 30rpx;
    width: 80vw;
    margin: auto;
    .button {
      width: 45%;
      height: 100rpx;
      margin: 30rpx auto;
      background-color: #f1aa2e;
      color: #333;
      font-size: 32rpx;
      font-weight: bold;
      line-height: 100rpx;
    }
    .button0 {
      background-color: #fff;
    }
  }
</style>
