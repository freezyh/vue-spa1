<template>
  <div class="menu2">
    <h4>子组件数据传递给父组件</h4>
	  <p>方式：用自定义事件</p>
    <h3>这是父组件,总数:{{total}}</h3>
    <childtwo v-on:add="addTotal" v-on:diff="diffTotal"></childtwo>
  </div>
</template>

<script>
import childtwo from '../common/childTwo'
export default {
  name: 'menu2',
  data () {
    return {
       total: 0
    }
  },
  components: {	 
	  	'childtwo' : childtwo
  },
  methods: {
    addTotal: function () {
      this.total ++;
    },
    diffTotal: function () {
      this.total --;
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .menu2
    width : 96%
    margin : 0 auto
    text-align : left
    font-size : 20px
</style>
