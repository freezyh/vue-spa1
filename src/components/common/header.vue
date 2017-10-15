<template>
  <div class="header">
     <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      
    }
  },
  computed: {
    title: function(){
      return this.$route.name;
    } 
  },
  updated: function(){
   
    console.log(this.$route);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 46px
    line-height : 46px
    text-align : center
    font-size: 16px
    background-color : #17a8af
    color: #ffffff
    z-index : 99
</style>
