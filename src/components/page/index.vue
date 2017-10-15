<template>
  <div class="index">
    <ul>
      <li v-for="item in listArrSub" class="li-item" v-bind:key="item.id">
        <img :src='item.albumpic_small' class="samll-img">
        <div class="li-content">
          <div class="songname">{{item.songname}}</div>
          <div class="singername">{{item.singername}}</div>  
        </div> 
      </li>
    </ul>
    <div v-if="loading" class="loading">加载中......</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data() {
    return {
      loading: true,
      listArr: [],
      listArrSub: [],
    }
  },
  created() {
    this.loadList();
  },
  methods: {
    loadList: function() {
      console.log("初始化加载数据开始...");
      var _this = this;
      _this.loading = true;
      axios.get('http://route.showapi.com/213-4?showapi_appid=47345&showapi_sign=7566a05731b844ed9fcd60c9027c5b72&topid=4 &', {
        params: {
        }
      })
      .then(function(response) {
        _this.loading = false;
        _this.listArr = response.data.showapi_res_body.pagebean.songlist;
        console.log("加载完成");
        _this.listArrSub = _this.listArr.slice(0, 20);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
  
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .li-item
    position : relative
    display : flex
    border-bottom : 1px solid #d1d1d1 
    overflow : hidden
    .samll-img
      position : relative
      display: block
      width : 90px
      height : 90px
      margin: 10px
      border-radius : 10px
    .li-content
      flex : 1
      text-align : left
      margin : 10px 0
      .songname
        height : 40px
        line-height : 40px
        font-size : 20px
      .singername
        height : 30px
        line-height : 30px
        margin-top : 10px
  .loading
    height: 200px;
    line-height: 200px;
    font-size: 24px;


</style>
