<template>
  <div class="main-wrapper">
    <section class="title-wrapper">
      <div class="title-content">
        <video autoplay="autoplay" muted="muted" volume="0" poster="http://ccdn.goodq.top/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85OGIyZTYyYzgwOGRkNTdkMDA0MTUxNWVkNjk0NDg5YXByZXZpZXdfaW1hZ2UucG5n.png"
               loop="loop" class="video-wrapper">
          <source type="video/mp4" src="http://ccdn.goodq.top/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85OGIyZTYyYzgwOGRkNTdkMDA0MTUxNWVkNjk0NDg5YS5tcDQ_p_p100_p_3D.mp4"/>
        </video>
        <div class="title-describe-wrapper">
          <div class="title-describe-content">
            <div class="softer-wrapper">
              <span class="softer-content">CLOUD SOFTWARE</span>
            </div>
            <div class="motto-wrapper">
              <p>
                <span class="motto-first-part">让软件更</span>
                <span class="motto-second-part">精彩</span>
              </p>
            </div>
            <div class="more-details-wrapper">
              <p class="more-details-content">
                <a style="http://57e8ecf41155d.t73.qifeiye.com/?page_id=8115">
                  <span>关于更多SOFTWARE的介绍</span>
                </a>
              </p>
            </div>
            <div class="main-business-wrapper">
              <div class="main-business-item-wrapper">
                <img src="../../../resource/img/build-website.png" class="main-business-item-img"/>
                <span class="main-business-text">自助建站平台</span>
              </div>
              <div class="main-business-item-wrapper">
                <img src="../../../resource/img/custom-software.png" class="main-business-item-img"/>
                <span class="main-business-text">定制软件开发</span>
              </div>
              <div class="main-business-item-wrapper">
                <img src="../../../resource/img/out-source.png" class="main-business-item-img"/>
                <span class="main-business-text">IT项目外包</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <home-case></home-case>
  </div>
</template>

<script type="text/ecmascript-6">
import DecorationCase from '@/components/cases/DecorationCase.vue'
import HomeCase from '@/components/home/homecase.vue'
export default {
  components: {
    HomeCase
  }
} 
</script>

<style lang="stylus"
       rel="stylesheet/stylus">
  .main-wrapper
    width: 100%
    position: absolute
    top: 0px
    left: 0px
    .title-wrapper
      color: blue
      padding-bottom: 162px
      min-height: 600px
      width: 100%
      position: relative
      .title-content
        background-position: 0 0
        background-repeat: no-repeat
        z-index: 1
        overflow: hidden
        position: absolute
        width: 100%
        left: 0
        top: 0
        .video-wrapper
         // width: 100%
          //height: 100%
          object-fit: cover
          object-position: center center
          display: inline-block
        .title-describe-wrapper
          background-color: rgba(0,0,0,0.6)
          z-index: 2
          position: absolute
          width: 100%
          left: 0
          top: 0
          bottom: 0
          .title-describe-content
            margin-top: 211.5px
            margin-bottom: 0px
            width: 100%
            position: relative
            min-height: 1px
            padding-left: 5px
            padding-right: 5px
            float: left
            max-width: 100%
            text-align: center!important;
            .softer-wrapper
              text-align: center
              .softer-content
                color: #FFFFFF
                font-size: 28px
                letter-spacing: 1px
                font-family: verdana
                font-weight: 700

            .motto-wrapper
              line-height: 1.5em;
              background-repeat: no-repeat
              text-align: center
              font-family: '微軟正黑體'
              .motto-first-part
                font-size: 48px
                letter-spacing: 1px
                font-weight: 700
                color:#FFFFFF
              .motto-second-part
                font-size:72px
                color:#f1501a
                letter-spacing: 1px
            .more-details-wrapper
              line-height: 1.5em
              background-repeat: no-repeat
              padding-top: 0
              padding-bottom: 20px
              .more-details-content
                text-align: center
                font-family:'微软雅黑'
                color:#FFFFFF
                font-size: 13px
            .main-business-wrapper
              max-width: 520px
              margin: 0 auto
              position: relative
              z-index: 3
              margin-top: 28px
              .main-business-item-wrapper
                float: left
                width: 33%
                color: white
                font-size: 35px
                border-right: 1px dotted #cccccc
                .main-business-item-img
                  width: 40px
                  height: 40px
                .main-business-text
                  display: block
                  font-size: 16px
                  font-family: '微軟正黑體'
                  margin-top: 15px
</style>
