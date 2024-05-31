<template>
  <view class="pageCommon">
    <div class="header">
      <h2>{{ detailForm.applicationName }}</h2>
    </div>
    <div class="content">
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
  </view>
</template>

<script>
  export default {
    data() {
      return {
        detailForm: {
          id: 'application-004',
          applicationName: '宝宝起名3', // 应用名称
          coverImage: 'https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png', // 封面图片
          backgroundImage:
            'https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png', // 页面背景图
          detailJson: [
            {
              label: '',
            },
          ], // 后台配置内容
          decription: '宝宝起名3', // 描述 非必填
          tips: '', // 提示 非必填
          group: '最热推荐', // 分组
          sortIndex: 3, // 分组权重
        },
        submitForm: {},
        options: {},
      };
    },
    onShow() {},
    methods: {},
  };
</script>
