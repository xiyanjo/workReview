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
       * set--适合跟踪多个元素，不能直接通过索引访问，需要转为数组
       * set 强引用
       */
      es6Set(){
          let set = new Set(),key1={},key2={};
          set.add(5);
          set.add('5');
          set.add(key1);
          set.add(key2);
          set.add(5);//传入相同值会被忽略
          console.log('set',set.size);

          key1=null;//set内还有引用

          let setArr = new Set([1,2,3,2,2,2]); // array 转set
          console.log('setArr',setArr.size);
          console.log( setArr.has(4));
          setArr.forEach((index,ind,set)=>{
              console.log(index,ind,set);
          })
        //   setArr.delete(3);
        //   setArr.clear();
        
        let toArr = [...setArr];// set转array
        console.log('toArr',toArr);
        console.log('[...setArr][0]',[...setArr][0]);
      },
      /**
       * Weak Set 弱引用Set集合
       * 存储对象的弱引用，不可以存储原始值，集合中的弱引用如果是对象唯一引用，则被回收并释放内存
       * 方法：add() has() delete()
       * 不接受任何原始值--会报错--只接受对象值
       * 弱引用，weakKey3=null---weakSet的引用也被移除
       * 不可迭代
       * 不支持size
       * 不能通过程序本身检测其中内容
       */
      WeakSet(){
          let weakKey1={},weakKey2={},weakKey3=[],weakSet=new WeakSet([weakKey1,weakKey2]);
          weakSet.add(weakKey3);

          weakKey3=null;
        //   let weakKey1={},weakKey2={},weakSet=new WeakSet([weakKey1,weakKey2,45]);//报错
          console.log(weakSet,weakSet.has(weakKey1));
      },
      /**Map
       * 存储键值对的有序列表
       * Object.is() --- 键名的等价性判断
       * 可以直接用对象作为对象的属性名----不修改对象本身添加信息
       * size 
       * has()
       * delete()
       * clear()
       * forEach(index,key,mapSelf)
       */
      es6Map(){
        let map = new Map();
        map.set('title','title1');//map中新增值
        map.set('year','2019');
        console.log(map.get('title'));//获取信息
        let keyObj = {
            name:'keyObj'
        }
        map.set(keyObj,'我是对象作为属性名');
        console.log(map.get(keyObj));

        let mapInit = new Map(['name','jo'],['age',25]);//传入数组初始化map，可有效防止属性转换
      },
      /**WeakMap
       * 保存dom
       * 弱引用map，存储对象的弱引用
       * 键名必须为对象
       * 弱引用外无其他强引用，垃圾回收同时移除weakMap中的键值对
       */
      WeakMap(){

      }
   },
   mounted(){
    //   this.es6Set();
    //   this.WeakSet();
      this.es6Map();
   }
 }
</script>

<style>

</style>
