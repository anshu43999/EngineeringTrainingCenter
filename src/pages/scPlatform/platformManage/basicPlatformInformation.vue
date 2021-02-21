<template>
  <div id="basicPlatformInformation">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconziliaoku"></use>
      </svg>
      <span>平台信息</span>
      <el-button type="primary" size="mini" @click="skipEdit('id')">
        <i class="iconfont iconbianji4"></i>
        编辑
      </el-button>
    </div>

    <div class="content-body">
      <!--      基本信息-->
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          基本信息
        </div>
        <table>
          <tr>
            <td class="table-bg table-padding table-center" style="width: 180px" :rowspan="basicInfo.rooms.length+2">
              <img :src="basicInfo.avatar" alt="">
              <p class="platform-name">{{ basicInfo.platformName }}</p>
            </td>
            <td class="table-bg">平台名称</td>
            <td>{{ basicInfo.platformName }}</td>
            <td class="table-bg">平台所属学院</td>
            <td colspan="5">{{ basicInfo.college }}</td>
          </tr>
          <tr v-for="(item,index) in basicInfo.rooms" :key="index">
            <td class="table-bg">房间{{ index + 1 }}</td>
            <td>{{ item.nameCh }}&nbsp;/&nbsp;{{ item.nameEn }}</td>
            <td class="table-bg">房间{{ index + 1 }}号</td>
            <td>
              <span>{{ getRoomNumStr(item.roomNums) }}</span>
            </td>
            <td class="table-bg">房间{{ index + 1 }}负责人</td>
            <td>{{ item.roomAdmin }}</td>
            <td class="table-bg">房间{{ index + 1 }}负责人联系方式</td>
            <td>{{ item.roomAdminTel }}</td>
          </tr>
          <tr>
            <td class="table-bg">备注</td>
            <td colspan="7">{{ basicInfo.note }}</td>
          </tr>
        </table>
      </div>
<!--      平台负责人-->
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          平台负责人
        </div>
        <table>
          <tr v-for="(item,index) in platformAdmin" :key="index">
            <td class="table-bg">平台负责人{{ index+1 }}</td>
            <td>{{item.adminName}}</td>
            <td class="table-bg">联系方式</td>
            <td>{{item.adminTel}}</td>
            <td class="table-bg">职称</td>
            <td>{{item.jobTitle}}</td>
            <td class="table-bg">专业</td>
            <td>{{item.professional}}</td>
            <td class="table-bg">职工编号(账号）</td>
            <td>{{item.employeeNumbers}}</td>
          </tr>
        </table>
      </div>
<!--      平台介绍-->
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          平台介绍
        </div>
        <table>
          <tr>
            <td class="table-bg">平台方向</td>
            <td style="padding: 14px 21px;line-height: 22px">{{platformIntroduction.direction}}</td>
          </tr>
          <tr>
            <td class="table-bg">平台简介</td>
            <td style="padding: 14px 21px;line-height: 22px">{{platformIntroduction.introduction}}</td>
          </tr>
        </table>
      </div>
<!--      平台图片管理-->
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          平台图片管理
        </div>
        <div class="pics">
          <div v-for="(item,index) in pics" :key="index">
            <img :src="item.url" alt="">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicPlatformInformation",
  data() {
    return {
      // 平台基本信息
      basicInfo: {
        avatar: require('../../../assets/image/scPlatform/platformManage/platformAvatar.png'),
        platformName: '大数据与人工智能创意设计双创平台',
        college: '123',
        rooms: [
          {
            nameCh: '赛客创新创业实践平台',
            nameEn: 'i-CODING Center',
            roomNums: ['A301', 'A303'],
            roomAdmin: '赵利辉',
            roomAdminTel: '13935141133'
          },
          {
            nameCh: '赛客创新创业实践平台',
            nameEn: 'i-CODING Center',
            roomNums: ['A301', 'A303'],
            roomAdmin: '赵利辉',
            roomAdminTel: '13935141133'
          }
        ],
        note: '123'
      },
    //  平台负责人
      platformAdmin:[
        {
          adminName:'杨秋翔',
          adminTel:'13803492618',
          jobTitle:'********',//职称
          professional:'********',//专业
          employeeNumbers:'********'//职工编号
        },
        {
          adminName:'杨秋翔',
          adminTel:'13803492618',
          jobTitle:'********',//职称
          professional:'********',//专业
          employeeNumbers:'********'//职工编号
        },
      ],
    //  平台介绍
      platformIntroduction:{
        direction:'2019年6月15日-16日山西省高校工程训练研究会暨全国3D大赛及3D/VR/AR教师大赛山西省赛区组委会成立会议在太原理工大学召开，工程训练中心主任赵正杰、副主任冯再新、靳鸿及创新实践部科长参加。中北大学工程训练中心为山西省高校工程训练研究会副理事长单位。\n' +
            '本次会议主要为山西省高校工程训练研究会第一届代表大会，商定研究会理事长、副理事长、秘书长以及理事等名单、2019年年会召开时间、地点及内容等；教育部工程训练教指委委员、山西省实验室建设与实验教学教指委主任委员、太原理工大学工程训练中心主任李卫国以“新时代工程训练模式的探讨”为题，介绍2018-2022教育部工程训练教学指导委员会目标任务及竞赛领导组相关信息等；同时商定全国3D两赛山西省赛区相关比赛事项。\n' +
            '2018-2022教育部工程训练教学指导委员会于2018年12月成立，山西省高等学校实验室建设与实验教学指导委员会于2019年1月成立，工程训练和实验教学在全国各高校越来越受到重视，山西省高校工程训练研究会应运而生。本次会议的召开为本省高校工程训练中心教学研究与经验交流提供平台！',
        introduction:'2019年6月15日-16日山西省高校工程训练研究会暨全国3D大赛及3D/VR/AR教师大赛山西省赛区组委会成立会议在太原理工大学召开，工程训练中心主任赵正杰、副主任冯再新、靳鸿及创新实践部科长参加。中北大学工程训练中心为山西省高校工程训练研究会副理事长单位。\n' +
            '本次会议主要为山西省高校工程训练研究会第一届代表大会，商定研究会理事长、副理事长、秘书长以及理事等名单、2019年年会召开时间、地点及内容等；教育部工程训练教指委委员、山西省实验室建设与实验教学教指委主任委员、太原理工大学工程训练中心主任李卫国以“新时代工程训练模式的探讨”为题，介绍2018-2022教育部工程训练教学指导委员会目标任务及竞赛领导组相关信息等；同时商定全国3D两赛山西省赛区相关比赛事项。\n' +
            '2018-2022教育部工程训练教学指导委员会于2018年12月成立，山西省高等学校实验室建设与实验教学指导委员会于2019年1月成立，工程训练和实验教学在全国各高校越来越受到重视，山西省高校工程训练研究会应运而生。本次会议的召开为本省高校工程训练中心教学研究与经验交流提供平台！'
      },
    //  平台图片管理
      pics:[
        {
          url:require('../../../assets/image/scPlatform/platformManage/platformAvatar.png'),
          name:'大数据与人工智能创意设计双创平台图片1'
        },
        {
          url:require('../../../assets/image/scPlatform/platformManage/platformAvatar.png'),
          name:'大数据与人工智能创意设计双创平台图片1'
        },
        {
          url:require('../../../assets/image/scPlatform/platformManage/platformAvatar.png'),
          name:'大数据与人工智能创意设计双创平台图片1'
        },
        {
          url:require('../../../assets/image/scPlatform/platformManage/platformAvatar.png'),
          name:'大数据与人工智能创意设计双创平台图片1'
        }
      ]
    }
  },
  methods: {
    getRoomNumStr(numArr) {
      return numArr.join('、');
    },
    skipEdit(){
      this.$router.push({path : 'basicPlatformInformation/platformEdit'})
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/mixin";

#basicPlatformInformation {
  width: calc(100% - 50px);
  margin: 25px;
  background-color: rgba(255, 255, 255, .8);
  box-shadow: 0px 1px 4px 0px rgba(43, 57, 128, 0.19);
  border: solid 1px #e5e6ef;
  opacity: 0.8;
  color: #444;

  .title {
    @include wh(100%, 56px);
    border-bottom: solid 1px #e5e6ef;
    line-height: 56px;
    padding: 0 25px;

    svg {
      @include wh(18px, 100%);
      float: left;
      margin-right: 7px;
    }

    ::v-deep .el-button {
      float: right;
      height: 30px;
      transform: translateY(calc(50% - 3px));
      letter-spacing: 2px;
    }
  }

  .content-body {
    padding: 24px 40px;

    .content-title {
      height: 28px;
      line-height: 28px;

      .iconjinqi {
        font-size: 28px;
        float: left;
        color: #409eff;
      }
    }

    .content {
      margin-bottom: 40px;

      table {
        cellspacing: 1;
        background: #ddd;
        width: 100%;
        margin-top: 16px;

        .table-bg {
          background-color: #f5fafd;
          text-align: right;
          color: #999;
        }

        .table-padding {
          padding: 21px;
        }

        .table-center {
          text-align: center;
        }

        .table-left {
          text-align: left;
        }

        td {
          background-color: #fff;
          height: 40px;
          padding: 0 9px;
          @include font(12px, #333);
          min-width: 150px;

          .platform-name {
            font-size: 14px;
            color: #333;
            margin-top: 13px;
          }

          img {
            width: 101px;
          }
        }
      }

      .pics{
        @include wh(100%,316px);
        @include flex(space-around);
        border: solid 1px #dddddd;
        margin-top: 16px;

        div{
          @include wh(297px,100%);
          @include font(14px,#444,center);
          padding-top: 30px;
          letter-spacing: 1px;

          img{
            margin: 0 auto 10px;
            height: 229px;
            display: block;
          }
        }
      }
    }
  }
}
</style>
