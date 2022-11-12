<template>
	<div class="app">
		<Animation></Animation>
		<div class="video-box" v-if="loading">
		   <video class="video-background" preload="auto" playsinline autoplay src="./assets/movie/02.mp4" tabindex="-1" muted="muted"></video>
		</div>
	</div>
</template>

<script>
	import Animation from "./views/core/AnimationBasePage.vue"
	
	export default {
		name: 'App',
		created() {
			// if(this.$route.fullPath=="/"){
			// 	let _this = this
			// 	_this.loading = true
			// 	setTimeout(() =>{
			// 		_this.loading = false
			// 	},4100)
			// }
		},
		components:{
			Animation
		},
		data() {
			return {
				loading:false
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
	.app{
		width: 100vw;
	}
	.video-box .video-background {
	    position: fixed;
			display: block;
	    // left: 50%;
	    // top: 50%;
	    // /*保证视频内容始终居中*/
	    // transform: translate(-50%, -50%);
	    width:100vw;
	    height: 100vh;
			object-fit: fill;
	    // object-fill:cover;
	    min-height: 800px;
			z-index: 99999;
	}
</style>
