<template>
  <div class="chiltwo">
    <h4>这是子组件,总数:{{count}}</h4>
    <div class="bntdiv">
      <button v-on:click="add">加</button>
      <button v-on:click="diff">减</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'childtwo',
  data () {
    return {
      count : 0
    }
  },
  methods: {
    add: function(){
      this.count++;
      this.$emit('add');
    },
    diff: function(){
      this.count--;
      this.$emit('diff');
    }
  }
 

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .bntdiv
    text-align : center
</style>
