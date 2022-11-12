<template>
	<div class="animation-detail-page">
		<div class="right">
			<div class="select">
				<div class="list-title clearfix">
					<h4 title="正片">正片</h4>
					 <span class="ep-list-order"></span> 
					 <span class="ep-list-progress">{{select}}/{{animationDetail.total}}</span>
				</div>
				<div class="longlist">
					<li report-id="click_ep" class="ep-item" :class="{'visited':item==select}" v-for="item in 10" @click="selectThisOne(item)" :key="item">
						<span :title="item" class="ep-title">{{item}}</span>
					</li>
				</div>
			</div>
			
			<div class="recommend">
				<h4 title="推荐">推荐</h4>
				<CollectCard v-for="(item,key) in recommond" :key="key" :collectCard="item"></CollectCard>
			</div>
		</div>
		<!-- :class="{'hiddenMouse':this.hidden&&this.fullscreen,'showMouse':!(this.hidden&&this.fullscreen)}" -->
		<div class="player-container">
			<div class="video"
					@mousemove="mouseMove">
				<vue-core-video-player
				style="z-index: 1;"
					v-preventReClick
					:src="mp4"
					:title="title"
					@play="play"
					@pause="pause"
					@timeupdate="timeupdate($event)"
					:controls="true">
				</vue-core-video-player>
				<!-- 使用v-barrage放置弹幕 -->
				<v-barrage ref="child1" class="v-barrage-sign1" v-show="bulletChatStatus&&!fullscreen" key="1" style="z-index: 122;" :arr="bulletChat.arr1" :isPause="bulletChat.isPause" :percent="30"></v-barrage>
				<v-barrage ref="child2" class="v-barrage-sign2" v-show="bulletChatStatus&&fullscreen" style="z-index: 122;width: 100vw;" key="2" :arr="bulletChat.arr2" :isPause="bulletChat.isPause" :percent="30"></v-barrage>
			</div>
			
			
			
			<div class="bullet-chat">
				<span class="bullet-header">
					已装填{{animationDetail.loadBulletChat}}条弹幕
				</span>
				<el-switch
				  v-model="bulletChatStatus"
					active-color="#00a1d6"
					style="margin-left: 50px;">
				</el-switch>
				
				<span class="sendButton" @click="sendBarrage">发送</span>
				<div class="bullet-input">
					<el-input placeholder="请输入内容" v-model="input" class="input-with-select" size="small"></el-input>
				</div>
				<el-color-picker v-model="color" size="mini" class="color-pick" :predefine="predefineColors"></el-color-picker>
				<div class="bullet-type" @click="swithType">
					<el-image
						style="width: 32px; height: 37px"
						:src="bulletType==='default'?require('@/assets/image/svg/roll.png'):require('@/assets/image/svg/top.png')"
						fit="fill"></el-image>
				</div>
			</div>
		</div>
		
		
		<div class="introduce">
			<div class="history-card">
				<div class="drop-item-op">
					<p @click="changeStatus">{{animationDetail.status==1?'取消追番':'追番'}}</p>
				</div>
				<div class="ainimation-name">{{animationDetail.name}}</div>
				<div class="ainimation-other">{{animationDetail.viewCounts}}播放&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{animationDetail.bulletChat}}弹幕</div>
				<div class="ainimation-detail">{{animationDetail.detail}}</div>
				<div class="ainimation-other">{{animationDetail.type}} | {{animationDetail.placeOfOrigin}}</div>
				<div class="ainimation-other">全{{animationDetail.total}}话</div>
			</div>
			<el-image fit="fill" :src="animationDetail.url">
				<div slot="error" class="image-slot">
					<div class="error-image"></div>
				</div>
			</el-image>
		</div>
	</div>
</template>

<script>
	import CollectCard from '../../components/CollectCard.vue'
	import VBarrage from '@/components/VBarrage/index.vue';
	
	function checkIsFullScreen(){
			var isFullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen;
			return isFullScreen == undefined ? false : isFullScreen;
	}
	export default {
		name: 'detail',
		components:{
			CollectCard,
			VBarrage 
		},
		mounted() {
			window.addEventListener("resize", this.checkFullScreen);
			//加上下面代码，将弹幕放入vue-core-video-player-layers这个div中才能显示
			// $('.vue-core-video-player-layers').prepend($('.barrage-wrapper'))
			$('.vue-core-video-player-layers').prepend($('.v-barrage-sign1'))
			$('.vue-core-video-player-layers').prepend($('.v-barrage-sign2'))
		},
		data(){
			return {
				animationDetail:{
					url:require('@/assets/image/animation/01.jpg'),
					id:1,
					name:"欢迎加入NHK",
					total:12,
					type:"动画",
					placeOfOrigin:"日本",
					status:1,
					viewCounts:14323,
					bulletChat:6000,
					loadBulletChat:2000,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。然后某一天，在他面前出现了一个神秘的美少女小岬，自称是日本废柴协会(NHK)的工作人员，要帮助废柴同学回归社会"
				},
				predefineColors:[
					'#FE0302','#FF7204','#FFAA02','#FFD302','#FFFF00','#A0EE00','#00CD00','#019899','#4266BE','#89D5FF','#CC0273',
					'#222222','#9B9B9B'
				],
				select:1,
				recommond:[
					{url:require('@/assets/image/animation/01.jpg'),id:1,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
					{url:require('@/assets/image/animation/01.jpg'),id:2,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
				],
				mp4:[
					{
						src:require('@/assets/movie/01.mp4'),
						resolution:360
					},
					{
						src:require('@/assets/movie/01.mp4'),
						resolution:720
					},
					{
						src:require('@/assets/movie/01.mp4'),
						resolution:1080
					}
				],
				title:"织田信奈的野望",
				fullscreen:false,
				polling: null,
				timeCount: 0,
				judgeTimer: null,
				bulletChatStatus:true,
				input:'',
				bulletChat: {
				  arr1: [], // 传入的弹幕源数组
					arr2: [],
				  isPause: false, // 控制是否暂停弹幕
				  sendContent: null, // 自己发送的弹幕内容
				  isJs: false, // 是否解析html
				  direction: 'default'
				},
				color:'',
				bulletType:'default',
				bulletList:[],
				currentTime:0,
				time1:0
			}
		},
		methods:{
			timeupdate(event){
				//向上整除，后面加的0.265防止弹幕发送没有及时加载出来
				let nowTime = Math.round(event.target.currentTime/0.265)*0.265
				if(nowTime==this.currentTime){
					return
				}
				this.currentTime = nowTime
				// console.log(this.currentTime)
				let arr = []
				for(let i=0; i<this.bulletList.length; i++){
					// console.log(Math.round((this.currentTime-this.bulletList[i].time)*10)/10)
					let time = Math.round((this.currentTime-this.bulletList[i].time)*1000)/1000
					if(time<=0.265&&time>0){
						arr.push(this.bulletList[i])
					}
				}
				function compare(a,b){
					return a.time - b.time
				}
				arr.sort(compare)
				if(arr.length > 0){
					if(this.fullscreen){
						this.bulletChat.arr2.push(...arr)
					}else{
						this.bulletChat.arr1.push(...arr)
					}
					
				}
			},
			swithType(){
				this.bulletType = this.bulletType == 'default'?'top':'default'
			},
			// 发送弹幕
			sendBarrage() {
				if(this.input == ''){
					this.$message({
						message: '弹幕不能为空',
						type: 'warning'
					});
				}else if(this.input.length > 60){
					this.$message({
						message: '弹幕不能超过60字',
						type: 'warning'
					});
				}else{
					const that = this
					this.bulletList.push({
						content: that.input, // 弹幕内容
						direction: that.bulletType, // 方向  default | top
						isSelf: true, // 是否是自己发的弹幕
						style: {
						  color: that.color
						},
						time: that.currentTime+0.265,
						isJs: false // 是否解析html
					})
					// this.bulletChat.arr.push({
					//   content: that.input, // 弹幕内容
					//   direction: that.bulletType, // 方向  default | top
					//   isSelf: true, // 是否是自己发的弹幕
					//   style: {
					//     color: that.color
					//   },
					// 	time: that.currentTime,
					//   isJs: false // 是否解析html
					// });
				}
			},
			changeStatus(){
				this.animationDetail.status == 1?this.animationDetail.status=0:this.animationDetail.status=1
			},
			selectThisOne(item){
				this.select = item
			},
			play(){
				this.bulletChat.isPause = false
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},
			pause(){
				this.bulletChat.isPause = true
				this.$message({
					message: '警告哦，这是一条警告消息',
					type: 'warning'
				});
			},
			checkFullScreen(){
				document.addEventListener('webkitfullscreenchange', () => {
					if (checkIsFullScreen()) {
						// this.$refs.child2.changeWidth()
						this.fullscreen = true
					} else {
						this.fullscreen = false
					}
				});
				
			},
			mouseMove() {
			  clearTimeout(this.judgeTimer);
			  clearInterval(this.polling);
			  this.timer = null;
			  this.polling = null;
			  this.timeCount = ++this.timeCount % 100;
				if(this.fullscreen){
					let node1 = document.getElementsByClassName('vcp-dashboard')[0]
					let node4 = document.getElementsByClassName('play-pause-layer')[0]
					let node5 = document.getElementsByClassName('title-layer')[0]
					node1.style.display = ''
					node4.style.display = ''
					node5.style.display = ''
				}
			},
			hiddenMouse() {
				clearInterval(this.polling);
				this.polling = setInterval(() => {
				    // 具体业务代码
						if(this.fullscreen){
							let node1 = document.getElementsByClassName('vcp-dashboard')[0]
							let node4 = document.getElementsByClassName('play-pause-layer')[0]
							let node5 = document.getElementsByClassName('title-layer')[0]
							node1.style.display = 'none'
							node4.style.display = 'none'
							node5.style.display = 'none'
						}
				}, 3000);
			}
		},
		watch:{
			fullscreen:{
				// 数据发生变化就会调用这个函数  
				handler(newVal, oldVal) {
					if(newVal){
							this.$message({
								message: '全屏',
								type: 'warning'
							});
						}else{
							this.$message({
								message: '缩小',
								type: 'warning'
							});
						}
					},
					// 立即处理 进入页面就触发
					immediate: true
			},
			timeCount: {
				handler() {
					this.judgeTimer = null;
					this.polling = null;
					clearTimeout(this.judgeTimer);
					clearInterval(this.polling);
					this.judgeTimer = setTimeout(() => {
						this.hiddenMouse()
					}, 3000);
				},
			}	
		},
		destroyed() {
			window.removeEventListener("resize", this.checkFullScreen);
		},
		
	}
</script>

<style lang="scss" scoped>
.visited{
	border-color: #00a1d6 !important;
	background-color: #00a1d6 !important;
	color: #fff !important;
}
.hiddenMouse{
	cursor: none;
}
.showMouse{
	cursor: auto;
}
.fullScanBarrage{
	position: absolute;
	width: 100vw;
}
.animation-detail-page{
	position: absolute;
	width: 80%;
	height: calc(100% - 70px);
	margin-top: 5px;
	margin-left: 10%;
	background-color: white;
	border-radius: 8px;
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	.right{
		width: 24%;
		float: right;
		position: relative;
		.recommend{
			width: 100%;
			height: 100px;
			padding-left: 16px;
			padding-right: 16px;
			// background-color: #00a1d6;s
			h4{
				height: 42px;
				line-height: 42px;
				font-size: 16px;
				color: #212121;
				font-weight: 400;
				max-width: 220px;
				overflow: hidden;
				-o-text-overflow: ellipsis;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.select{
			background-color: #f4f4f4;
			border-radius: 2px;
			margin-bottom: 40px;
			padding-bottom: 20px;
			.longlist{
				max-height: 350px;
				padding-left: 16px;
				position: relative;
				// padding: 0 0 6px 6px;
				display: block;
				overflow: auto;
				.ep-item{
					float: left;
					width: 64px;
					height: 36px;
					background-color: #fff;
					border: 1px solid #e5e9ef;
					margin-top: 8px;
					margin-right: 18px;
					padding: 0;
					text-align: center;
					-webkit-transition: none;
					-o-transition: none;
					transition: none;
					overflow: visible;
					opacity: 1;
					cursor: pointer;
					list-style: none;
					border-radius: 2px;
					text-overflow: ellipsis;
					white-space: nowrap;
					.ep-title {
					    overflow: hidden;
					    -o-text-overflow: ellipsis;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    height: 36px;
					    line-height: 36px;
					    display: block;
							font-size: 12px;
							text-align: center;
					}
				}
				.ep-item:hover{
					border-color: #00a1d6;
					background-color: #00a1d6;
					color: #fff;
				}
			}
			.list-title {
				height: 42px;
				padding: 0 16px;
				h4{
					float: left;
					height: 42px;
					line-height: 42px;
					font-size: 16px;
					color: #212121;
					font-weight: 400;
					max-width: 220px;
					overflow: hidden;
					-o-text-overflow: ellipsis;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.ep-list-progress {
					display: block;
					float: right;
					height: 42px;
					line-height: 42px;
					font-size: 12px;
					color: #999;
				}
			}
		}
		
	}
	.player-container{
		width: 74%;
		box-shadow: 0 2px 8px #e5e9ef;
		.video{
			position: relative;
			width: 100%;
			aspect-ratio: 1.78/1;
			// background-color: antiquewhite;
		}
		.bullet-chat{
			width: 100%;
			height: 40px;
			background-color: white;
			font-size: 13px;
			.bullet-header{
				margin-left: 16px;
				line-height: 40px;
				color: #505050;
				user-select: none;
			}
			.bullet-input{
				float: right;
				width: 50%;
				margin-top: 4px;
				margin-right: -2px;
			}
			.color-pick{
				float: right;
				margin-right: 30px;
				margin-top: 6px;
			}
			.bullet-type{
				float: right;
				margin-right: 30px;
				margin-top: 3px;
				cursor: pointer;
			}
			.sendButton{
				float: right;
				cursor: pointer;
				margin-right: 5%;
				margin-top: 4px;
				background-color:#00a1d6;
				color: white;
				box-sizing: border-box;
				outline: none;
				text-align: inherit;
				-webkit-box-pack: center;
				justify-content: center;
				height: 32px;
				line-height: 32px;
				width: 62px;
				min-width: 62px;
				border-radius: 0 8px 8px 0;
				text-align: center;
			}
		}
	}
	
	.introduce{
		width: 74%;
		margin-top: 8px;
		// border-top: 1px solid #E3E5E7;
		padding-top: 8px;
		width: 74%;
		/deep/ .el-image{
			cursor: pointer;
			width: 104px;
			height: 148px;
			background-color: #DCDCDC;
			border-radius: 8px;
			transition: box-shadow .15s ease;
			.image-slot{
				.error-image{
					width: 104px;
					height: 148px;
					background-image: url('../../assets/image/example/07.png');
					background-size: 100% 100%;
				}
			}
		}
		.history-card{
			position: absolute;
			margin-left: 130px;
			width: calc(74% - 160px);
			.ainimation-name{
					color: #282828;
					width: 200px;
					font-size: 18px;
					text-overflow:ellipsis;
					white-space: nowrap;
					overflow:hidden; 
				}
				.ainimation-detail{
					margin-top: 10px;
					width: 100%;
					overflow:hidden; 
					font-weight: 400;
					color: #222;
					line-height: 20px;
					max-height: 40px;
					font-size: 12px;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					text-overflow:ellipsis;
					white-space: normal;
					display: -webkit-box;
				}
				.ainimation-other{
					margin-top: 10px;
					font-size: 12px;
					color: #999;
					line-height: 14px;
				}
				.drop-item-op p{
					float: right;
					// margin-left: 110px;
					// margin-top: -25px;
					width: 60px;
					text-align: center;
					cursor: pointer;
					display: block;
					background: white;
					padding: 0 10px;
					border: 1px solid #DCDFE6;
					line-height: 26px;
					height: 26px;
					font-size: 12px;
					border-radius: 4px;
					text-decoration: none;
					color: #999;
					outline: none;
				}
				.drop-item-op p:hover {
				    background: #00b5e5;
						color: white;
				}
			
		}
	}
}
</style>