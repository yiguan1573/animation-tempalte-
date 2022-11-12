<template>
	<div class="animationBasePage">
		
		<el-row>
		  <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2" :offset="1">
				<div class="logo">
					<img src="../assets/image/logo.png" :class="logoAnimation" alt="logo" @mouseenter="addAnimation">
				</div>
			</el-col>
		  <el-col :xs="7" :sm="7" :md="6" :lg="5" :xl="5">
				<div class="mainTab">
					<div :class="{'animate__animated':animation1,'animate__bounce':animation1}" @click="addAnimation1()">首页</div>
					<div :class="{'animate__animated':animation2,'animate__bounce':animation2}" @click="addAnimation2()">动画</div>
					<div :class="{'animate__animated':animation3,'animate__bounce':animation3}" @click="addAnimation3()">剧场版</div>
				</div>
			</el-col>
		  <el-col :xs="3" :sm="3" :md="3" :lg="7" :xl="7">
				<el-input
						style="margin-left: 30px;"
				    placeholder="请输入内容"
						@keyup.enter.native="handleClick"
				    v-model="input">
						<i slot="prefix" class="el-input__icon el-icon-search" @click="handleClick"></i>
				</el-input>
			</el-col>
			<el-col :xs="1" :sm="1" :md="2" :lg="1" :xl="1" :offset="3">
				<Personal style="margin-top: 4px; max-width: 44px; margin-left: 20px;"></Personal>
			</el-col>
		  <el-col :xs="6" :sm="6" :md="6" :lg="5" :xl="5">
				<div class="userTab">
					
					<div @click="toMessage" class="user-title">
						<el-badge :is-dot="true" class="item">消息</el-badge>
					</div>
					
					<div @click="toCollect" class="user-title">收藏</div>
					
					<el-popover
					  placement="bottom"
					  width="300"
					  trigger="hover">
					  <div slot="reference" class="user-title" style="padding-bottom: 15px">
					  	<div @click="toHistory" >历史记录</div>
					  </div>
						<div style="padding-left: 15px; padding-right: 15px; padding-top: 10px;">
							<div class="history-popover-title el-icon-time">
								<span>观影记录</span>
							</div>
							<el-timeline>
							    <el-timeline-item
							      v-for="(history, index) in historys"
							      :key="index"
										:color="history.color"
							      :timestamp="history.timestamp">
										<span  
											@mousemove="changeColorToRed(history.id)"
											@mouseleave="removeColor(history.id)"
											style="text-overflow: ellipsis;cursor: pointer;overflow: hidden;white-space: nowrap;display: inline-block; width: 180px;">
											{{history.name}}
										</span>
										<span style="float: right;
											color: #a0a0a0;
											margin-top: 2px;
											overflow: hidden;
											max-width: 24%;
											min-width: 18%;
											font-size: 12px;
											text-align: right;">{{history.episode}}</span>
							    </el-timeline-item>
							</el-timeline>
							<div class="drop-item-op" v-show="!isEmpty">
								<p @click="clearHistory">清空</p>
							</div>
							<el-empty :image-size="100" v-show="isEmpty" description="暂无观影记录"></el-empty>
						</div>
						
					</el-popover>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import Personal from './Personal'
	export default {
		name: 'animationBasePage',
		components:{
			Personal
		},
		data(){
			return{
				input: '',
				animation1: false,
				animation2: false,
				animation3: false,
				logoAnimation: '',
				historys:[
					{id:1,timestamp: "2018-04-13",name:"欢迎加入NHK77777777777777777777777777777",episode:"03"},
					{id:2,timestamp: "2018-04-12",name:"欢迎加入NHK77777777777777777777777777777",episode:"03"}
				]
			}
		},
		methods:{
			handleClick(){
				const that = this
				this.$router.push({
					path: '/search',
					query:{search:that.input}
				})
			},
			addAnimation(){
				this.logoAnimation = 'animate__animated animate__flipInY'
				setTimeout(() =>{
					this.logoAnimation = ''
				},1000)
			},
			addAnimation1(){
				this.$router.push("/home")
				this.animation1 = true
				setTimeout(() =>{
					this.animation1 = false
				},1000)
			},
			addAnimation2(){
				this.$router.push("/daylong")
				this.animation2 = true
				setTimeout(() =>{
					this.animation2 = false
				},1000)
			},
			addAnimation3(){
				this.$router.push("/ova")
				this.animation3 = true
				setTimeout(() =>{
					this.animation3 = false
				},1000)
			},
			toMessage(){
				this.$router.push("/message")
			},
			toCollect(){
				this.$router.push("/collect")
			},
			toHistory(){
				this.$router.push("/history")
			},
			changeColorToRed(id){
				let newHistory = JSON.parse(JSON.stringify(this.historys))
				newHistory.forEach(e => {
					if(e.id==id&&e.color!="#00b5e5") e.color="#00b5e5"
				})
				this.historys = newHistory
			},
			removeColor(id){
				let newHistory = JSON.parse(JSON.stringify(this.historys))
				newHistory.forEach(e => {
					if(e.id==id&&e.color=="#00b5e5") delete e.color
				})
				this.historys = newHistory
			},
			clearHistory(){
				this.$message('清除成功');
			}
		},
		computed:{
			isEmpty(){
				if(this.historys.length>0){
					return false
				}else{
					return true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.animationBasePage{
		width: 100vw;
		/deep/ .el-row{
			margin-top: 10px;
		}
		width: 100%;
		overflow: hidden;
		.logo{
			margin-top: 9px;
			// margin-left: 35px;
			img{
				width: 152px;
				height: 24px;
			}
		}
		.mainTab{
			margin-left: 30px;
			div {
				padding-bottom: 30px;
				margin-top: 9px;
				font-weight: 600;
				cursor: pointer;
				margin-left: 35px;
				float: left;
				font-style: italic;
				transition: all .3s;
			}
			div:hover {
				padding-bottom: 30px;
				margin-top: 5px;
				font-weight: 600;
				cursor: pointer;
				margin-left: 35px;
				float: left;
				font-style: italic;
			}
		}
		.userTab{
			.user-title {
				padding-bottom: 30px;
				margin-top: 9px;
				font-weight: 600;
				cursor: pointer;
				margin-left: 35px;
				float: left;
				font-style: italic;
				transition: all .3s;
			}
			.user-title:hover {
				padding-bottom: 30px;
				margin-top: 5px;
				font-weight: 600;
				cursor: pointer;
				margin-left: 35px;
				float: left;
				font-style: italic;
			}
		}
	}
	.drop-item-op p {
    width: 93%;
    text-align: center;
    cursor: pointer;
    display: block;
		background-color: #f3f5f7;
		padding: 0 10px;
		line-height: 30px;
		height: 30px;
		font-size: 13px;
		border-radius: 8px;
		text-decoration: none;
		color: #282828;
		outline: none;
	}
	.drop-item-op p:hover {
	    background: #00b5e5;
	    color: white;
	}
	.history-popover-title{
		color: #e50914;
		font-size: 20px;
		margin-bottom: 15px;
	}
	.history-popover-title span{
		position: absolute;
		color: #282828;
		font-size: 16px;
		font-weight: 700;
		margin-left: 15px;
	}
</style>
