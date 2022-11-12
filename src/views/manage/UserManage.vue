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
				label="用户名"
				width="180">
				<template slot-scope="scope">
					<span style="text-overflow: ellipsis;white-space: nowrap;">{{ scope.row.userName }}</span>
				</template>
			</el-table-column>
			<el-table-column
				prop="password"
				label="密码"
				width="180">
				<template slot-scope="scope">
					<span style="text-overflow: ellipsis;white-space: nowrap;">{{ scope.row.password }}</span>
				</template>
			</el-table-column>
			<el-table-column
				prop="address"
				label="角色">
				<template slot-scope="scope">
					<el-tag size="medium" v-for="(item,key) in scope.row.roleList" :key="key" style="margin-right: 8px;" v-if="key<4">{{ item.roleName }}</el-tag>
					<span style="margin-left: 10px;" v-if="scope.row.roleList.length>=4">...</span>
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
		
		<el-dialog title="编辑用户" :visible.sync="dialogFormVisible" append-to-body width="30%" center>
		  <el-form label-position="left" label-width="80px" :model="formData">
		    <el-form-item label="姓名">
		      <el-input v-model="formData.userName"></el-input>
		    </el-form-item>
		    <el-form-item label="密码">
		      <el-input v-model="formData.password"></el-input>
		    </el-form-item>
		    <el-form-item label="角色">
		      <el-select
		          v-model="selectValue"
		          multiple
		          collapse-tags
		          style="width: 100%;"
		          placeholder="请选择">
		          <el-option
		            v-for="(item,key) in roleList"
		            :key="key"
		            :label="item.roleName"
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
						userName: '亿观',
						password: '12345',
						roleList: [
							{id:1,roleName:'ROLE_MANAGER'},
							{id:2,roleName:'ROLE_COMMON'},
						]
					},
					{
						userName: '亿观1573',
						password: '123456',
						roleList: [
							{id:1,roleName:'ROLE_MANAGER'}
						]
					},
					],
					formData:{
						userName: '亿观',
						password: '12345',
						roleList: [
							{id:1,roleName:'ROLE_MANAGER'},
							{id:2,roleName:'ROLE_COMMON'},
						]
					},
					dialogFormVisible: false,
					selectValue:[],
					//记录当前弹框是哪一行数据
					index:1,
					roleList: [
						{id:1,roleName:'ROLE_MANAGER'},
						{id:2,roleName:'ROLE_COMMON'},
					]
			}
		},
		methods: {
			handleEdit(index, row) {
				this.dialogFormVisible = true
				this.formData = row
				let select =  row.roleList.map((item,index) =>{
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
				this.formData.roleList = this.roleList.filter(f => this.selectValue.includes(f.id))
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