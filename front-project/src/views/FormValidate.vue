<template>
    <div style="height:2000px">
        <el-row>
            <el-col :span="8">
                <Form ref="form">
                    <FormItem/>
                    <FormItem/>
                    <FormItem/>
                    <FormItem/>
                </Form>
            </el-col>
        </el-row>
        <el-row>
            <el-button @click="submit">提交</el-button>
        </el-row>
    </div>
</template>

<script>
import Form from "@/components/Form/Form";
import FormItem from "@/components/Form/FormItem";
export default {
    name:"STUDY1223",
    components:{Form,FormItem},
    methods:{
        submit(){
            
        }
    }
}
</script>

<style>

</style>