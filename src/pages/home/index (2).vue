<template>
	<view class="bg-f7 h-full">
			<div class="header">
				<h2>生活百宝箱</h2>
				<p class="mt-2">已上线128款 好玩应用</p>
			</div>
			<div class="content">
				<div class="" v-for="(item, index) in applicationData" :key="index">
					<div class="title">{{ item.group }}</div>
					<div class="application" v-for="(application, applicationIndex) in item.applications" :key="applicationIndex">
						<div class="application-item">
							<img :src="application.coverImage" />
							<text class="">{{ application.applicationName }}</text>
						</div>
					</div>
				</div>
			</div>
	</view>
</template>

<script>
import * as T from '@/utils/tools'


export default {
	data() {
		return {
			applicationData: [{
    "id": 'group-001',
    "group": '最热推荐', // 分组
    "applications": [
        {
            "id": "application-001",
            "applicationName": "宝宝起名", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '最热推荐', // 分组
            "sortIndex": 0 // 分组权重
        }, {
            "id": "application-002",
            "applicationName": "宝宝起名2", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名2", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '最热推荐', // 分组
            "sortIndex": 1 // 分组权重
        }, {
            "id": "application-003",
            "applicationName": "宝宝起名3", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名3", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '最热推荐', // 分组
            "sortIndex": 2 // 分组权重
        }, , {
            "id": "application-004",
            "applicationName": "宝宝起名3", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名3", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '最热推荐', // 分组
            "sortIndex": 3 // 分组权重
        }
    ]}, {
    "id": 'group-001',
    "group": '最热推荐', // 分组
    "applications": [
        {
            "id": "application-005",
            "applicationName": "宝宝起名3", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名3", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '宠物起名社', // 分组
            "sortIndex": 0 // 分组权重
        }, {
            "id": "application-006",
            "applicationName": "宝宝起名3", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名3", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '宠物起名社', // 分组
            "sortIndex": 1 // 分组权重
        }
    ]}, {
    "id": 'group-001',
    "group": '最热推荐', // 分组
    "applications": [
        {
            "id": "application-007",
            "applicationName": "宝宝起名3", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名3", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '星座运程', // 分组
            "sortIndex": 0 // 分组权重
        }, {
            "id": "application-008",
            "applicationName": "宝宝起名3", // 应用名称
            "coverImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 封面图片
            "backgroundImage": "https://img.cifnews.com/dev/20240527/06d56954dac24ac793621ad603abc8b4.png", // 页面背景图
            "detailJson": {}, // 后台配置内容
            "decription": "宝宝起名3", // 描述 非必填
            "tips": '', // 提示 非必填
            "group": '星座运程', // 分组
            "sortIndex": 1 // 分组权重
        }
    ]}
],
			isConnected: '', // 是否有网络连接
			// #ifdef MP-WEIXIN
			shareData: {
				title: '好投学堂', // 小程序分享
				imgUrl: '/static/home/logo.jpg'
			},
			// #endif
			indicatorDots: false,
			scrollTop: 0, // 搜索框滚动到175添加背景色
			banners: [], // 轮播图
			dailyTitle: '', // 日历-标题
			dailyDate: '', // 日历-日期
			dailyMonth: '', // 日历-月份
			hotList: [], // 热门文章
			articleList: [], // 最新文章
			columnList: [], // 专栏
			topicList: [], // 话题
			hotTopic: [], // 热门话题
			coursesList: [], // 课堂
			homeLiveList: [], // 直播
		}
	},
	onLoad() {
		// #ifndef APP-PLUS
		uni.hideTabBar()
		// #endif
		// #ifdef MP-WEIXIN
		uni.showShareMenu({
			withShareTicket: true,
			menus: ["shareAppMessage", "shareTimeline"]
		})
		const routes = getCurrentPages()
		this.nowUrl = routes[routes.length - 1].$page.fullPath
		// #endif
	},
	// #ifdef MP-WEIXIN
	onShareAppMessage() { // 小程序分享给朋友
		return {
			title: this.shareData.title,
			path: this.nowUrl,
			imageUrl: ''
		}
	},
	onShareTimeline() { // 小程序分享给朋友圈
		return {
			title: this.shareData.title,
			imageUrl: this.shareData.imgUrl
		}
	},
	// #endif
	onReady() {
		// #ifdef H5
		// var a = document.getElementsByClassName("uni-page-head__title")[0]
		// a.textContent = "首页"
		// #endif

		// #ifdef APP-PLUS || MP-WEIXIN
		// ios进入应用后,获取不到同意标识就弹出隐私政策的弹窗
		if (uni.getSystemInfoSync().osName === 'ios' && !uni.getStorageSync('agree')) this.$refs.iosPrivacy.open()
		// #endif
	},
	// #ifdef H5
	onHide() {
		uni.setStorage({
			key: "searchBg",
			data: this.scrollTop
		})
	},
	// #endif
	onShow() {
		console.log('applications', this.applicationData);
		function getNetworkType() {
			return new Promise((resolve, reject) => {
				uni.getNetworkType({
					success: function (res) {
						if (res.networkType !== "none") {
							resolve(true)
						} else {
							resolve(false)
						}
					},
				})
			})
		}
		getNetworkType().then((res) => {
			if (res) {
				this.isConnected = true
			} else {
				this.isConnected = false
			}
		})
		// #ifdef H5
		uni.getStorage({
			key: "searchBg",
			success: (res) => {
				let timer = setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: res.data + 1,
						duration: 0
					})
					clearTimeout(timer)
					uni.removeStorage({
						key: 'searchBg',
						success: (res) => { }
					})
				}, 40)
			}
		})
		// #endif
	},
	methods: {
		// 利用z-paging来监听滚动
		scroll(e) {
			this.scrollTop = e.detail.scrollTop
		},
		// #ifdef APP-PLUS
		uniShare() {
			const routes = getCurrentPages()
			const nowpath = routes[routes.length - 1].$page.fullPath
			const url = 'https://m.haotouxt.com/pages_detail/down/down?src=' + nowpath

			this.appShare({
				href: url,
				copyurl: 'https://m.haotouxt.com' + nowpath,
			})
		},
		// #endif
		filterTr(str) {
			return T.filterTr(str)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/common/fonts.css';
.header {
	text-align: center;
	margin-top: 20rpx;
}
.content {
	margin-top: 20rpx;
	padding: 20rpx;
	.title {
		font-size: 30rpx;
		line-height: 30rpx;
		padding-left: 20rpx;
		position: relative;		
		&::before {
			content: '';
			height: 30rpx;
			width: 10rpx;
			background: #999;
			position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin-right: 20rpx;
		}
	}
	.application {
		display: flex;
		margin-top: 20rpx;
		gap: 20rpx;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		.application-item {
			position: relative;
			img {
				width: 45vw;
				height: 100rpx;
				background: #ccc;
			}
			text {
				position: absolute;
                bottom: 0;
                right: 0;
                margin: auto;
                color: #fff;
                font-size: 24rpx;
                width: 100%;
                height: 30rpx;
                display: flex;
                align-items: center;
                justify-content: center;
				background-color: #555;
	        }
		}
	}
}


</style>
