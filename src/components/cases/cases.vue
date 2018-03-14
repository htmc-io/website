<template>
<div class="content-wrapper">
  <div class="show-content">
        <big-data-case></big-data-case>
		    <microservice-case></microservice-case>
		    <video-conference-case></video-conference-case>
		    <football></football>
		    <decoration-case></decoration-case>
		    <wechat-case></wechat-case>
  </div>
	
</div>

</template>


<script>
import BigDataCase from '@/components/cases/BigDataCase.vue'
import MicroserviceCase from '@/components/cases/MicroserviceCase.vue'
import VideoConferenceCase from '@/components/cases/VideoConferenceCase.vue'
import Football from '@/components/cases/Football.vue'
import DecorationCase from '@/components/cases/DecorationCase.vue'
import WechatCase from '@/components/cases/WechatCase.vue'
export default {
  components: {
    BigDataCase,
    MicroserviceCase,
    VideoConferenceCase,
    Football,
    DecorationCase,
    WechatCase
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content-wrapper
   
    background-color: rgba(0,0,0,0.6)
    z-index: 2
    position: absolute
    width: 100%
    left: 0
    top:0
    bottom: 0
    
    .show-content
      margin-top:80px
      height:100%
  
</style>
