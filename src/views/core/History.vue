<template>
	<div class="history-page">
		<div style="width: 100%; height: 40px;margin-top: 30px;margin-bottom: 30px;">
			<div class="animation-svg3"></div>
			<div class="animation-title" style="font-size: 28px;">历史记录</div>
			<div class="drop-item-op">
				<p @click="clearHistory">清空</p>
			</div>
			<div class="history-search">
				<el-input
						style="margin-left: -30px;"
						size="mini"
				    placeholder="请输入内容"
						@keyup.enter.native="handleClick"
				    v-model="input">
						<i slot="prefix" class="el-input__icon el-icon-search" @click="handleClick"></i>
				</el-input>
			</div>
		</div>
		
		<div class="main-history">
			<el-timeline v-show="!isEmpty">
				<el-timeline-item  v-for="(item,key) in history" :key="key" :timestamp="item.time" placement="top">
					<el-card>
						<div class="history-card">
							<h3 style="cursor: pointer;">{{item.name}}</h3>
							<p>全{{item.total}}话</p>
							<p>看到第{{item.currentEpisode}}话 {{item.timeOfEpisode}}</p>
						</div>
						<el-image fit="fill" :src="item.url">
							<div slot="error" class="image-slot">
								<div class="error-image"></div>
							</div>
						</el-image>
						<span class="el-icon-delete"></span>
					</el-card>
				</el-timeline-item>
			</el-timeline>
			<el-empty style="margin-top: 100px;" :image-size="200" v-show="isEmpty" description="暂无观影记录"></el-empty>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		components:{

		},
		data(){
			return {
				input: '',
				history:[
					{url:require('@/assets/image/animation/01.jpg'),id:1,name:"欢迎加入NHK",time:"2022年10月30日 20:40:00",total:12,currentEpisode:2,timeOfEpisode:"02:26"},
					{url:require('@/assets/image/animation/01.jpg'),id:2,name:"欢迎加入NHK",time:"2022年10月30日 20:40:00",total:12,currentEpisode:2,timeOfEpisode:"02:26"},
					{url:require('@/assets/image/animation/01.jpg'),id:3,name:"欢迎加入NHK",time:"2022年10月30日 20:40:00",total:12,currentEpisode:2,timeOfEpisode:"02:26"},
					{url:require('@/assets/image/animation/01.jpg'),id:4,name:"欢迎加入NHK",time:"2022年10月30日 20:40:00",total:12,currentEpisode:2,timeOfEpisode:"02:26"},
					{url:require('@/assets/image/animation/01.jpg'),id:5,name:"欢迎加入NHK",time:"2022年10月30日 20:40:00",total:12,currentEpisode:2,timeOfEpisode:"02:26"},
					{url:require('@/assets/image/animation/01.jpg'),id:6,name:"欢迎加入NHK",time:"2022年10月30日 20:40:00",total:12,currentEpisode:2,timeOfEpisode:"02:26"},
					{url:require('@/assets/image/animation/01.jpg'),id:7,name:"欢迎加入NHK",time:"2022年10月30日 20:40:00",total:12,currentEpisode:2,timeOfEpisode:"02:26"},
				]
			}
		},
		methods:{
			handleClick(){
				this.$message('这是一条消息提示');
			},
			clearHistory(){
				this.$message('清除成功');
			}
		},
		computed:{
			isEmpty(){
				if(this.history.length>0){
					return false
				}else{
					return true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.history-page{
		width: 60%;
		margin-left: 20%;
		.drop-item-op p{
			float: right;
			margin-top: 8px;
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
			color: #282828;
			outline: none;
		}
		.drop-item-op p:hover {
		    background: #00b5e5;
				color: white;
		}
		.history-search{
			float: right;
			width: 200px;
			margin-top: 8px;
		}
		.main-history{
			margin-bottom: 30px;
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
			/deep/ .el-image:hover{
				box-shadow: 0 20px 15px -10px rgba(0,0,0,0.2), 0 50px 35px -40px rgba(0, 0, 0, 0.4), 0 50px 35px -40px rgba(243, 2, 2, 0.2);
			}
			.history-card{
				position: absolute;
				margin-left: 165px;
				margin-top: 10px;
				p {
					margin-top: 34px;
					color: #99a2aa;
					font-size: 14px;
				}
			}
			span {
				float: right;
				font-size: 20px;
				color: #99a2aa;
				margin-top: 71px;
				margin-right: 20px;
				cursor: pointer;
			}
		}
		
	}
</style>