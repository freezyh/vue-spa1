<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="content">
    <router-view/>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import footerComponent from '@/components/common/footer'
import headerComponent from '@/components/common/header'
export default {
  name: 'app',
  components:{
    'FooterComponent' : footerComponent,
    'HeaderComponent' : headerComponent
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content
    position : relative
    margin-top : 46px
    padding-bottom : 46px
</style>
