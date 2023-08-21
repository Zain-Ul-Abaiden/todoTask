<template>
    <div>
        <ReadTask :items="getTask"/>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ReadTask from '@/components/ReadTask.vue';
    export default {
        name: 'ReadTaskView',
       computed:{
        ...mapGetters({getTask:"getTasks"})
       },
       components:{
        ReadTask
       }
    }
</script>
<style lang="scss" scoped>
</style>