<template>
 <div>
     <div>解构赋值</div>

     <div>
        <div class="box" style="width:200px;height:200px;background:pink;text-align:justify">
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <div>
                <div class="father">
            <div class="son" style="margin-top:80px;">1</div>
            </div>
            <div class="father" style="margin-top:80px;">
            <div class="son">2</div>
            </div>
            <div class="father" style="margin-top:80px;">
            <div class="son" style="margin-top:80px;">3父子margin合并了</div>
            </div> 
        </div>

         <div style="width: 300px; height:150px;position: relative; border:1px solid pink">
            <div class="son" style="position: absolute;top: 0; right: 0; bottom: 0; left: 0;width: 200px; height: 100px;margin:auto ">垂直水平居中</div>
            </div>
        </div> 

        <div>
            <div class="box2">
                <div class="child2">child</div>
            </div>
        </div>

        <div>
            <div class="box3">
                <img src="">
                <p>内容</p>
                </div>
        </div>
        <div class="icon-menu"></div>

        <div class="add"></div>
        

       

        <div>
            <span>正在加载中</span>
            <dot class="dot">...</dot>
        </div>
     </div>
  
     
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
/* 实现一个新增图片样式start */
.add {
    color: #ccc;
    border: 2px dashed;
    width: 100px;
    height: 100px;
}
.add {
    display: inline-block;
    width: 76px; height: 76px;
    color: #ccc;
    border: 2px dashed;
    text-indent: -12em;
    transition: color .25s;
    position: relative;
    overflow: hidden;
}
.add:hover {
    color: #34538b;
}
.add::before, .add::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
}
.add::before {
    width: 20px;
    border-top: 4px solid;
    margin: -2px 0 0 -10px;
}
.add::after {
    height: 20px;
    border-left: 4px solid;
    margin: -10px 0 0 -2px;
}
/* 实现一个新增图片样式 end */
.icon-menu {
 width: 120px;
 height: 20px;
 border-top: 60px double;
 border-bottom: 20px solid;
} 
.box3 > img {
 float: left;
 width: 256px;
 height:20px;
 background: lightpink;
}
.box3 > p {
 overflow: hidden;
 /* 因为overflow float不生效 */
 margin-left: 200px;
} 

.box2 {
 height: 100px;
 /* border:1px solid #ccc; */
}
.child2 {
 height: 80px;
 /* 没有样式效果 */
 margin-bottom: 100px;
} 
/* 。。。start */
.dot{
    display: inline-block;
    height: 1em;
    line-height: 1;
    text-align: left;
    vertical-align: -.25em;
    overflow: hidden;
}
.dot::before{
    display: block;
    content:'...\A..\A.\A';
    white-space: pre-wrap;
    animation: dot 3s infinite step-start both;
}
@keyframes dot{
    33%{transform:translateY(-2em)}
    66%{transform:translateY(-1em)}
}
/* 。。。end */

/* center? start */
.box::before {
    content:'';
    height: 50%;
    display: inline-block;
}
.box::after {
    content:'';
    width: 100%;
    display: inline-block;
}
.bar{
    display:inline-block;
    width: 20px;
    height: 20px;
    background:blue;
}
/* center? end */


</style>
