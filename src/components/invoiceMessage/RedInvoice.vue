<!--Created by tyf on 2017/8/19-->
<!--红票对话框组件-->
<template>
  <div class="RedInvoice">
    <el-form label-position="left" label-width="90px">
      <el-form-item label="红票发票号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="原发票号">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="$parent.$parent.dialog.showRedInvoice = false" class="float-right">取消</el-button>
        <el-button :loading="myLoading" @click="clickEnsureBtn" style="margin-right: 20px" class="float-right" type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      clickEnsureBtn () {
        this.$parent.$parent.dialog.showRedInvoice = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .RedInvoice{

  }
</style>
