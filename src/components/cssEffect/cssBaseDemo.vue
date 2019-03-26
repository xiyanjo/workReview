<template>
 <div>
    <div>
      <span class="beforeEle eleBox">伪元素before--在元素前加元素</span>
      <a  href="http://www.cnblogs.com/starof" class="afterEle eleBox">伪元素after--在元素后加元素</a>
    </div>



 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>
.eleBox{
  display: inline-block;
  padding:10px 15px;
  /* display:none; */
}
.afterEle{
  background:coral;
}
.beforeEle{
  background:cornflowerblue;
}
.beforeEle::before{
  content:'i am beforeEle';
  background:plum;
  padding: 10px 15px;
}
.afterEle::after{
  /*
  * 1 attr 引用网址
  * 2 url  引用图片
  */
    /* content: "(" attr(href) ")"; */
    content: url("https://www.baidu.com/img/baidu_jgylogo3.gif");
}



</style>
