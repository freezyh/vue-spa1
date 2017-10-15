<template>
  <div class="menu1">
  <h4>这是父组件</h4>
	<p>这是父组件正在渲染的数据：{{parentMsg}}</p>
	<input type="" v-model="parentMsg" autofocus="autofocus" placeholder="请输入数据">

    <childone :my-message="parentMsg"></childone>

     
    
  </div>
</template>

<script>
import childone from '../common/childOne'
export default {
  name: 'menu1',
  data () {
    return {
        parentMsg : ''
    }
  },
  components: {	 
	  	'childone' : childone
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .menu1
    width : 96%
    margin : 0 auto
    text-align : left
    font-size : 20px
  input 
    outline: none
    border: none 
    background-color : #eeeeee
</style>
