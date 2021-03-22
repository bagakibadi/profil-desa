<template>
  <div style="padding-top: 80px">
        <Navbar :profile="profile"/>
    <div class="container my-4" v-if="detailberita[0]">
        <div class="card shadow">
            <div class="card-body">
                <div class="container my-4">
                    <div class="d-flex align-items-center justify-content-between bg-success linkatas">
                        <div class="col-12">
                            <p class="text-white my-3"><a href="/#berita" class="text-white"> <i class="fa fa-home text-white"></i> Home</a> / {{detailberita[0].judul}}</p>
                        </div>
                    </div>
                </div>
                <div class="container my-4">
                    <div class="row justify-content-between">
                        <div class="col-md-9" >
                            <div class="d-flex justify-content-start ">
                                <h3 class="text-green font-weight-bold">{{detailberita[0].judul}}</h3>
                            </div>
                            <div class="d-flex justify-content-start my-2">
                                <p>by {{detailberita[0].author.name}} | {{detailberita[0].dibuat}} </p>
                            </div>
                            <div class="d-flex justify-content-start my-2">
                                <!-- <facebook-button v-bind:isBlank="false" btnText/>
                                <twitter-button v-bind:isBlank="false" btnText/>
                                <whatsapp-button v-bind:isBlank="false" btnText/> -->
                            </div>
                            <div class="isi-berita">
                                <img :src="detailberita[0].featured_image" class="img-fluid mb-3">
                                <!-- <div class="d-flex my-4"> -->
                                    <p class="text-justify indent" v-html="detailberita[0].isi_berita"></p>
                                    <!-- <p class="text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
                                    <p class="text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p> -->
                                <!-- </div> -->
                            </div>
                        </div>
                        <div class="col-md-3" style="border-left: 1px solid #ddd">
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
                                <div class="d-flex flex-column hover-card my-2" v-for="item in berita" :key="item.id">
                                    <a :href="'/berita/' + item.id">
                                        <div class="berita-img">
                                            <img :src="item.featured_image" class="img-fluid">
                                        </div>
                                    </a>
                                    <div class="">
                                        <a href="#" class="font-weight-bolder contentnye" v-html="item.isi_berita">
                                            <!-- <p ></p> -->
                                        </a>
                                    </div>
                                </div>
                            </div>
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
    ...mapState(['berita']),
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
    this.$store.dispatch('getApi', {
      url: 'berita/',
      mutation: 'GET_BERITA'
    })
  }
}
</script>

<style scoped>
.contentnye{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.isi-berita img{
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .isi-berita p {
        text-indent: 45px;
        font-size: 18px;
        color: #333333;
    }
    .linkatas {
        border-radius: 10px;
    }
    .has-search .form-control {
    padding-left: 2.375rem;
    }
    .berita-img{
        width: 100%;
        max-height: 150px;
        min-height: 150px;
        margin-bottom: 5px;
        border-radius: 5px;
        overflow: hidden;
    }
    .berita-img img{
        transition: .3s;
    }
    .hover-card a{
        color: #076825;
        text-decoration: none;
        font-size: 18px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .hover-card:hover > a .berita-img img{
        transform: scale(1.1);
    }
    .hover-card:hover > div a p{
        color: #1E88E5;
        text-decoration: none;
    }
    a{
        text-decoration: none;
        text-decoration-color: red;
    }
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
@import url('/assets/css/style.css');
</style>
