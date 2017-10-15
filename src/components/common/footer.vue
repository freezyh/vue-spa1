<template>
  <div class="footer">
     <div class="tab-item"><router-link to="/index">歌曲</router-link></div>
     <div class="tab-item"><router-link to="/news">新闻</router-link></div>
     <div class="tab-item"><router-link to="/menu1">Menu1</router-link></div>
     <div class="tab-item"><router-link to="/menu2">Menu2</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'I am footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer
    position: fixed
    display: flex
    width: 100%
    left: 0
    bottom: 0
    height: 46px
    line-height: 46px
    background-color : #ffffff
    .tab-item
      flex: 1
      a
       display: block
       text-decoration: none
       &.active
        color:yellow
</style>
