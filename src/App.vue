<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdateUI = true
      })
    }
  },
  method: {
    async accept () {
      this.showUpdateUI = false
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
    }
  }
}
</script>

<style>
*{
  color: #121212;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#nav {
  padding: 0px 30px;
}
.font-weight-bold span{
  color: rgb(7, 104, 37) !important;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.item-title span, .item-desc span, .content-desc span{
  color: rgb(7, 104, 37);
}
#nav a.router-link-exact-active {
  color: #42b983;
}
* {
  color:#121212;
}
#visimisi p, #visimisi ol li{
  color: rgb(7, 104, 37);
}
#visimisi p {
  text-indent: 45px;
}
#visimisi ol {
  padding: 0 0 0 50px;
}
</style>
