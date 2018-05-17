import axios from 'axios'

export default {
  data () {
    return {
      list: []
    }
  },

  created () {
    this.getInfo()
  },

  watch: {
    search: {
      handler: 'getInfo',
      immediate: true // 表示创建组件时立马执行一次
    }
  },

  methods: {
    getInfo () {
      axios.get('http://47.95.225.58:3000/dyn/findnopub/1/1').then((res) => {
        console.log(res.data)
        this.list = res.data
        console.log(this.list)
      }).catch((error) => {
        console.log(error)
      })
    },
    // 进入详情页面
    gotoDetail (item) {
      this.$router.push({
        name: 'index.detail',
        params: {id: item}
      })
    }
  }
}
