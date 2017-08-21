<!--Created by tyf on 2017/8/18-->
<!--发票信息-->
<template>
  <div class="InvoiceMessage">
    <!--开关按钮-->
    <div class="float-clear switch">
      <el-switch class="float-right" v-model="isShowAll" on-color="#13ce66" off-color="#ccc"></el-switch>
    </div>
    <!--头部(检索和按钮部分)-->
    <header class="float-clear">
      <div class="filtrate float-left">
        <el-input class="search"
                  placeholder="请选择日期"
                  icon="search"
                  v-model="selectDate"
                  :on-icon-click="search">
        </el-input>
        <el-button type="success">高级条件</el-button>
      </div>
      <div class="buttons float-right">
        <el-button size="small" type="primary">开票</el-button>
        <el-button size="small" type="primary">修改</el-button>
        <el-button size="small" type="primary">红票</el-button>
        <el-button size="small" type="primary">作废</el-button>
        <el-button size="small" type="primary">恢复</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </div>
    </header>
    <!--主体（表格部分）-->
    <main>
      <el-table v-loading.body="myLoading"
                stripe class="jianji-back-table" :data="listData"
                border
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="selectedChange">
        <el-table-column
          fixed="left"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          fixed="left"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed="left"
          label="操作"
          width="120">
          <template scope="scope">
            <el-button @click="clickOpenInvoice(scope.$index)" v-if="scope.row.status == 1" :plain="true" type="primary" size="mini">开票</el-button>
            <el-button @click="clickModify(scope.$index)"  v-if="scope.row.status == 2 || scope.row.status == 4" :plain="true" type="primary" size="mini">修改</el-button>
            <el-button @click="clickRedInvoice(scope.$index)" v-if="scope.row.status == 2" type="danger" size="mini">红票</el-button>
          </template>
        </el-table-column>

        <el-table-column
          label="提交日期"
          width="120"
          show-overflow-tooltip>
          <template scope="scope">
            {{ scope.row.createdDate | formDate('YYYY-MM-DD') }}
          </template>
        </el-table-column>
        <el-table-column
          label="发票状态"
          width="140">
          <template scope="scope">
            <el-tag type="success">{{ scope.row.status | statusText}}</el-tag>
            <el-tag v-if="scope.row.status==3 || scope.row.status==5" type="danger">作废</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="开票日期"
          width="120"
          show-overflow-tooltip>
          <template scope="scope">
            {{ scope.row.lastModifiedDate | formDate('YYYY-MM-DD') }}
          </template>
        </el-table-column>
        <el-table-column
          prop="companyName"
          label="公司名称"
          width="200"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="invoiceNumber"
          label="发票号"
          width="130"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="relationInvoiceNumber"
          label="关联票号"
          width="130"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="redInvoiceNumber"
          label="红票票号"
          width="130"
          show-overflow-tooltip>
        </el-table-column>

        <el-table-column v-if="isShowAll"
          prop="moneyAmount"
          label="金额"
          width="100"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="isShowAll"
          label="重开原因"
          width="150"
          show-overflow-tooltip>
          <template scope="scope">
            {{ scope.row.status == 3 ? scope.row.info : ''}}
          </template>
        </el-table-column>
        <el-table-column v-if="isShowAll"
          prop="taxpayerIdentifyNumber"
          label="纳税人识别号"
          width="190"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="isShowAll"
          prop="email"
          label="邮箱"
          width="190"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="isShowAll"
          prop="contact"
          label="联系人"
          width="100"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="isShowAll"
          prop="mobile"
          label="联系电话"
          width="130"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="isShowAll"
          label="备注"
          width="150"
          show-overflow-tooltip>
          <template scope="scope">
            {{ scope.row.status != 3 ? scope.row.info : ''}}
          </template>
        </el-table-column>

      </el-table>
    </main>
    <!--弹出框部分-->
    <div class="dialoag">
      <el-dialog :close-on-press-escape="false" :close-on-click-modal="false" class="dialog" size="large" title="开票" :visible.sync="dialog.showopenInvoice">
        <open-invoice v-model="listData[curIndex]" v-if="dialog.showopenInvoice"></open-invoice>
      </el-dialog>
      <el-dialog :close-on-press-escape="false" :close-on-click-modal="false" title="修改发票" :visible.sync="dialog.showModify">
        <modify-invoice v-model="listData[curIndex]" v-if="dialog.showModify"></modify-invoice>
      </el-dialog>
      <el-dialog class="redInvoice" :close-on-press-escape="false" :close-on-click-modal="false" title="红票" :visible.sync="dialog.showRedInvoice">
        <red-invoice v-if="dialog.showRedInvoice"></red-invoice>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import OpenInvoice from './OpenInvoice.vue'
  import ModifyInvoice from './ModifyInvoice.vue'
  import RedInvoice from './RedInvoice.vue'
  export default {
    components: { OpenInvoice, ModifyInvoice, RedInvoice },
    data () {
      return {
//      // 是否显示所有的列
        isShowAll: false,
        // 发票的日期检索
        selectDate: '1994-02',
        // 发票表格数据
        listData: [],
        // 对话框的显示状态
        dialog: {
          // 是否显示开票对话框
          showopenInvoice: false,
          // 是否显示修改对话框
          showModify: false,
          // 是否显示红票对话框
          showRedInvoice: false
        },
        // 当前发票的下标
        curIndex: -1
      }
    },
    methods: {
      search () {

      },
      selectedChange () {

      },
      // 点击'开票按钮'
      clickOpenInvoice (index) {
        console.log(index)
        console.log(this.listData)
        this.curIndex = index
        this.dialog.showopenInvoice = true
      },
      // 点击'修改按钮'
      clickModify (index) {
        this.curIndex = index
        this.dialog.showModify = true
      },
      // 点击'红票按钮'
      clickRedInvoice (index) {
        this.curIndex = index
        this.dialog.showRedInvoice = true
      }
    },
    mounted () {
      this.myLoading = true
      this.$http.getInvoices().then(({data}) => {
        this.myLoading = false
        this.listData = data
      }).catch(function () {
        this.myLoading = false
      })
    }
  }
</script>

<style lang="less">
  .InvoiceMessage {
    .switch {
      margin-bottom: 10px;
    }
    // 设置
    .el-dialog{
      width: 600px;
    }

    .redInvoice{
      .el-dialog{
        width: 400px;
      }
    }
    header {
      margin-bottom: 10px;
    }
    .search {
      width: 200px;
    }
    .buttons {
      margin-top: 8px;
    }
  }
</style>
