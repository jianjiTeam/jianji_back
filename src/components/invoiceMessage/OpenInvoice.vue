<!--Created by tyf on 2017/8/19-->
<!--开票对话框组件-->
<template>
  <div class="OpenInvoice">
    <!--发票修改项-->
    <el-form label-position="left" label-width="60px">

      <el-form-item label="发票号">
        <el-col :span="9">
          <el-input v-model="form.invoiceNumber" placeholder=""></el-input>
        </el-col>
        <el-col class="label" :span="6">重开关联票号</el-col>
        <el-col :span="9">
          <el-input v-model="form.relationInvoiceNumber" disabled></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="form.info" type="textarea" :rows="2" placeholder=""></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="$parent.$parent.dialog.showopenInvoice = false" class="float-right">取消</el-button>
        <el-button :loading="myLoading" @click="clickOpenBtn" style="margin-right: 20px" class="float-right" type="primary">开票</el-button>
      </el-form-item>
    </el-form>
    <!--中间分割线-->
    <div class="line"></div>
    <!--发票只读项-->
    <el-form label-position="left" label-width="70px">
      <el-form-item label="提交日期">
        <el-col :span="10">
          <el-input :value="form.createdDate | formDate('YYYY-MM-DD hh:mm')" disabled placeholder=""></el-input>
        </el-col>
        <el-col class="label" :span="4">开票日期</el-col>
        <el-col :span="10">
          <el-input :value="form.lastModifiedDate | formDate('YYYY-MM-DD hh:mm')" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-col :span="10">
          <el-input v-model="form.companyName" disabled placeholder=""></el-input>
        </el-col>
        <el-col class="label" :span="4">纳税人号</el-col>
        <el-col :span="10">
          <el-input v-model="form.taxpayerIdentifyNumber" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="开票金额">
        <el-col :span="10">
          <el-input v-model="form.moneyAmount" disabled placeholder=""></el-input>
        </el-col>
        <el-col class="label" :span="4">邮箱</el-col>
        <el-col :span="10">
          <el-input v-model="form.email" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="联系人">
        <el-col :span="10">
          <el-input v-model="form.contact" disabled placeholder=""></el-input>
        </el-col>
        <el-col class="label" :span="4">联系电话</el-col>
        <el-col :span="10">
          <el-input v-model="form.mobile" disabled></el-input>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        required: true,
        type: Object
      }
    },
    data () {
      return {
        form: {}
      }
    },
    methods: {
      clickOpenBtn () {
        this.myLoading = true
        this.$http.postInvoice(this.form).then(({data}) => {
          this.myLoading = false
          if (!data) {
            // 数据回流
            this.$emit('input', this.form)
            // 找到对话框的父组件，来设置隐藏显示
            this.$parent.$parent.dialog.showopenInvoice = false
            // 成功后的提示
            this.$message({
              message: '修改成功'
            })
          }
        }).catch(function () {
          this.myLoading = false
        })
      }
    },
    created () {
      this.form = JSON.parse(JSON.stringify(this.value))
      console.log(this.form)
    }
  }
</script>

<style lang="less" scoped>
  .OpenInvoice {
    margin: 0px 20px;
    .label{
      text-align: center;
    }
    .line {
      height: 1px;
      background-color: lightgray;
      margin-bottom: 14px;
    }
  }
</style>
