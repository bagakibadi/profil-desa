<template>
  <div class="row m-0 justify-content-center align-items-center" style="min-height: 100vh;">
     <div class="col-md-7">
      <div class="card shadow p-0" style="overflow: hidden;">
         <div class="">
            <div class="row">
               <div class="col-md-6 p-4">
                  <div class="py-1 px-3">
                     <h2 class="font-bold text-uppercase" style="font-weight: bold;margin-bottom: 0;">MASUK</h2>
                     <div class="mb10">
                        <small>Masuk ke akun anda</small>
                     </div>
                     <form action="">
                        <div class="form-group">
                           <label for="username">Username</label>
                           <input type="text" name="username" id="username" class="form-control">
                        </div>
                        <div class="form-group">
                           <label for="katasandi">Kata Sandi</label>
                           <input type="password" name="katasandi" id="katasandi" class="form-control">
                        </div>
                        <div class="form-group mb-0">
                           <button class="btn btn-success" style="color: white;">Masuk</button>
                        </div>
                     </form>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="box-right">
                     <a href="/">
                        <img src="/img/klego.png" class="w-100 h-100" alt="">
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
   color:#121212;
}
.mb10{
   margin-bottom: 10px;
}
small{
   font-weight: 400;
   font-size: smaller;
}
.form-group label{
   display: inline-block;
   margin-bottom: 8px;
   letter-spacing: -0.02em;
   line-height: 130%;
   color: #565656;
   font-size: 18px;
   font-weight: 600;
}
.form-control:focus {
   border: 1px solid #3BA749 !important;
   box-shadow: 0 0 0 0.2rem rgba(59, 167, 73, 0.25) !important;
}
.box-right{
   background: #EBF6ED;
   height: 100%;
}
</style>
