<template>
  <div class="childone">
    <h4>这是子组件</h4>
    <p>这是<span>来自父组件</span>的数据：{{myMessage}}</p>
  </div>
</template>

<script>

export default {
  name: 'childone',
  data () {
    return {
      
    }
  },
  props: [
    'myMessage',
  ],

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
