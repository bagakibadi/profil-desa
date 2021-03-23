<template>
    <div>
        <Navbar v-bind:profile="profile"/>
        <Header v-bind:profile="profile"/>
        <div id="countsection">
          <div class="action-section " id="profildesa" style="overflow: hidden" >
            <div class="container">
              <h1 class="font-weight-bold text-center mb-5" style="color: #076825 !important" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><span>
                  Profil Desa
                </span>
              </h1>
              <div class="row justify-content-center">
                <div class="col-md-6" data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                  <div class="row justify-content-between" >
                    <div class="col-md-4 img-profile">
                      <div class="d-flex justify-content-center">
                        <img src="#" style="overflow: hidden" v-if="!profile.logo" class="img-fluid rounded-circle" alt="">
                        <img @click="test" :src="profile.logo" v-else class="img-fluid rounded-circle" alt="Logo">
                      </div>
                    </div>
                    <div class="col-md-8" >
                      <h3 class="text-green font-weight-bold">{{profile.nama}}</h3>
                      <p v-if="profile.alamat">{{profile.alamat}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-delay="300" data-aos-duration="800">
                  <div class="row justify-content-between">
                    <div class="col-md-4 img-profile">
                      <div class="d-flex justify-content-center">
                        <img src="#" style="overflow: hidden" v-if="!profile.foto_kades" class="img-fluid rounded-circle" alt="">
                        <img :src="profile.foto_kades" v-else class="img-fluid rounded-circle" alt="Profile">
                      </div>
                    </div>
                    <div class="col-md-8">
                      <h3 class="text-green font-weight-bold">{{profile.nama_kades}}</h3>
                      <p class="m-0">{{profile.jabatan}}</p>
                      <p>{{profile.masa_jabatan}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="action-section" id="visimisi" style="overflow: hidden;" v-if="profile.visi || profile.misi">
            <div class="container">
              <h1 class="font-weight-bold text-center" style="color: #076825 !important" data-translatable="" data-dom-i18n-id="i18n1615256342335539.6009804439918" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><span>
                  Visi Misi Desa
                </span>
              </h1>

              <div class="row visi justify-content-center mt-5" v-if="profile.visi">
                <div class="col-md-12 align-items-center">
                  <h3 class="text-green font-weight-bold" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">VISI</h3>
                  <div v-html="profile.visi" class="visi" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800"></div>
                </div>
              </div>
            </div>

            <div class="container mt-5" v-if="profile.misi">

              <div class="row misi justify-content-center mt-4">
                <div class="col-md-12 align-items-center" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                  <h3 class="text-green font-weight-bold">Misi</h3>
                  <div class="misi" v-html="profile.misi"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="action-section " style="overflow: hidden" id="struktur" v-if="profile.struktur">
            <div class="container">
              <h1 class="font-weight-bold text-center mb-5" style="color: #076825 !important" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><span>
                  Struktur Organisasi
                </span>
              </h1>
              <div class="row">
                <div class="col-md-12">
                  <img :src="profile.struktur" class="img-struktur" alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                </div>
              </div>
            </div>
          </div>
          <div class="action-section" style="overflow: hidden" id="berita" v-if="berita.length !== 0">
            <div class="container">
              <h1 class="font-weight-bold text-center mb-5" style="color: #076825 !important" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800"><span>
                  Berita
                </span>
              </h1>
              <div class="row m-0">
                <div class="col-md-4" v-for="item in pageOfItems" :key="item.id" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="800">
                  <div class="cards">
                    <div class="penampungimg">
                      <a target="new" :href="'berita/' + item.id">
                        <img :src="item.featured_image" class="imgcontent">
                      </a>
                    </div>
                    <div class="dalemcards">
                      <a :href="'berita/'+ item.id" target="new">
                        <h1 id="juduld" class="juduldalam">{{item.judul}}</h1>
                      </a>
                      <p class="text-muted tanggal">{{item.dibuat}}</p>
                      <p class="sinopsiscard" v-html="item.isi_berita"></p>
                      <hr>
                      <div style="display: flex;">
                        <div class="icons">
                          <a @click="facebook(item.id)" target="_blank">
                            <div class="imgfb" title="">
                              <i class="fab fa-facebook-f"></i>
                            </div>
                          </a>
                          <a @click="twitter(item.id)" target="_blank">
                            <div class="imgtwit" title="">
                              <i class="fab fa-twitter"></i>
                            </div>
                          </a>
                          <a @click="copy(item.id)" id="copy" data-container="body" data-toggle="popover" data-placement="top" data-content="URL Copied">
                            <div class="imgcop" title="">
                              <i class="fa fa-link example-popover"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" col-md-12 pb-0 py-3 row justify-content-center">
                  <jw-pagination :items="berita" :pageSize=6 @changePage="onChangePage"></jw-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <Cta/> -->
        <Footer :profile="profile"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  props: {
    pageSize: {
      type: Number,
      default: 1
    }
  },
  name: 'Home',
  components: {
    Navbar,
    Header,
    Footer
    // Cta
  },
  data () {
    return {
      pageOfItems: []
    }
  },
  methods: {
    facebook (a) {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + a, '', 'width=400, height=500')
    },
    twitter (a) {
      window.open('https://twitter.com/intent/tweet?text=' + window.location.href + a, '', 'width=400, height=500')
    },
    test () {
    },
    copy (e) {
      const copy = document.createElement('input')
      copy.setAttribute('value', window.location.href + e)
      document.body.appendChild(copy)
      copy.select()
      document.execCommand('copy')
      document.body.removeChild(copy)
      const copys = document.getElementById('copy')
      copys.setAttribute('title', 'Copy')
    },
    onChangePage (pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
    }
  },
  computed: {
    ...mapState(['profile']),
    ...mapState(['berita'])
  },
  created () {
    setTimeout(() => {
      const div = document.getElementById('countsection')
      const mod = div.getElementsByClassName('action-section')
      for (var i = 0; i < mod.length; i++) {
        if (i % 2) {
          mod[i].style.backgroundColor = 'rgb(241, 246, 246)'
        } else {
          mod[i].style.backgroundColor = '#FFFFFF'
        }
      }
    }, 500)
  },
  beforeCreate () {
    this.$store.dispatch('getApi', {
      url: 'profile',
      mutation: 'GET_PROFILE'
    })
    this.$store.dispatch('getApi', {
      url: 'berita',
      mutation: 'GET_BERITA'
    })
  },
  metaInfo: {
    title: 'Profile Desa ' + window.location.host.split('.')[0]
  }
}
</script>

<style scoped>
  .visi p {
    text-align: justify;
    text-indent: 45px;
  }
  .misi p {
    text-align: justify;
    text-indent: 45px;
  }
  .misi ol, .misi ul {
    padding: 0 0 0 50px;
  }
  .imgfb{
    cursor: pointer;
  }
  .imgfb i{
    color: #3C5A99;
    margin: 0 5px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgtwit {
    cursor: pointer;
  }
  .imgtwit i{
    color: #1da1f2;
    margin: 0 5px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgcop {
    cursor: pointer;
  }
  .imgcop i{
    color: rgb(85, 85, 85);
    margin: 0 5px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-struktur{
    width: 100%;
  }
  a{
    text-decoration: none !important;
  }
  .cards{
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.122);
    border-radius: 10px;
    height:420px;
    width: 100%;
    margin:20px 0px;
    background: white;
  }
  .penampungimg{
    width: 100%;
    height: 193px;
    overflow: hidden;
  }
  .imgcontent{
    width: 100%;
    height: 193px;
    object-fit: cover;
    transition: all 1s;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .imgcontent:hover{
    transform: scale(1.2);
  }
  .dalemcards{
    padding: 12px 20px 0 20px;
    width: 100%;
  }
  .tanggal {
    font-size: 14px;
    margin: 0;
    font-family: 'SecondFont';
  }
  .juduldalam{
    color: #435177;
    font-size: 23px;
    width: 100%;
    height: auto;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: 'myFirstFont';
    /* font-weight: semibol; */
  }
  .sinopsiscard{
    /* box-sizing: /; */
    width: 260px;
    height: 63px;
    overflow: hidden;
    font-size: 14px;
    font-family: 'SecondFont';
    margin: 15px 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .icons{
    display: flex;
  }
  .icons div{
    margin-bottom: 0 20px 0 0;
  }
.img-fluid{
  width: 145px;
  height: 145px !important;
  object-fit: contain;
  border: 5px solid #d2d2d2;
}
@media only screen and (max-width: 600px) {
  .img-profile{
    margin-bottom: 30px;
  }
  .visi{
    flex-direction: column-reverse;
  }
  .misi{
    flex-direction: row-reverse;
  }
}
#visimisi ol li, #visimisi p {
  color: #076825;
}
</style>
