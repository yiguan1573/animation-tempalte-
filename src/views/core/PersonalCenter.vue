<template>
	<div class="personal-center">
		<BasicMessage></BasicMessage>
		 <el-divider></el-divider>
		 
		 <div class="ova">
		 	<div style="width: 100%; height: 40px;">
		 		<div class="animation-title" style="font-size: 24px;">我的收藏</div>
		 		<span class="animation-more" @click="toCollect">更多<i class="el-icon-arrow-right"></i></span>
		 	</div>
		 	<div class="animation-list" v-show="!isEmpty">
		 		<CollectCard v-for="(item,key) in collect" :key="key" :collectCard="item"></CollectCard>
		 	</div>
			<el-empty style="margin-top: 100px;" :image-size="200" v-show="isEmpty" description="暂无收藏记录"></el-empty>
		 </div>
			 
	</div>
</template>

<script>
	import BasicMessage from '../../components/Personal/BasicMessage.vue'
	import CollectCard from '../../components/CollectCard.vue'
	export default {
		name: '',
		components:{
			BasicMessage,
			CollectCard
		},
		data(){
			return {
				collect:[
					{url:require('@/assets/image/animation/01.jpg'),id:1,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
					{url:require('@/assets/image/animation/01.jpg'),id:2,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
					{url:require('@/assets/image/animation/01.jpg'),id:3,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
					{url:require('@/assets/image/animation/01.jpg'),id:4,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
					{url:require('@/assets/image/animation/01.jpg'),id:5,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
					{url:require('@/assets/image/animation/01.jpg'),id:6,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
					{url:require('@/assets/image/animation/01.jpg'),id:7,name:"欢迎加入NHK11111111111111",total:12,type:"动画",placeOfOrigin:"日本",status:1,
					detail:"主角佐藤达广(22岁)大一便退学，不经不觉间当了四年的家里蹲，很容易陷入自己的妄想之中，特别是性幻想与阴谋，总是跟老家伸手，住在出租屋里面过日子。"},
				]
			}
		},
		methods:{
			toCollect(){
				this.$router.push("/collect")
			}
		},
		computed:{
			isEmpty(){
				if(this.collect.length>0){
					return false
				}else{
					return true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.personal-center{
	margin-top: 10px;
	width: 60%;
	margin-left: 20%;
	background: #fff;
	box-shadow: 0 0 0 1px #eee;
	border-radius: 4px;
	padding: 20px;
	height: 90vh;
}
</style>