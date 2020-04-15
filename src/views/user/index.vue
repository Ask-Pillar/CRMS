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
      @row-remove="handleRowRemove"
      edit-title="我的修改"
      :edit-template="editTemplate"
      @row-edit="handleRowEdit">
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow"><i class="fa fa-plus" aria-hidden="true"></i> 新增</el-button>
      <el-input slot="header" style="margin-bottom: 5px" placeholder="会议室编号" suffix-icon="el-icon-search"> </el-input>
      <el-button slot="header" style="margin-bottom: 5px"><i class="el-icon-search"></i> 搜索</el-button>
    </d2-crud>
  </el-card>
</d2-container>
</template>

<script>
// import { BusinessTable1List } from '@api/demo.business.table.1'
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
      data: [
        {
          roomid: '1',
          address: '1-101',
          table: '100',
          chair: '100',
          project: '1',
          microphone: '1',
          computer: '1',
          number: '100',
          state: '30',
          forbidRemove: false,
          showRemoveButton: true
        },
        {
          roomid: '1',
          address: '1-101',
          table: '100',
          chair: '100',
          project: '1',
          microphone: '1',
          computer: '1',
          number: '100',
          state: '30',
          forbidRemove: false,
          showRemoveButton: true
        },
        {
          roomid: '1',
          address: '1-101',
          table: '100',
          chair: '100',
          project: '1',
          microphone: '1',
          computer: '1',
          number: '100',
          state: '30',
          forbidRemove: false,
          showRemoveButton: true
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
      editTemplate: {
        address: {
          title: '地点',
          value: ''
        },
        table: {
          title: '桌子',
          value: ''
        },
        chair: {
          title: '椅子',
          value: ''
        },
        project: {
          title: '投影仪',
          value: ''
        },
        microphone: {
          title: '麦克风',
          value: ''
        },
        computer: {
          title: '电脑',
          value: ''
        },
        number: {
          title: '人数',
          value: ''
        },
        state: {
          title: '状态',
          value: ''
        },
        forbidEdit: {
          title: '禁用按钮',
          value: false,
          component: {
            show: false
          }
        },
        showEditButton: {
          title: '显示按钮',
          value: true,
          component: {
            show: false
          }
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
        },
        edit: {
          columnHeader: '编辑表格',
          edit: {
            icon: 'el-icon-edit',
            text: '点我进行编辑',
            size: 'small',
            show (index, row) {
              if (row.showEditButton) {
                return true
              }
              return false
            },
            disabled (index, row) {
              if (row.forbidEdit) {
                return true
              }
              return false
            }
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
    },

    handleRowEdit ({ index, row }, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '编辑成功',
          type: 'success'
        })

        // done可以传入一个对象来修改提交的某个字段
        done({
          address: '我是通过done事件传入的数据！'
        })
        this.formOptions.saveLoading = false
      }, 300)
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
