<template>
  <nav>
    <v-app-bar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>

      <v-avatar size="50">
        <img src="/images/me.jpg" alt />
      </v-avatar>
      <v-toolbar-title class="ma-4">Amina Meherhera</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="hidden-sm-and-down"
        text
        color="grey lighten-2"
        @click="$vuetify.goTo('#home')"
      >Home</v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        color="grey lighten-2"
        @click="$vuetify.goTo('#skills')"
      >Skills</v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        color="grey lighten-2"
        @click="$vuetify.goTo('#projects')"
      >Projects</v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        color="grey lighten-2"
        @click="$vuetify.goTo('#experience')"
      >Experience</v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        color="grey lighten-2"
        @click="$vuetify.goTo('#certifications')"
      >Certifications</v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        color="grey lighten-2"
        @click="$vuetify.goTo('#contact')"
      >Contact me</v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item @click="$vuetify.goTo('#home')">
          <v-list-item-content>Home</v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#skills')">
          <v-list-item-content>Skills</v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#projects')">
          <v-list-item-content>Projects</v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#experience')">
          <v-list-item-content>Experience</v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#certifications')">
          <v-list-item-content>Certifications</v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#contact')">
          <v-list-item-content>Contact Me</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      sidebar: false
    };
  }
};
</script>