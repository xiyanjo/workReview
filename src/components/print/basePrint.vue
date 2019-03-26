<template>
    <div>
        <!--startprint-->
        <div>实现一个打印功能</div>
        <!--endprint-->

        <div id="subOutputRank-print">
            <div>我爱你中华 </div>
            <div>我爱你中华 </div>
            <div>我爱你中华 </div>
            <div>我爱你中华 </div>
            <div>我爱你中华 </div>
            <button v-if="showPrintBtn" @click="vuePrint">打印</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
showPrintBtn:true,
            }
        },
        components: {

        },
        methods: {
            // 此方法可能对原生页面生效
            // vuePrint() {
            //     let bdhtml = window.document.body.innerHTML;
            //     console.log('bdhtml', bdhtml);
            //     let sprnstr = "<!--startprint-->"; //开始打印标识字符串有17个字符
            //     let eprnstr = "<!--endprint-->"; //结束打印标识字符串
            //     let prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17); //从开始打印标识之后的内容
            //     console.log('prnhtml1', prnhtml);

            //     // prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr)); //截取开始标识和结束标识之间的内容
            //     console.log('prnhtml2', prnhtml);
            //     window.document.body.innerHTML = prnhtml; //把需要打印的指定内容赋给body.innerHTML
            //     // window.print(); //调用浏览器的打印功能打印指定区域
            // },
            vuePrint() {
                this.showPrintBtn = false;
                let subOutputRankPrint = document.getElementById('subOutputRank-print');
                let newContent = subOutputRankPrint.innerHTML;
                let oldContent = document.body.innerHTML;
                document.body.innerHTML = newContent;
                window.print();
                window.addEventListener("afterprint", () => {
                    document.body.innerHTML = oldContent;
                });
            },
        },
        mounted() {
            //只可以在这里使用，不能直接绑定在vue上
            this.$nextTick(() => {
                 this.vuePrint();
            })
        }
    }
</script>

<style>


</style>