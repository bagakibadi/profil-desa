<template>
<img :src="profile.logo" alt="">
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      profile: {}
    }
  },
  created () {
    axios.get(`${process.env.VUE_APP_API}profile`)
      .then((res) => {
        this.profile = res.data[0]
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
