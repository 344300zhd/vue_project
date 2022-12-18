<template>
  <div class="container">
    <span @click="download" style="font-weight:bold;font-size:20px;line-height:40px;cursor: pointer;">文件下载</span>
    <div style="width:100%;background:#eee;height: 1px;margin:10px"></div>

    <span @click="debounceSubmit" style="font-weight:bold;font-size:20px;line-height:40px;cursor: pointer;">文件上传</span>
    <UploadFile @fileList="getFileList"/>
   
  </div>
</template>

<script>
import { debounce } from "@/utils/Debounce.js";
import { throttle } from "@/utils/Throttle.js";
import { uploadFile} from "@/api/FileApi.js";
import {download } from "@/utils/download";
import UploadFile from "@/components/File/UploadFile";
import * as dayjs from "dayjs"
export default {
  name:"submit",
  components:{
    UploadFile
  },
  data(){
    return{
      userList:[{username:"暂无信息"}],
      fileList:[],
      nowDay:"",
      nowDate:new Date(),
      testObj:{},
      msg:"",
      red:false
    }
  },
  mounted(){
    this.nowDay = dayjs().format("YYYY-MM-DD HH:mm")
  },
  methods: {
    checkInput(val){
      if(val) this.red = true
      else this.red = false
    },
    /** 获取文件列表 **/
    getFileList(data){
      this.fileList = data.fileList
      console.log("fileList =>",this.fileList);
    },
    download(){
      download("1642416690842")
    },
    // 防抖提交
    debounceSubmit:debounce(function(){
      if(!this.fileList.length){
        this.$message.warning("请先选择文件 !")
        return
      }
      let formData = new FormData()
      this.fileList.forEach(item => {
        formData.append("fileList",item.file)
      })
      uploadFile(formData)
      .then(res => {
        if(res.data.code === "success"){
          this.$message.success("上传成功")
        }
      })
    },1000),
  },
};
</script>

<style lang="scss" scoped>
.isRed{
  background: red !important;
}
.container{
  overflow: hidden;
  .column{
    margin-bottom: 10px;
  }
  .other{
    height: 500px;
  }
  .btn{
    width: 80px;
    height: 40px;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    background: #eee;
  }
}
</style>