<template>
  <div>
        <Navbar :profile="profile"/>

        <div class="container my-4">
            <div class="d-flex align-items-center justify-content-between bg-success linkatas">
                <div class="col-12">
                    <p class="text-white my-3">Berita  /  Desa  /  Desa  Contoh </p>
                </div>
            </div>
        </div>
        <div class="container my-4">
            <div class="row justify-content-between">
                <div class="col-md-9">
                    <div class="d-flex justify-content-start ">
                        <h3 class="text-green font-weight-bold">Lorem Ipsum</h3>
                    </div>
                    <div class="d-flex justify-content-start my-2">
                        <p>by Admin | 24 menit yang lalu </p>
                    </div>
                    <div class="d-flex justify-content-start my-2">
                        <facebook-button v-bind:isBlank="false" btnText/>
                        <twitter-button v-bind:isBlank="false" btnText/>
                        <whatsapp-button v-bind:isBlank="false" btnText/>
                    </div>
                    <div class="isi-berita">
                        <img src="/img/contoh.jpg" class="img-fluid">
                        <!-- <div class="d-flex my-4"> -->
                            <p class="text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
                            <p class="text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
                        <!-- </div> -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="mb-5">
                        <h4 class="text-green font-weight-bold">Cari Berita</h4>
                        <div class="form-group has-search">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Kata Kunci">
                        </div>
                    </div>
                    <div class="mb-3">
                        <h4 class="text-green font-weight-bold">Berita Terbaru</h4>
                        <hr/>
                        <div class="d-flex flex-column hover-card my-2" v-for="i in 3" :key="i.id">
                            <a href="#">
                                <div class="berita-img">
                                    <img src="/img/contoh.jpg" class="img-fluid">
                                </div>
                            </a>
                            <div class="">
                                <a href="#" class="font-weight-bolder">Berita Terkini Berita Terkini Berita Terkini Berita Terkini Berita Terkini</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer :profile="profile"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Footer,
    Navbar
  },
  computed: {
    ...mapState(['detailberita']),
    ...mapState(['profile'])
  },
  created () {
    this.$store.dispatch('getApi', {
      url: 'profile',
      mutation: 'GET_PROFILE'
    })
    this.$store.dispatch('getApi', {
      url: 'berita/' + this.$route.params.id,
      mutation: 'GET_D_BERITA'
    })
  }
}
</script>

<style>

</style>
