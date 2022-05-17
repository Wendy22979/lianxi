<template>
  <div class="bottom">
    <TableSlot :tableData="tableData" />
  </div>
</template>

<script>
import request from "@/utiles/request";
import TableSlot from "@/components/TableSlot.vue";
export default {
  name: "ProductList",
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    TableSlot,
  },
  methods: {
    // 删除标签
    delData(val, index) {
      console.log(this.tableData);
      this.tableData[index].tags.splice(
        this.tableData[index].tags.indexOf(val),
        1
      );
    },
    // 更改input显示隐藏
    showInput(val, index) {
      this.tableData[index].inputVisible = val;
    },

    // 增加标签
    addTab(val,index){
       this.tableData[index].tags.push(val);
       this.tableData[index].inputValue = "";
        this.tableData[index].inputVisible = false;
    },

    // 删除一条数据
    delItem(index){
       this.tableData.splice( this.tableData[index], 1);
    }
  },
  async created() {
    // 请求数据
    let res = await request({
      url: "https://www.escook.cn/api/goods",
      method: "GET",
    });
    this.tableData = res.data.data;
  },
  mounted() {
    this.$bus.$on("delData", this.delData);
    this.$bus.$on("showInput", this.showInput);
    this.$bus.$on("addTab", this.addTab);
    this.$bus.$on("delItem", this.delItem);
  },
  beforeDestroy() {
    this.$bus.$off("delData");
    this.$bus.$off("showInput");
    this.$bus.$off("addTab");
    this.$bus.$off("delItem");
  },
};
</script>

<style scoped>
.bottom {
  padding-top: 50px;
}
</style>