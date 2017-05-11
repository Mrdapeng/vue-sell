<template>
  <div id="app">
    <!--v-bind简写成：xxx-->
    <v-header :seller="seller"></v-header>
    <div class="tab boder-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>

      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>

      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  export default{
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
    },
    created () {
      const ERRO_OK = 0;
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
//        console.log(res);
        /*在dev—server的地方定义ajax异步请求的对象
        * res.body拿到的是正确的返回值
        * */
        if (res.errno === ERRO_OK) {
            this.seller=res.data;
            console.log(this.seller);
        }

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./coomon/stylus/mixin.styl"
  /*三等分布局 flex布局*/
  /*postcsss是解决浏览器兼容性标签的*/
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)

  // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  /*可被继承的元素放在后面，重绘不会影响重排*/
</style>
