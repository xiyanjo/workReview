<template>
  <div>
    <div style="padding :10px 0">
      <div>{{'子（来自父组件的title）:'+fromChildTitle}}</div>
      <!-- <div>{{'子组件中来自父组件的title的原值----:'+fromChildTitle2}}</div> -->

      <button @click="emitChangeTitle">子（改变父组件中title）</button>
    </div>



    <div>
      <div>{{'子prop（fromChildTitle2）:'+fromChildTitle2}}</div>
      <div>{{'子data（使用fromChildTitle2赋值的childrenTitl）:'+childrenTitle}}</div>
      <button @click="emitChangeTitle2">子（改变父组件中title）</button>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      fromChildTitle: '',
      fromChildTitle2: '',
    },
    data() {
      return {
        childrenTitle: this.fromChildTitle, //作为本地数据使用，父组件改变 子不会改变
      }
    },
    components: {

    },
    methods: {
      emitChangeTitle() {
        this.$emit('onChangeTitle', '-childrenEvent');
      },
      emitChangeTitle2() {
        this.childrenTitle += '*--';
      },

    },
    mounted() {
      //  this.fromChildTitle2 = 4;//不可以在子组件中改变prop的数据，报错

    }
  }
</script>

<style>


</style>