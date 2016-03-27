<template>

  <a :href="href" class="item area">
    <img class="item-img area" :src="item.image" :alt="item.title" />
    <div class="right-area">
        <h3 class="item-title area">{{item.title}}</h3>
        <div class="count visit-count"><span>阅读</span>{{item.visitcount}}</div> 
        <div class="count share-count"><span>分享</span>{{item.sharecount}}</div> 
        <div class="count like-count"><span>喜欢</span>{{item.like}}</div> 
    </div>
  </a>

</template>

<style lang="sass">

  @import "../assets/scss/_variables";

  .item-wrapper {
        padding-bottom: .1rem;
    }
    .item {
        width: 100%;
        text-align: left;
        border-bottom: 1px solid #ddd;
        font-size: 0; /* remove inline-block gap */
        letter-spacing: -.04rem; /* remove inline-block gap */
    }
    .item-img {
        width: 30%;
        margin-right: .05rem;
        height: $ms-topN-img-height; /* topN & list img height */
    }
    .right-area {
        width: 64%;
        display: inline-block;
        vertical-align: top;
        margin-left: .03rem;
        overflow: hidden;
        letter-spacing: 0;
        max-height: .6rem; /* for too much number, even all more than 10000 */
    }
    .created-time {
        font-size: .12rem;
        color: $created-time-color;
    }
    .item-title {
        width: 98%;
        font-size: .16rem;
        line-height: 1.35;
        height: .45rem;
        color: $item-title-color;
        overflow: hidden;
        text-align: justify;
    }

    .icon { /* icon-more */
        display: inline-block;
        vertical-align: middle;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        top: -.01rem;
    }

    .icon-share {
        background-image: url(#{$img-dir}/iconfont-share.png);
    }

    .icon-people {
        background-image: url(#{$img-dir}/iconfont-yuedu.png);
    } 

</style>

<script> 

  export default {

    name: 'Item',

    props: {
      item: Object 
    }

  }

</script>
