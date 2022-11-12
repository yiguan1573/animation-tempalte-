<template>
	<div class="message">
		<div class="main-message">
			<div class="title">
				系统通知
			</div>
			<MessageCard v-for="item in messageCard" :key="item.id" :messageCardMessage="item"></MessageCard>
			<div style="margin-top: 60px;"></div>
		</div>
	</div>
</template>

<script>
	import MessageCard from '../../components/MessageCard.vue'
	export default {
		name: '',
		components:{
			MessageCard
		},
		data(){
			return {
				messageCard:[
					{id:1,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:2,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:3,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:4,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:5,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:6,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:7,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:8,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:9,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:10,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:11,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
					{id:12,title:"B币券到账通知","time":"2022年10月7日 23:42","content":"领取任务后发布首稿即可得积分奖励！任务时间结束后，可在【我的-创作首页-新手任务】领取奖励。快来领取你的新手任务吧~"},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message{
		position: flex;
		width: 100%;
		height: 100vh;
		background:url('../../assets/image/bg/06.jpg') top/cover no-repeat fixed;
		.main-message{
			width: 60%;
			margin-left: 20%;
			padding-left: 10px;
			padding-right: 10px;
			-webkit-box-flex: 1;
			flex: 1;
			display: -webkit-box;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			flex-direction: column;
			background-color: rgba(255,255,255,0.5);
			overflow-y: scroll;
			height: 100%;
			.title{
				height: 42px;
				background-color: #fff;
				box-shadow: 0 2px 4px 0 rgba(121, 146, 185,0.54);
				-ms-flex-negative: 0;
				flex-shrink: 0;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: justify;
				-ms-flex-pack: justify;
				justify-content: space-between;
				padding: 0 16px;
				font-size: 15px;
				// color: #666;
				color: black;
				border-radius: 4px;
				margin-top: 10px;
				margin-bottom: 10px;
				font-weight: 800;
			}
		}
	}
</style>