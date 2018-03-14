<template>
<div class="content-wrapper">
	<div class="show-content">
		<big-data></big-data>
		<microservice></microservice>
		<video-conference></video-conference>
	</div>
</div>

</template>

<script>
import BigData from '@/components/solution/BigData.vue'
import Microservice from '@/components/solution/Microservice.vue'
import VideoConference from '@/components/solution/VideoConference.vue'
export default {
  components: {
    BigData,
    Microservice,
    VideoConference
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
