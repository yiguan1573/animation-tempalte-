import Vue from 'vue'
import VueRouter from 'vue-router'
const Daylong = () => import('../views/core/Daylong.vue')
const Ova = () => import('../views/core/Ova.vue')
const HomePage = () => import('../views/core/HomePage.vue')
const Collect = () => import('../views/core/Collect.vue')
const Message = () => import('../views/core/MessagePage.vue')
const History = () => import('../views/core/History.vue')
const PersonalCenter = () => import('../views/core/PersonalCenter.vue')
const LoginPage = () => import('../views/core/LoginPage.vue')
const Register = () => import('../views/core/Register.vue')
const AnimationDetail = () => import('../views/core/AnimationDetail.vue')
const Search = () => import('../views/core/Search.vue')
const MainManagePage = () => import('../views/manage/MainManagePage.vue')
const ModifyImg = () => import('../components/Personal/ModifyImg.vue')
const ModifyMessage = () => import('../components/Personal/ModifyMessage.vue')

const UserManage = () => import('../views/manage/UserManage.vue')
const RoleManage = () => import('../views/manage/RoleManage.vue')
const AuthorizationManage = () => import('../views/manage/AuthorizationManage.vue')
const AddAnimation = () => import('../views/manage/AddAnimation.vue')
const CarouselAnimation = () => import('../views/manage/CarouselAnimation.vue')
const SystemMessage = () => import('../views/manage/SystemMessage.vue')


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
  {
		path: '/daylong',
		component: Daylong
	},
  {
		path: '/home',
		component: HomePage
	},
  {
		path: '/ova',
		component: Ova
	},
  {
		path: '/message',
		component: Message
	},
  {
		path: '/collect',
		component: Collect
	},
  {
		path: '/history',
		component: History
	},
	{
		path: '/personalCenter',
		component: PersonalCenter
	},
	{
		path: '/login',
		component: LoginPage
	},
	{
		path: '/register',
		component: Register
	}	,
	{
		path: '/mainManagePage',
		component: MainManagePage,
		children:[
			{
				path: '/userManage',
				component: UserManage
			},
			{
				path: '/roleManage',
				component: RoleManage
			},
			{
				path: '/authorizationManage',
				component: AuthorizationManage
			},
			{
				path: '/addAnimation',
				component: AddAnimation
			},
			{
				path: '/carouselAnimation',
				component: CarouselAnimation
			},
			{
				path: '/systemMessage',
				component: SystemMessage
			}
		]
	},
	{
		path: '/modifyImg',
		component: ModifyImg
	}	,
	{
		path: '/modifyMessage',
		component: ModifyMessage
	},
	{
		path: '/animationDetail',
		component: AnimationDetail
	},
	{
		path: '/search',
		component: Search
	}
]
//捕获路由的异常，浏览器就不会爆红
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
	base: '/animation/'
})

export default router
