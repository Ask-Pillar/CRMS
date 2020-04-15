<template>
<d2-container>
  <el-card>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      add-title="添加数据"
      :add-template="addTemplate"
      :form-options="formOptions"
      :pagination="pagination"
      :loading="loading"
      @pagination-current-change="paginationCurrentChange"
      @dialog-open="handleDialogOpen"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel"
      :rowHandle="rowHandle"
      @row-remove="handleRowRemove">
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow"><i class="fa fa-plus" aria-hidden="true"></i> 新增</el-button>
      <el-input slot="header" style="margin-bottom: 5px" placeholder="会议室编号" suffix-icon="el-icon-search"> </el-input>
      <el-button slot="header" style="margin-bottom: 5px"><i class="el-icon-search"></i> 搜索</el-button>
    </d2-crud>
  </el-card>
</d2-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { RoomList } from '@/api/room'
export default {
  data () {
    return {
      columns: [
        {
          title: '会议室编号',
          key: 'roomid'
        },
        {
          title: '会议地址',
          key: 'address'
        },
        {
          title: '桌子',
          key: 'table'
        },
        {
          title: '椅子',
          key: 'chair'
        },
        {
          title: '投影仪',
          key: 'project'
        },
        {
          title: '麦克风',
          key: 'microphone'
        },
        {
          title: '电脑',
          key: 'computer'
        },
        {
          title: '人数',
          key: 'number'
        },
        {
          title: '状态',
          key: 'state'
        }
      ],
      addTemplate: {
        address: {
          title: '地点',
          value: '6-202'
        },
        table: {
          title: '桌子',
          value: '10'
        },
        chair: {
          title: '椅子',
          value: '20'
        },
        project: {
          title: '投影仪',
          value: '1'
        },
        microphone: {
          title: '麦克风',
          value: '1'
        },
        computer: {
          title: '电脑',
          value: '1'
        },
        number: {
          title: '人数',
          value: '20'
        },
        state: {
          title: '状态',
          value: '20'
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 100
      },
      rowHandle: {
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show (index, row) {
            if (row.showRemoveButton) {
              return true
            }
            return false
          },
          disabled (index, row) {
            if (row.forbidRemove) {
              return true
            }
            return false
          }
        }
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    handleDialogOpen ({ mode }) {
      this.$message({
        message: '打开模态框，模式为：' + mode,
        type: 'success'
      })
    },
    // 普通的新增
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        this.$message({
          message: '保存成功',
          type: 'success'
        })

        // done可以传入一个对象来修改提交的某个字段
        done({
          roomid: '2',
          forbidRemove: false,
          showRemoveButton: true
        })
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      })
      done()
    },
    paginationCurrentChange (currentPage) {
      this.pagination.currentPage = currentPage
      this.fetchData()
    },
    methods: {
      handleRowRemove ({ index, row }, done) {
        setTimeout(() => {
          console.log(index)
          console.log(row)
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          done()
        }, 300)
      }
    }
  }
}
</script>

<style scoped>
  .el-input {
    width: 200px;
    margin-right: 10px;
  }
</style>
