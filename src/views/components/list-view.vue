<template>

  <div class="item-wrapper" v-if="lists.length">
    <a v-link="" class="item area" v-for="item in lists">
        <img class="item-img area" :src="illy_resource_base + item.image+ '?imageView2/1/w/180/h/160/interlace/1'" :alt="item.title" />
        <div class="right-area">
            <div class="created-time">{{item.created | date}}</div>
            <h3 class="item-title area">{{item.title}}</h3>
            <div class="count visit-count"><span>阅读</span>{{item.visitCount}}</div> 
            <div class="count share-count"><span>分享</span>{{item.shareCount}}</div> 
            <div class="count like-count"><span>喜欢</span>{{item.like}}</div> 
        </div>
     </a>
  </div>

</template>

<style lang="sass">

  @import "./a.scss";

  .item-wrapper {
    width: 100%;
    height: $ms-height;
    background-color: red;
  }

</style>

<script> 

  import lists from '../../services/getLists'

  export default {
    data () {
      return {
        lists: lists.data
      }
    }
  }

</script>
