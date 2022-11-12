<template>
	<div class="HomePage">
		<div class="carousel">
			<el-carousel :interval="5000" arrow="hover" height="700px">
			    <el-carousel-item v-for="item in carousel" :key="item.id">
						<div class="carousel-image">
							<div class="AnimationCard">
								<AnimationCard :animationCard="item.detail" :key="item.id"></AnimationCard>
							</div>
							<el-image fit="fill" :src="item.url">
							      <div slot="error" class="image-slot">
							        <i class="el-icon-picture-outline"></i>
							      </div>
							</el-image>
							
						</div>
			    </el-carousel-item>
			  </el-carousel>
		</div>
		
		<div class="daylong">
			<div style="width: 100%; height: 40px;">
				<div class="animation-svg1"></div>
				<div class="animation-title">动画</div>
				<span class="animation-more" @click="toDatlong">更多<i class="el-icon-arrow-right"></i></span>
			</div>
			<div class="animation-list">
				<AnimationCard v-for="item in daylong" :key="item.id" :animationCard="item"></AnimationCard>
			</div>
		</div>
		
		<div class="ova">
			<div style="width: 100%; height: 40px;">
				<div class="animation-svg2"></div>
				<div class="animation-title">剧场版</div>
				<span class="animation-more" @click="toOva">更多<i class="el-icon-arrow-right"></i></span>
			</div>
			<div class="animation-list">
				<AnimationCard v-for="item in daylong" :key="item.id" :animationCard="item"></AnimationCard>
			</div>
		</div>
		<div style="width: 100%;height: 80px;">
			
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
				carousel:[
					{url:require('@/assets/image/example/01.jpg'),id:1,detail:{"url":require('@/assets/image/animation/02.jpg'),name:"赛博朋克:边缘行者"}},
					{url:require('@/assets/image/example/02.jpg'),id:2,detail:{"url":require('@/assets/image/animation/03.jpg'),name:"契约之吻"}},
					{url:require('@/assets/image/example/03.jpg'),id:3,detail:{"url":require('@/assets/image/animation/04.jpg'),name:"黑之契约者"}},
					{url:require('@/assets/image/example/04.jpg'),id:4,detail:{"url":require('@/assets/image/animation/05.jpg'),name:"伤物语"}},
				],
				daylong:[
					{url:require('@/assets/image/animation/01.jpg'),id:1,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:2,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:3,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:4,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:5,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:6,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:7,name:"欢迎加入NHK"},
					{url:require('@/assets/image/animation/01.jpg'),id:8,name:"欢迎加入NHK"},
				]
			}
		},
		methods:{
			toDatlong(){
				this.$router.push("/daylong")
			},
			toOva(){
				this.$router.push("/ova")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.HomePage{
		width: 84%;
		margin-left: 8%;
		margin-top: 20px;
		.carousel{
			.el-carousel__item{
				// border-radius: 10px;
				width: 100%;
				height: 100%;
				background-color: #99a9bf;
			}
			/deep/ .el-carousel{
				border-radius: 20px;
			}
			.carousel-image{
				cursor: pointer;
				width: 100%;
				height: 100%;
				.AnimationCard{
					position: absolute;
					z-index: 10;
					margin-left: 85%;
					margin-top: 120px;
					transform: translateX(-30%);
				}
				.el-image{
					width: 100%;
					height: 100%;
					.image-slot{
						i{
							margin-top: 260px;
							width: 100%;
							height: 100%;
							text-align: center;
							font-size: 34px;
							color: azure;
						}
						
					}
				}
			}
		}
		.daylong{
			margin-top: 40px;
			width: 100%;
			height: auto;
		}
	}
</style>