<template>
  <div>
    <van-cell :title="title" :label="label" >
        <template #right-icon>
          <van-icon name="play-circle-o" class="play-circle-o"  @click="getPlay"/>
        </template>
      </van-cell>
  </div>
</template>

<script>
  export default {
    name:"itemName",
    props:["label","title","id"],
    methods:{
      getPlay(){
        this.$router.push({
          path:"/play",
          query:{
            id:this.id
          }
        })
      }

    }
    
    
  }
</script>

<style scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.play-circle-o {
  font-size: 20px;
  line-height: 46px;
}
</style>