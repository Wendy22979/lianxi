<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="180"> </el-table-column>
      <el-table-column prop="goods_price" label="价格" width="180">
      </el-table-column>
      <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
      <el-table-column prop="tags" label="标签">
        <template slot-scope="scope">
          <div>
            <!-- 添加标签 -->
            <el-input
              class="input-new-tag"
              v-if="scope.row.inputVisible"
              v-model="scope.row.inputValue"
              :ref='"saveTagInput" + scope.row.id'
              size="small"
              @keyup.enter="handleInputConfirm(scope.row.inputValue,scope.$index)"
              @blur="handleInputConfirm(scope.row.inputValue,scope.$index)"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput(scope.row.id,scope.$index)"
              >+ New Tag</el-button
            >
          </div>
          <!-- 标签区 -->
          <div slot="reference" class="name-wrapper">
            <el-tag
              :key="tag"
              v-for="tag in scope.row.tags"
              size="medium"
              closable
              :disable-transitions="false"
              @close="handleClose(tag,scope.$index)"
            >
              {{ tag }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableSlot",
  props: {
    tableData: Array,
  },
  methods: {
    // 删除的点击事件
    handleDelete(index) {
     this.$bus.$emit("delItem",index)
     
    },
    // 点击x标签的删除
    handleClose(tag,index) {
      this.$bus.$emit("delData",tag,index)
    },

  // 显示隐藏input
    showInput(id,index) {
       this.$bus.$emit("showInput",true,index)
        this.$nextTick(() => {
          this.$refs['saveTagInput' + id].focus();
        });
      },
  //添加新标签
  handleInputConfirm(inputValue,index) {
        if (inputValue.trim() !== "") {
          this.$bus.$emit("addTab",inputValue,index)
        }
        else {
          alert("请输入内容")
          this.$bus.$emit("showInput",false,index)
        }
      },
    
  },
};
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>