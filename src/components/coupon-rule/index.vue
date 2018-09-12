<template>
	<!-- 优惠券使用规则组件 -->
	<div class="coupon-rule-wraper" id="coupon-rule">
		<column-divide v-bind:columnName="columnName"></column-divide>
		<div class="content" id="content" v-bind:class="{'constant-height': isRuleShow}">
			<div class="coupon-rule-title">【投标有效期】</div>
			<div class="coupon-rule-detail"><font color="#f00">自发布日起15天内有效</font></div>
			<!-- <div class="coupon-rule-title">【项目描述】</div> -->
			<div class="coupon-rule-title">【项目描述】</div>
			<div class="coupon-rule-detail" id="activity">
				<p>1、精通js原生与jquery应用，熟悉使用vue等前端框架</p>
				<p>2、十分熟悉layui框架使用，能够修改内核源代码</p>
				<p>3、能够修改项目目前已有前端bug</p>
				<p>4、掌握浏览器兼容相关知识</p>
				<p>5、十分熟悉h5</p>
				<p>6、能够技术项目开始前的技术交流与技术测试后才可以合作，请技术一般的童鞋不要参加竞标</p>
				<p>7、使用过layuiadmin优先考虑</p>
				<p>8、根据目所画出的UI图完成前端界面，项目前端UI构图请参见附件，除了上传附件中的UI图，可能会有不到4个界面需要实现JS</p>
			</div>
			<div class="coupon-rule-detail">需求分析开发测试运维</div>
			<div class="coupon-rule-title">【要求办公地点】</div>
			<div class="coupon-rule-detail">上海、北京</div>
			<div class="coupon-rule-title">【项目要求】</div>
			<div class="coupon-rule-detail" id="activity">
				<p>1、精通js原生与jquery应用，熟悉使用vue等前端框架</p>
				<p>2、十分熟悉layui框架使用，能够修改内核源代码</p>
				<p>3、能够修改项目目前已有前端bug</p>
				<p>4、掌握浏览器兼容相关知识</p>
				<p>5、十分熟悉h5</p>
				<p>6、能够技术项目开始前的技术交流与技术测试后才可以合作，请技术一般的童鞋不要参加竞标</p>
				<p>7、使用过layuiadmin优先考虑</p>
				<p>8、根据目所画出的UI图完成前端界面，项目前端UI构图请参见附件</p>
			</div>
		</div>
		<div class="coupon-show-more" v-on:click="showMore();">
			<div class="show-more-mask" id="show-more-mask" v-bind:class="{'dis-block': isRuleShow, 'dis-none': !isRuleShow}"></div>
			<div class="show-more-btn" id="show-more-btn" v-bind:class="{'flex-down': isRuleShow, 'flex-up': !isRuleShow}"><span>查看详情</span></div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import columnDivide from '../column-divide/index.vue';

	export default {
		data () {
			return {
				isRuleShow: true,
				columnName: '项目详情'
			}
		},
		components: {
			columnDivide
		},
		methods: {
			showMore () {
				this.isRuleShow = !this.isRuleShow;
			}
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.coupon-rule-wraper {
		margin: 0 5%;
		line-height: 25px;
		.content {
			overflow: hidden;
			&.constant-height {
				height: 250px;
			}
			.coupon-rule-title {
				font-size: 15px;
				color: #06b0f0
			}
			.coupon-rule-detail {
				color: #4b4b4b;
			}
		}
	}

	.coupon-show-more {
		position: relative;
		.show-more-mask {
			position: absolute;
			top: -75px;
			width: 100%;
			height: 78px;
			background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(#FFFFFF));
		}
		.show-more-btn {
			display: block;
			color: #393939;
			span {
				display: block;
				width: 80px;
				height: 30px;
				margin: 0 auto;
				line-height: 30px;
				background-repeat: no-repeat;
				background-size: 12px 12px;
				background-position: 61px 9px;
			}
			&.flex-down span {
				background-image: url("./images/flex_down.png");
			}
			&.flex-up span {
				background-image: url("./images/flex_up.png");
			}
		}
	}
</style>