<template>
 <div>
     <div>集合</div>
     <div>set集合--无重复元素的列表</div>
     <div>map集合--含多组键值对，集合中每一个元素分别存放着可访问的键名和对应的值---用于缓存频繁取用的数据</div>
     <div>set集合--检查对象中是否存在某个键名   map集合--获取已存在的数据</div>




 </div>
</template>

<script>
 export default {
   data () {
     return {
      
     }
   },
   components: {},
   methods:{
      /**
       * es5 set及map
       * 会对键名进行字符串的转换，容易有误差
       * 检测是否存在时容易有误差
       * 
       * in 运算符---判断属性在对象中是否存在，也会判断原型
       */
      es5Set(){
          var set = Object.create(null);
          set.foo = true;
          if(set.foo){
            //   要执行的代码
          }
      },
      es5Map(){
          var map = Object.create(null);
          map.foo = 'bar';
          var val = map.foo;//获取已存值
          console.log(val);
      },
      /**
       * es6 set 及 map
       * set 集合不会对属性进行强制转换
       * Object.is() ----检测两个值是否一致
       * set 传入数组自动去重，JSON解构转换为set集合
       * Set 构造函数通过 迭代器 从参数中提取值
       * 参数：所有可迭代对象
       * 检查是否存在某个值---has()
       * delete()--移除某个元素
       * clear()---移除所有集合元素
       * forEach() 参数--index,与第一个参数一样的值，set本身 （其他与数组的forEach相同）
       */
      es6Set(){
          let set = new Set(),key1={},key2={};
          set.add(5);
          set.add('5');
          set.add(key1);
          set.add(key2);
          set.add(5);//传入相同值会被忽略
          console.log('set',set.size);

          let setArr = new Set([1,2,3,2,2,2]);
          console.log('setArr',setArr.size);
          console.log( setArr.has(4));
          setArr.forEach((index,ind,set)=>{
              console.log(index,ind,set);
          })
        //   setArr.delete(3);
        //   setArr.clear();

      }
   },
   mounted(){
      this.es6Set();
   }
 }
</script>

<style>

</style>
