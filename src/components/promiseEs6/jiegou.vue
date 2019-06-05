<template>
 <div>
     <div>解构赋值</div>




 </div>
</template>

<script>
 export default {
   data () {
     return {
         defaultOptions:{
            age:18,
            sex:'',
            tel:''
        },
     }
   },
   components: {

   },
   methods:{
    /** 对象解构赋值学习 及混合解构
     * 1 嵌套解构
     * 2 初始化默认值
     * 3 非同名变量
     * 4 混合解构中的 loc 及 range 仅仅代表在对象中的位置#####
     */
       learnObjectJieGou(){
           let node ={
               type:'oldType',
               name:'oldName',
               loc:{
                   start:1,
                   end:6
               },
               range:[1,'hun2',3]
           } 
        //    嵌套解构
           let {
               loc : {start},
               range:[,startIndex]
           } = node;
           let {loc:{start:otherStart}}=node;
           console.log('start--同名赋值', start);
           console.log('otherStart--非同名赋值', otherStart);
           console.log('startIndex--混合解构', startIndex);

            // 对象解构
           let { type , name } = node;
           console.log('同名变量解构',type,name);
           node.type='newType';
           node.name='newName';
        //    对象赋值
           ({ type , name } = node);//添加小括号
           console.log('同名变量赋值',type,name);

       },
        /** 数组解构 */
       learnArrayJieGou(){
           /**
            * 1 初始化默认值
            * 2 嵌套解构赋值：加[直接取到嵌套数组的值]
            * 3 不定参数解构---不定参数必须放在最后一位
            */
           let colors = [ 'red','green','blue','yellow',['mini','small','large'],,'gray','dark'];
        //    let [,,thirdColor='thirdColor',,[size],moreColor='biubiu'] = colors;
           let [,,thirdColor='thirdColor',,size,moreColor='biubiu',...restColor] = colors;
           console.log('数组解构','---',thirdColor,'---',size,'---',moreColor,'---',restColor);
           [,thirdColor] = colors;
           console.log('数组赋值',thirdColor);
       },
         /** 数组解构赋值应用 */   
       arrayJieGouApply(){
        //    交换两个的值
            let a =1,b=2;
            [a,b]=[b,a];
            console.log('两个数值交换',a, b);
            // 赋值数组
            let arr1 = [1,2,3],arr3=[4,5,6];
            let arr2 = arr1.concat();//es5复制数组
            console.log(arr2);
            [...arr2]=arr3//es6赋值数组
            console.log(arr2);
       },
       /** 解构参数
        * 1 默认参数
        * 2 混合解构
        * 3 参数为对象时，传入默认参数对象
        */
       restParamJieGou(name='defaultName',{age=18,sex,tel}=this.defaultOptions){
           console.log(name,age,sex,tel);
       }
    
    
   },
   mounted(){
        this.learnObjectJieGou();
        this.learnArrayJieGou();
        this.arrayJieGouApply();
        let otherOptions = {
            sex:'girl',
            tel:'1760000000'
        }
        this.restParamJieGou('newName');//逐一对对象内赋值，不传对象的时候会报错
   }
 }
</script>

<style>

</style>
