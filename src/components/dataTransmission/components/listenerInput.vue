<template>
    <div>
        <label>
            {{ $attrs.formData.label }}
            <!-- <input v-bind="$attrs" v-bind:value="$attrs.formData.value" v-on:input="$emit('input', $event.target.value)"> -->
            <input v-bind="$attrs" v-bind:value="$attrs.formData.value" v-on="inputListeners">
        </label>
    </div>
</template>

<script>
    export default {
        name: 'listenerInput',
        data() {
            return {

            }
        },
        components: {

        },
        computed: {
            inputListeners: function () {
                var vm = this
                // `Object.assign` 将所有的对象合并为一个新对象
                return Object.assign({},
                    // 我们从父级添加所有的监听器
                    this.$listeners,
                    // 然后我们添加自定义监听器，
                    // 或覆写一些监听器的行为
                    {
                        // 这里确保组件配合 `v-model` 的工作
                        input: function (event) {
                            vm.$emit('input', event.target.value)
                        },
                        focus: function (event) {
                            vm.$emit('focus', event.target.value)
                        },
                        blur: function (event) {
                            vm.$emit('blur', event.target.value)
                        },
                        change: function (event) {
                            vm.$emit('change', event.target.value)
                        },

                        
                    }
                )
            }
        },
    }
</script>

<style>


</style>