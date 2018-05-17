<template>
  <div id="indexDetail">
    <header>
      <span @click=" backto">
        <Icon
          class="icon"
          type="ios-arrow-left"
          >
        </Icon>
      </span>

      <h2 class="title">{{ searchInfoList.title }}</h2>
    </header>

    <article>
      <p>{{ searchInfoList.contents }}</p>
    </article>
  </div>
</template>

<style lang="scss" scope>
#indexDetail{
  header{
    height:60px;
    background-color: #1f2126;
    color:#fafafa;
    .icon{
      float:left;
      margin:20px;
      font-size:18px;
    }
    h2.title{
      line-height:60px;
      // float:left;
    }
  }
  article{

  }
}
</style>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      searchInfoList: [],
      detailId: this.$route.params.id
    }
  },
  created: function () {
    this.getDetailInfoById()
  },
  methods: {
    getDetailInfoById () {
      axios.get(`http://47.95.225.58:3000/dyn/findById/${this.detailId}`).then((res) => {
        console.log(res.data[0].contents)
        res.data[0].contents = res.data[0].contents.replace(/<p>/g, '')
        res.data[0].contents = res.data[0].contents.replace(/<\/p>/g, '')
        this.searchInfoList = res.data[0]
        console.log(this.searchInfoList)
      }).catch((error) => {
        console.log(error)
      })
    },
    // 返回
    backto () {
      // alert()
      this.$router.go(-1)
    }
  }
}
</script>
