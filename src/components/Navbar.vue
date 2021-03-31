<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white" id="nav">
      <a class="navbar-brand" href="/" data-aos="zoom-in">
        <img class="img-logo" id="logo-img" :src="profile.logo" alt="PrimaVillage">
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
            <a class="js-scroll-trigger mr-3" href="#home" data-translatable="" data-dom-i18n-id="i18n161525634233560.02850891091693">Home
            </a>
          </li>
          <li class="nav-item" data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
            <a class="js-scroll-trigger mr-3" href="#profildesa" data-translatable="" data-dom-i18n-id="i18n161525634233560.02850891091693">Profil Desa
            </a>
          </li>
          <li class="nav-item" data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
            <a class="js-scroll-trigger mr-3" href="#visimisi" data-translatable="" data-dom-i18n-id="i18n161525634233560.02850891091693">Visi Misi
            </a>
          </li>
          <li v-if="profile.struktur" class="nav-item" data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
            <a class="js-scroll-trigger mr-3" href="#struktur" data-translatable="" data-dom-i18n-id="i18n161525634233560.02850891091693">Struktur
            </a>
          </li>
          <li v-if="berita.length !== 0" class="nav-item" data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
            <a class="js-scroll-trigger mr-3" href="#berita" data-translatable="" data-dom-i18n-id="i18n161525634233560.02850891091693">Berita
            </a>
          </li>
          <li class="nav-item" data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
            <a class="js-scroll-trigger mr-3" :href="profile.link_portal" target="_blank" data-translatable="" data-dom-i18n-id="i18n161525634233560.02850891091693">Portal
            </a>
          </li>
        </ul>
      </div>
      <a data-v-af38669a="" :href="profile.admin" target="_blank" data-translatable="" data-aos="zoom-in" class="btn btn-nav btn-jejakin-white my-2 my-sm-0 d-sm-inline aos-init aos-animate"><span data-v-af38669a=""> Masuk <i data-v-af38669a="" class="fas fa-arrow-right"></i></span></a>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['profile', 'berita']
}
</script>

<style>
</style>
