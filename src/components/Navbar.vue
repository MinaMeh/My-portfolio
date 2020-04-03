<template>
  <nav>
    <v-app-bar app>
      <v-avatar size="50">
        <img src="/me.jpg" alt />
      </v-avatar>
      <v-toolbar-title class="ma-4">Amina Meherhera</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey lighten-2" @click="$vuetify.goTo('#home')">Home</v-btn>
      <v-btn text color="grey lighten-2" @click="$vuetify.goTo('#skills')">Skills</v-btn>
      <v-btn text color="grey lighten-2" @click="$vuetify.goTo('#projects')">Projects</v-btn>
      <v-btn text color="grey lighten-2" @click="$vuetify.goTo('#experience')">Experience</v-btn>
      <v-btn text color="grey lighten-2" @click="$vuetify.goTo('#certifications')">Certifications</v-btn>
      <v-btn text color="grey lighten-2" @click="$vuetify.goTo('#contact')">Contact me</v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>