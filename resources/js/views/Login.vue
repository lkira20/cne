<template>
<div class="" id="wraper" style="height:100%;">
    <div class="row align-items-center mx-3" style="height:100%;">
        <div class="col-md-6" id="texto">
            <div class="">
              <h1 class="">Bienvenido al sistema de control y seguimiento de documentos de registro civil del CNE.</h1>
            </div>
            
        </div>
        <div class="col-md-6">
          <div class="alert alert-danger" v-if="error">
            <p>{{error}}</p>
          </div>
            <div class="card shadow" id="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                  <form autocomplete="off" @submit.prevent="login" method="post">
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" required autofocus placeholder="user@example.com" v-model="email">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña</label>
                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required v-model="password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                              <button type="submit" class="btn btn-primary">Entrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$store.dispatch("pedirUsuario")
          this.$store.dispatch("pedirPermisos")
          this.$router.push({ name: "inicio" });
        })
        .catch(error => {
          this.error = error.response.data;
        });
    }
  }
};
</script>

<style type="text/css" >
  #wraper{
    background-image: url("../../../public/img/electoral.jpg");
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
  }

  #wraper:before {
  content:'';
  position: absolute;
        top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
}

  #card{
    background-color: rgba(255,255,255,0.9);
  }

  #wraper h1 {
  font-size: 40px;
  color: #fff;
  position: relative
}

  
</style>