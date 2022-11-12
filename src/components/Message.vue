<template>
	<div class="message">
		<div style="color:rgb(251, 114, 153); font-weight: 600; font-family:'微软雅黑';font-size: 18px;margin-bottom: 7px;margin-top: 6px; text-align: center;">{{getId}}</div>
		<!-- <el-divider class="message-2"></el-divider> -->
		<div class="col" @click="toPersonalCenter">
			<!-- personalCenter -->
			<a class="message-1" style="text-decoration:none;"><span class="el-icon-user"></span>个人中心</a>
		</div>
		<!-- <el-divider class="message-2"></el-divider> -->
		<div class="col" @click="toMessage">
			<el-badge :is-dot="true" class="item">
				<div class="message-1" ><span class="el-icon-chat-square"></span>消息</div>
			</el-badge>
		</div>
		<div class="col" @click="toManage">
			<div class="message-1" v-preventReClick><span class="el-icon-setting" v-preventReClick></span>后台管理</div>
		</div>

		<!-- <el-divider class="message-2"></el-divider> -->
		<!-- <div><router-link to="/home" tag="a" class="message-1" style="text-decoration:none;"><span class="el-icon-switch-button"></span>退出</router-link></div> -->
		<div class="col" @click="logout">
			<div class="message-1"  v-preventReClick><span class="el-icon-switch-button" v-preventReClick></span>退出</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'message',
		data() {
			return {
				
			}
		},
		computed: {
			getId(){
				return "亿观"
			}
		},
		methods: {
			logout() {
				
			},
			toMessage(){
				this.$router.push("/message")
			},
			toManage(){
				this.$router.push("/userManage")
			},
			toPersonalCenter(){
				this.$router.push("/personalCenter")
			}
		}
	}
</script>

<style>
	.message .col{
		padding: 7px 5px;
		cursor: pointer;
	}
	.message .col span{
		margin-left: 25px;
		margin-right: 10px;
	}
	.message .col:hover{
		padding: 7px 5px;
		cursor: pointer;
		background-color: #F2F2F2;
	}
	.message .message-2{
		margin-top: 10px !important;
		margin-bottom: 10px !important;
	}
	.message {
		font-size: 16px;
		font-weight: 500;
		color: #828282;
	}
	.message-1 {
		color: #828282;
		font-size: 14px;
	}
</style>
