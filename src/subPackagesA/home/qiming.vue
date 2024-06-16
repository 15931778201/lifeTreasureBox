<template>
  <view class="pageCommon" :style="{ '--bgImg': detailForm.backgroundImage }">
    <div class="header">
      <h2>{{ detailForm.applicationName }}</h2>
    </div>
    <div class="content">
      <div class="item">
        <label class="label" for="">姓氏</label>
        <input class="input" v-model="submitForm.surname" placeholder="请输入宝宝姓氏" />
      </div>
      <div class="item">
        <label class="label" for="">预产期</label>
        <input class="input" placeholder="XXXX/XX/XX" v-model="submitForm.date" />
        <!-- <picker class="input" mode="date" placeholder="XXXX/XX/XX" /> -->
      </div>
      <div class="item">
        <label class="label" for="">性别</label>
        <uni-data-checkbox v-model="submitForm.sex" :localdata="getOptions(sex)"></uni-data-checkbox>

        <!-- <uni-radio-group class="radio-group" v-model="submitForm.sex">
         <uni-radio value="r1" checked="true" />男</label>
          <label class="radio"><uni-radio value="r2" />女</label>          
        </uni-radio-group> -->
      </div>
      <div class="item">
        <label class="label" for="">特质</label>
        <uni-data-checkbox v-model="submitForm.characteristic" multiple :localdata="getOptions(characteristic)"></uni-data-checkbox>

        <!-- <checkbox-group class="checkbox-group" v-model="submitForm.characteristic">
          <label> <checkbox value="cb" checked="true" />勇敢 </label>
          <label> <checkbox value="cb" />帅气 </label>
          <label> <checkbox value="cb" />文雅 </label>
          <label> <checkbox value="cb" />富有 </label>
          <label> <checkbox value="cb" />神仙 </label>
          <label> <checkbox value="cb" />随意 </label>
          <label> <checkbox value="cb" />甜美 </label>
          <label> <checkbox value="cb" />可爱 </label>
          <label> <checkbox value="cb" />乖巧 </label>
          <label> <checkbox value="cb" />小孩 </label>
          <label> <checkbox value="cb" />勤快 </label>
          <label> <checkbox value="cb" />聪明 </label>
          <label> <checkbox value="cb" />健康 </label>
          <label> <checkbox value="cb" />情怀 </label>
          <label> <checkbox value="cb" />初恋 </label>
        </checkbox-group> -->
      </div>
      <div class="" v-for="(item, index) in detailForm.detailJson" :key="index">
        <div class="title">{{ item.label }}</div>
        <input v-if="!item.value" class="text-left text-30rpx" v-model="submitForm[item.label]" />
        <radio-group
          v-if="item.options && !item.multiple"
          class="text-left text-30rpx"
          v-model="submitForm[item.label]"
        >
          <radio v-for="(option, optionIndex) in item.options" :key="optionIndex" :value="option">{{
            option
          }}</radio>
        </radio-group>
        <checkbox-group
          v-if="item.options && item.multiple"
          class="text-left text-30rpx"
          v-model="submitForm[item.label]"
        >
          <checkbox
            v-for="(option, optionIndex) in item.options"
            :key="optionIndex"
            :value="option"
            >{{ option }}</checkbox
          >
        </checkbox-group>
      </div>
    </div>
    <div class="footer">
      <button class="button" @click="toTextResult">开始取名</button>
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
        },
        submitForm: {},
        options: {},
        sex: ['男', '女'],
        characteristic: ['勇敢', '洋气', '文雅', '帅气', '多金', '健康', '情怀', '美丽', '温柔', '勤劳', '好运', '聪明', '灵敏', '贴心', '随意']
      };
    },
    onShow() {},
    methods: {
      getOptions(list) {
        return list.map(item => {
          return {value: item, text: item}
        })
      },
      toTextResult() {
        const content = `请帮我想一个宝宝的名字，姓${this.submitForm.surname}，预产期在${this.submitForm.date}，性别${this.submitForm.sex}，要求有以下特质：${this.submitForm.characteristic.join('、')}等。`
        console.log(this.submitForm, content);
        // uni.navigateTo({
        //   url: '/subPackagesA/detail/result',
        // });
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
    padding: 20rpx;
    background: #fff;
    border-radius: 15rpx;
    .item {
      padding: 10rpx;
      .label {
        font-weight: bold;
      }
      .input {
        margin-top: 30rpx;
        border: 1px solid #aaa;
        height: 60rpx;
        border-radius: 4rpx;
      }
      .radio-group,
      .checkbox-group {
        margin-top: 30rpx;
        display: flex;
        gap: 40rpx;
        flex-wrap: wrap;
      }
    }
  }
  .footer {
    // padding: auto;
    .button {
      width: 80vw;
      height: 100rpx;
      margin: 30rpx auto;
      background-color: #f1aa2e;
      color: #333;
      font-size: 32rpx;
      font-weight: bold;
      line-height: 100rpx;
    }
  }
</style>
