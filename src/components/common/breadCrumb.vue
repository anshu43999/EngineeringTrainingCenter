<template>
	<div class="breadcrumbwrap">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<template v-if="breadcrumb.undefinedpath">
				<el-breadcrumb-item v-for="item in breadcrumbListsCache" :key="item.index" >{{item.name}}</el-breadcrumb-item>
				<el-breadcrumb-item>
					{{breadcrumb.undefinedpath}}
				</el-breadcrumb-item>
			</template>
			<template v-else>
				<el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index" :to='breadcrumbLink(index)'>
          <i v-if="item.name === '首页'" class="iconfont iconshouye-shi" style="color:#409eff"></i>
          <i v-if="item.name === '平台管理'" class="iconfont iconjiaoshiguanli" style="color:#409eff"></i>
          {{item.name}}
          
          </el-breadcrumb-item>
			</template>
		</el-breadcrumb>
	</div>
</template>

<script>
import "../../assets/style/common/breadcrumb.css";
	import {mapMutations,mapGetters} from 'vuex';
	export default {
		props: ['breadcrumb'],
		data() {
			return {
				routeTest:'测试中哦！！！',
				firstfalg:true,//第一次加载确定路由的开关
				breadcrumbListsCache:[],
			};
		},
		created(){
			this.breadcrumbListFirst();
			this.getBreadcrumbHistory();
			this.getBreadcrumbHistory();
		},
		watch:{
			$route:{
				handler(){
					this.breadcrumbListFirst();
					this.getBreadcrumbHistory();
					this.getBreadcrumbHistory();
				}
			}
		},
		methods:{
			...mapMutations(['pushBreadcrumbHistory','spliceBreadcrumbHistory','statBreadcrumbHistory']),
			breadcrumbListFirst() {
				if(this.firstfalg){
					//	    	获取连接名按照"/"切分并反转
					var breadcrumbName=this.$route.name.split('/').reverse();

					console.log(breadcrumbName);
					//	       	 等待返回的面包屑名字对应路径的对象数组
					var breadcrumbLists=[];
					for(var i=0;i<breadcrumbName.length;i++){
						var breadcrumbItem={};
						//	        		获取名字
						breadcrumbItem.name=breadcrumbName[i];
						//	        		获取路径
						var breadcrumbPath=this.$route.fullPath.split('/');
						console.log(breadcrumbPath);
						//	        		从后向前以"/"为节点裁掉/后面的路径并拼接回字符串
						// 第几个  截取几条
						breadcrumbPath.splice(-i,i);
						breadcrumbItem.path=breadcrumbPath.join('/');
						breadcrumbItem.index=i;
						breadcrumbLists.unshift(breadcrumbItem);
						// console.log(breadcrumbLists);
					}
					this.firstfalg=false;
					this.breadcrumbListsCache=breadcrumbLists;
					return breadcrumbLists;
				}else{
					return this.breadcrumbListsCache;
				}
			},
			getBreadcrumbHistory(){
				var name=this.$route.name;
				// console.log(name);
				var fullPath=this.$route.fullPath;
				// console.log(fullPath);
				// var res=name.match(/\//g).length;
				var res = '';
				//  增加一层判断     待调试确认    2020 - 02 - 26
				if(! name.match(/\//g)) return;
				if(name.match(/\//g).length){
					res=name.match(/\//g).length;
				}else{
					res=0;
				}
				var payload={};
				payload.name=name;
				payload.fullPath=fullPath;
				if(res<2){
//				console.log('重置历史记录')
					this.statBreadcrumbHistory();
				}
//			查询历史
				var is_set=this.breadcrumbHistory.some((item,index)=>{
					return item.name==name
				})
//			获取历史记录
				if(is_set){
					this.spliceBreadcrumbHistory(payload);
				}else{
//			新增历史
					this.pushBreadcrumbHistory(payload);
				}
//			console.log(this.breadcrumbHistory)
			},
			breadcrumbLink(index){
				if(index==0){
					return this.breadcrumbList[index].path
				}else if(index!==0){
					return this.breadcrumbHistory[index-1].fullPath
				}
			},
		},
		computed: {
//  	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
			...mapGetters(["libraryId","libraryName","userName","Token"]),
			...mapGetters(["breadcrumbHistory"]),
			breadcrumbList: function () {
//	    	获取连接名按照"/"切分并反转
				var breadcrumbName=this.$route.name.split('/').reverse();
//	       	 等待返回的面包屑名字对应路径的对象数组
				var breadcrumbLists=[];
				for(var i=0;i<breadcrumbName.length;i++){
					var breadcrumbItem={};
//	        		获取名字
					breadcrumbItem.name=breadcrumbName[i];
//	        		获取路径
					var breadcrumbPath=this.$route.fullPath.split('/');
//	        		从后向前以"/"为节点裁掉/后面的路径并拼接回字符串
					breadcrumbPath.splice(-i,i);
					breadcrumbItem.path=breadcrumbPath.join('/');
					breadcrumbItem.index=i;
					breadcrumbLists.unshift(breadcrumbItem);
				}
	        	// console.log(breadcrumbLists);
				return breadcrumbLists;
			},
			
		},
		mounted:function(){
		}
	}
</script>

<style lang='scss' scoped>
	/*面包屑导航*/
	.el-breadcrumb__item{
    font-size: 0.16rem;
		line-height: 48px;
	}
</style>