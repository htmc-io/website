<template>
	<div class="first-show-content">
		<section style="width: 100%;height: 100%; ">
      <!--    style="background: #37CFA2;" style="border:1px solid #f00;" -->
      <div class="programme-div"style="margin-right: 5px;">
      	<!-- style="border:1px solid #f00;" -->
        <div >
          <h1>靓机汇</h1>
          <span>
                靓机汇平台是二手手机交易平台，卖家将手机记到平台，经过平台168项苛刻检查再放到平台上竞拍.
              <br>
              便捷支付方式，顺丰快递的将手机送到买家手机，平台3天包退，30天保修质保更值得信赖.
            </span>
        </div>
        <!--<p>test word</p> -->
      </div>
      <!-- padding-top: 2px;padding-left: 2px;   style="background: #F9F0EB;"-->
      <div class="programme-div-img">
        <!--class="pic"  change img :src="nowIndex" to "../image/3.jpg"  height="300 px" width="90%"-->
        <img v-bind:src="nowIndex"   class="case-img" style="margin-right: 1px;" />
        <!-- <br>
        <h2>nowIndex {{nowIndex}}</h2> 
      -->
      </div>
    </section>
	</div>
</template>

<script>
import nowIndex1 from '../../assets/webchathome.jpg'
import nowIndex2 from '../../assets/webchatsale.jpg'
import nowIndex3 from '../../assets/webchatcategory.jpg'
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
 .first-show-content{ 
 	height: 100%; 
 	background:#FFFFFF; 
 } 

 .case-img { 
 	max-width: 100%; 
 	max-height: 100%; 
 }

</style>