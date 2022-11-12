<template>
	<div class="user-manage">
		<div class="manage-search">
			<el-input
					size="mini"
			    placeholder="请输入内容"
					@keyup.enter.native="handleClick"
			    v-model="input">
					<i slot="prefix" class="el-input__icon el-icon-search" @click="handleClick"></i>
			</el-input>
		</div>
		<el-table
			:data="tableData"
			stripe
			border
			style="width: 100%">
			<el-table-column
				prop="userName"
				label="角色名"
				width="240">
				<template slot-scope="scope">
					<span style="text-overflow: ellipsis;white-space: nowrap;">{{ scope.row.roleName }}</span>
				</template>
			</el-table-column>
			<el-table-column
				prop="address"
				label="权限">
				<template slot-scope="scope">
					<el-tag size="medium" v-for="(item,key) in scope.row.authorizationList" :key="key" style="margin-right: 8px;" v-if="key<7">{{ item.authorizationName }}</el-tag>
					<span style="margin-left: 10px;" v-if="scope.row.authorizationList.length>=7">...</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="144">
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
		</el-table>
		
		<div style="float: right;margin-top: 20px;">
			<el-pagination
			  background
			 :hide-on-single-page="true"
			 :page-size="12"
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		</div>
		
		<el-dialog title="编辑角色" :visible.sync="dialogFormVisible" append-to-body width="30%" center>
		  <el-form label-position="left" label-width="80px" :model="formData">
		    <el-form-item label="角色名">
		      <el-input v-model="formData.roleName"></el-input>
		    </el-form-item>
		    <el-form-item label="权限">
		      <el-select
		          v-model="selectValue"
		          multiple
		          collapse-tags
		          style="width: 100%;"
		          placeholder="请选择">
		          <el-option
		            v-for="(item,key) in authorizationList"
		            :key="key"
		            :label="item.authorizationName"
		            :value="item.id">
		          </el-option>
					</el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="ensure">确 定</el-button>
		  </div>
		</el-dialog>
		
	</div>
</template>

<script>
	export default {
		name: '',
		components:{

		},
		data(){
			return {
				input:'',
				 tableData: [
					  {
							roleName: 'ROLE_MANAGER',
							authorizationList: [
								{id:1,authorizationName:'用户管理'},
								{id:2,authorizationName:'核心功能'}
							]
						},
						{
							roleName: 'ROLE_COMMON',
							authorizationList: [
								{id:1,authorizationName:'用户管理'}
							]
						},
					],
					formData:{
						roleName: 'ROLE_COMMON',
						authorizationList: [
							{id:1,authorizationName:'用户管理'}
						]
					},
					dialogFormVisible: false,
					selectValue:[],
					//记录当前弹框是哪一行数据
					index:1,
					authorizationList: [
						{id:1,authorizationName:'用户管理'},
						{id:2,authorizationName:'核心功能'}
					]
			}
		},
		methods: {
			handleEdit(index, row) {
				this.dialogFormVisible = true
				this.formData = row
				let select =  row.authorizationList.map((item,index) =>{
					return item.id
				})
				this.selectValue = select
				this.index = index
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleClick(){
				this.$message('这是一条消息提示');
			},
			ensure(){
				this.dialogFormVisible = false
				this.formData.authorizationList = this.authorizationList.filter(f => this.selectValue.includes(f.id))
			}
		}
	}
</script>

<style lang="scss" scoped>
.user-manage{
	padding-left: 30px;
	padding-right: 30px;
	.manage-search{
		float: right;
		margin-top: 20px;
		margin-bottom: 10px;
	}
}
</style>