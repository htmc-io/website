<template>
  <div class="first-show-content">
    <section style="width: 100%;height: 100%; ">
      <!--    style="background: #37CFA2;" style="border:1px solid #f00;" -->
      <div class="programme-div"style="margin-right: 5px;">
      	<!-- style="border:1px solid #f00;" -->
        <div >
          <h1>集美家装</h1>
          <span>
                集美家装是一款集方案设计，可以在app线上选择模板再进行个性化设计，直击客户最深层需求.
              <br>
              同步根据装修风格，在线选择软装家具，效果可以在app上展示，软装和硬装更贴合相得益彰.
              <br>
              进度在线展示，一目了然，电脑手机均可查看。
            </span>
        </div>
        <!--<p>test word</p> -->
      </div>
      <!-- padding-top: 2px;padding-left: 2px;   style="background: #F9F0EB;"-->
      <div class="programme-div-img">
        <!--class="pic"  change img :src="nowIndex" to "../image/3.jpg" -->
        <img v-bind:src="nowIndex" height="300 px" width="90%" style="margin-right: 1px;" />
        <!-- <br>
        <h2>nowIndex {{nowIndex}}</h2> 
      -->
      </div>
    </section>
  </div>
</template>

<script>
import nowIndex1 from '../../assets/decorationbedroomdesign.jpg'
import nowIndex2 from '../../assets/decorationbedroomdesign.jpg'
import nowIndex3 from '../../assets/decorationprocess.jpg'
export default {
    components: {},
     mounted: function() { 
        console.log(" come into mounted");
        this.nowIndex=this.pic[0]; 
        var _this=this; 
        setInterval(function(){ 
            _this.i++; 
            _this.nowIndex=_this.pic[_this.i]; 
            if(_this.i>=_this.pic.length-1){
                 _this.i=0; 
             } 
         },2000) 
    },  

    data() {
        return {
            //pic:["../image/1.jpg","../image/2.jpg","../image/3.jpg"],
            pic:[nowIndex1,nowIndex2,nowIndex3],
            i:"0",
            nowIndex:nowIndex1,
        }
    }
}
</script>

<style >
.first-show-content {
	height: 100%;
	/*background-color:red;*/
}

/*项目案例div*/
.programme-div {
    width: 30%;
    height: 100%;
    /* background: rgb(223, 66, 67);*/
    float: right;
}
.programme-div div h1 {
    margin-bottom: 50px;
}
.programme-div div span {
    font-size: 18px;
    line-height: 30px;
}
.programme-div div p {
    margin-top: 10px;
}
.programme-div div p a {
    color: white;
    cursor: pointer;
}

/*案例图片*/
.programme-div-img {
    width: 60%;
    height: 100%;
    float: right;
    background-size: cover;
}

</style>
