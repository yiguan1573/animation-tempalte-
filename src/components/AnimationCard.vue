<template>
	<div class="animation-card" @click="toDetail">
		<el-image fit="fill" :src="url">
			<div slot="error" class="image-slot">
				<div class="error-image"></div>
			</div>
		</el-image>
		<div class="animation-name">{{name}}</div>
	</div>
</template>

<script>
	export default {
		name: '',
		props: ['animationCard'],
		created() {
			this.url = this.animationCard.url
			this.name = this.animationCard.name
		},
		components:{

		},
		data(){
			return {
				url:'',
				name:''
			}
		},
		methods:{
			toDetail(){
				this.$router.push('animationDetail')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.animation-card{
		cursor: pointer;
		width: 184px;
		height: auto;
		margin-top: 10px;
		margin-bottom: 20px;
		margin-right: 41px;
		
		/deep/ .el-image{
			width: 184px;
			height: 258px;
			background-color: #DCDCDC;
			border-radius: 8px;
			transition: box-shadow .15s ease;
			.image-slot{
				.error-image{
					// width: 100%;
					// height: 100%;
					width: 184px;
					height: 258px;
					background-image: url('../assets/image/example/07.png');
					background-size: 100% 100%;
				}
			}
		}
		/deep/ .el-image:hover{
			box-shadow: 0 20px 15px -10px rgba(0,0,0,0.2), 0 50px 35px -40px rgba(0, 0, 0, 0.4), 0 50px 35px -40px rgba(243, 2, 2, 0.2);
		}
		.animation-name{
			margin-top: 10px;
			color: #282828;
			font-size: 14px;
			text-align: center;
			text-overflow:ellipsis;
			white-space: nowrap;
			overflow:hidden; 
		}
	}
</style>