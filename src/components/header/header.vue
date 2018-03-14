<template>
  <div class="header-wrapper">
    <div class="header-center-wrapper">
      <div class="header-table-layout">
        <div class="logo-wrapper">
          <a class="logo-link">
            <span class="logo-content">
              <img src="../../../resource/img/logo.png" class="logo-img"/>
              <span>汉唐明创</span>
            </span>
          </a>
        </div>
        <nav class="menu-wrapper">
          <ul>
            <li class="menu-item-wrapper">
              <router-link to="/home">首页</router-link>
            </li>
            <li class="menu-item-wrapper" style="margin-left: 30px;">
              <router-link to="/solution">方案</router-link>
            </li>
            <li class="menu-item-wrapper" style="margin-left: 30px;">
              <router-link to="/cases">案例</router-link>
            </li>
            <li class="menu-item-wrapper" style="margin-left: 30px;">
              <router-link to="/about">关于</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus"
       rel="stylesheet/stylus">
  .header-wrapper
    position: absolute
    top: 0px
    width: 100%
    height: 80px
    z-index: 9200
    background-color: transparent;
    .header-center-wrapper
      padding: 0 40px
      margin: 0 auto
      .header-table-layout
        height: 80px
        display: table
        width: 100%
        .logo-wrapper
          display: table-cell
          vertical-align: middle
          max-width: 800px
          padding-top: 10px
          .logo-link
            display: table-cell
            max-height: 25px
            top: 0px
            left: 0px
            position: relative
            .logo-content
              display: inline-block
              position: relative
              font-size: 22px
              .logo-img
                height: 60px;
                width: 60px;
        .menu-wrapper
          text-align: right;
          max-width: 800px;
          display:table-cell;
          vertical-align: middle;
          .menu-item-wrapper
            display: inline-block;
            position: relative;
            z-index: auto;
            vertical-align: middle;
            margin-right: 30px;
            color: white
</style>
