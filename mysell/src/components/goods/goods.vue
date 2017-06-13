<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
            <span class="text">
                  <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
            </span>
        </li>

      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-list" ref="foodList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for=" food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="food-icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span>￥{{food.price}}</span>
                  <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  const ERR_OK = 0;
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        goods: []
      };
    },
    created(){
      /*显示那些小iocn图标 */
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      /*去json里面goods的数据*/
      this.$http.get('api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          //看返回的goods数据
//          console.log(this.goods);
        }
      });
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../coomon/stylus/mixin.styl"
  .goods
    display: flex
    position: absolute;
    width: 100%
    top: 174px
    bottom: 46px
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        width: 56px
        height: 54px
        padding: 0 12px
        line-height: 14px
      .icon
        display: inline-block
        vertical-align: top
        width: 12px
        height: 12px
        margin-right: 2px
        background-size: 12px 12px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
      .text
        display: table-cell
        vertical-align: middle
        width: 56px
        border-1px: (rgba(7, 17, 27, 0.1))
        font-size: 10px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        background: #f3f5f7
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
        padding-bottom:18px
      .food-item
        display: flex
        margin: 18px
        border-1px: (rgba(7, 17, 27, 0.1))
        padding-bottom: 8px
        &:last-child
          border-none()
          margin-bottom:0
        .icon
          flex:0 0 57px
          margin-right: 10px
        .content
          flex:1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            color: rgb(7,17,27)



</style>
