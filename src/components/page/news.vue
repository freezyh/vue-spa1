<template>
  <div class="news">
    <ul class="wrap-item">
      <li class="item" v-for="item in listArr" v-bind:key="item.id">
        {{item.id}}.{{item.title}}
      </li>
    </ul>

    <div v-if="loading" class="loading">加载中......</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'news',
  data() {
    return {
      loading: true,
      listArr: [],
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
      
      axios.get('http://route.showapi.com/738-1?showapi_appid=47345&showapi_sign=7566a05731b844ed9fcd60c9027c5b72&n=10', {
        params: {
        }
      })
        .then(function(response) {
          _this.loading = false;
          _this.listArr = response.data.showapi_res_body.list;
          console.log(_this.listArr);
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
  .loading
    height: 200px
    line-height: 200px
    font-size: 24px
  .wrap-item
    .item
      position : relative
      display : block
      height : 40px
      line-height : 40px
      text-align : left
      font-size : 18px
      padding-left : 30px
      &:nth-of-type(odd)
        background-color : #e9a6a6
      &:nth-of-type(even)
        background-color : #a6dde9
</style>
