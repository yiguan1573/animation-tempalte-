<template>
	<div class="ova-page">
		<div class="ova">
			<div style="width: 100%; height: 40px;">
				<div class="animation-svg2"></div>
				<div class="animation-title">剧场版</div>
			</div>
			<div class="animation-list">
				<AnimationCard v-for="item in ova" :key="item.id" :animationCard="item"></AnimationCard>
			</div>
		</div>
		<div style="position: absolute; right: 9%;">
			<el-pagination
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size="pageSize"
						:hide-on-single-page="value"
						:background="true"
			      layout="prev, pager, next"
			      :total="total">
			</el-pagination>
		</div>
		
	</div>
</template>

<script>
	import AnimationCard from '../../components/AnimationCard.vue'
	export default {
		name: '',
		components:{
			AnimationCard
		},
		data(){
			return {
				ova:[
					{url:require('@/assets/image/animation/01.jpg'),id:1,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:2,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:3,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:4,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:5,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:6,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:7,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:8,name:"欢迎加入NHK"},
				],
				currentPage:1,
				pageSize:14,
				total:200,
				value:true
			}
		},
		methods:{
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ova-page{
		width: 84%;
		margin-left: 8%;
		margin-top: 40px;
		/deep/ .el-pagination{
			.el-pager{
				li{
					background-color: rgb(233, 236, 239);
				}
				.active{
					color: #fff;
					background: linear-gradient(to right,#ff711f 0%,#e50914 100%);
					box-shadow: 0 10px 12px -4px rgba(22,9, 9, 0.25);
					font-weight: 700;
				}
			}
			.btn-next{
				background-color: rgb(233, 236, 239);
			}
			.btn-prev{
				background-color: rgb(233, 236, 239);
			}
		}
	}
</style>
