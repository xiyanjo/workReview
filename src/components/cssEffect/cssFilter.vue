<template>
 <div style="width:100%;height:100%">
     <div class="container">
		<div class="content">
			<h1>WARFRAME</h1>	
			<p>The Grineer, with their endless clone armies, have plunged the system into chaos. There is only one force that can match them, you.
			You are Tenno, an ancient warrior, a master of gun and blade. You wield the mighty Warframes and command their awesome powers. Forge your weapons. Gather like-minded Tenno and take the fight back to the Grineer. The Origin System needs you once again. Are you ready?</p>	
		</div>
	</div>
 </div>
</template>

<script>
import  wuHuang from '@/assets/img/wuHuang.jpg'
 export default {
   name:'cssFilter',
   data () {
     return {
        wuHuangSrc:wuHuang,
     }
   },
   components: {

   }
 }
</script>

<style scoped>

.container {
    width: 100%;
    height: 100%;
    background-image: url(/img/bg1.8d3819d7.jpg);
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    width: 80%;
    height: 80%;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    overflow: hidden;
    z-index: 2;
    padding: 50px;
    box-sizing: border-box;
}

.content::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	filter: blur(20px);
	z-index: -3;
	margin: -30px;
	background-image:url('../../assets/img/bg1.jpg');
	background-position: center top;
	background-size: cover;
	background-attachment: fixed;
  /* 解决左侧遮罩层无法点击问题 */
  margin-left: 400px;
}
 
</style>
