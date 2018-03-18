<template>
  <div class="first-show-content">
    <section style="width: 100%;height: 100%; ">
      <!--    style="background: #37CFA2;" style="border:1px solid #f00;" -->
      <div class="programme-div" style="margin-right: 2px;">
        <!-- style="border:1px solid #f00;" -->
        <div>
          <ol>
           <!-- -->
           <li v-for="caseitem in cases" @click='changeItemImage(caseitem)' 
              style="cursor: pointer;text-decoration: underline">
              <h1>{{caseitem.name}}</h1>
            </li>
          </ol>
        </div>
        <!--<p>test word</p> -->
      </div>
      <!-- padding-top: 2px;padding-left: 2px;   style="background: #F9F0EB;"-->
      <div class="programme-div-img">
        <!--class="pic"  change img :src="nowIndex" to "../image/3.jpg"  height="300 px" width="90%"-->
        <img v-bind:src="nowIndex" class="case-img" style="margin-right: 1px;" />
        <!-- <br>
        <h2>nowIndex {{nowIndex}}</h2> 
      -->
      </div>
    </section>
  </div>
</template>
<script>
import nowIndex1 from '../../assets/decorationbedroomdesign.jpg'
import nowIndex2 from '../../assets/webchathome.jpg'
export default {
  components: {},
  mounted: function() {
    console.log(" come into mounted");
    this.nowIndex = this.pic[0];
    var _this = this;
    /*
    setInterval(function() {
      _this.i++;
      _this.nowIndex = _this.pic[_this.i];
      if (_this.i >= _this.pic.length - 1) {
        _this.i = 0;
      }
    }, 2000)
    */
  },

  data() {
    return {
      //pic:["../image/1.jpg","../image/2.jpg","../image/3.jpg"],
      //pic: [nowIndex1, nowIndex2, nowIndex3],
      i: "0",
      nowIndex: nowIndex1,
      cases: [
        { name: '集美家装', url: nowIndex1 },
        { name: '靓机汇', url: nowIndex2 }
      ],
    }
  },

    methods: {
    changeItemImage: function (item) {
      // `this` 在方法里指当前 Vue 实例
      //alert('Hello ' + this.name + '!')
      console.log("changeItemImage " + item.name + item.url );
      var _this = this;
      _this.nowIndex = item.url;
    }
  }
}

</script>
<style>
.first-show-content {
  height: 100%;
  background: #FFFFFF;
}

.case-img {
  max-width: 100%;
  max-height: 100%;
}

</style>
