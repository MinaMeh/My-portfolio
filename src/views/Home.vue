<template>
  <v-container>
    <v-layout row wrap align-content-space-around>
      <v-col cols="12" sm="12" md="6" xl="6" class="mt-4" align="center">
        <img class="pic" src="/images/pc.jpeg" alt />
      </v-col>
      <v-flex xs12 sm12 md6 xl6 class="mt-4" align-self-center>
        <v-card flat>
          <v-card-text class="headline font-weight-light text-center">
            <p>Computer Science Engineer graduated from Ecole Supérieure d'Informatique (ESI-Algiers) and Python Engineer at Data Impact.</p>
            <p>Passionate about all what concerns computer science, always seeking knowledge and learning new things.</p>
          </v-card-text>
        </v-card>
        <v-col cols="12" align-self="center" class="text-center">
          <a href="mailto: fa_meherhera@esi.dz">
            <v-avatar class="ma-3" size="50">
              <img src="/images/social/gmail.png" alt="alt" />
            </v-avatar>
          </a>

          <a target="__" href="https://www.linkedin.com/in/amina-meherhera-b63323135/">
            <v-avatar class="ma-3" size="50">
              <img src="/images/social/linkedin.png" alt="alt" />
            </v-avatar>
          </a>
          <a target="__" href="https://github.com/MinaMeh">
            <v-avatar class="ma-3" size="50">
              <img src="/images/social/github.png" alt="alt" />
            </v-avatar>
          </a>
          <a target="__" href="https://www.youracclaim.com/users/amina-meherhera/">
            <v-avatar class="ma-3" size="50">
              <img src="/images/social/acclaim.jpg" alt="alt" />
            </v-avatar>
          </a>
          <a target="__" href="https://drive.google.com/open?id=1JwTy8L9T0uNA8we3tUYLwo1JlNCub3Qw">
            <v-avatar class="ma-3" size="50">
              <img src="/images/social/cv.png" alt="alt" />
            </v-avatar>
          </a>
        </v-col>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style>
.pic {
  height: 80vh;
}
</style>