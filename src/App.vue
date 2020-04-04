<template>
  <v-app>
    <Navbar />
    <v-content transition="slide-x-transition">
      <Home id="home"></Home>
      <Skills id="skills"></Skills>
      <Projects id="projects"></Projects>
      <Experience id="experience"></Experience>
      <Certifications id="certifications"></Certifications>
      <Contact id="contact"></Contact>
      <v-footer class="mt-5">
        <v-col
          class="text-center font-weight-light"
          cols="12"
        >Made by MEHERHERA Amina — using Vuejs and Vuetify &copy; 2020</v-col>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

import Home from "@/views/Home";
import Skills from "@/views/Skills";
import Projects from "@/views/Projects";
import Experience from "@/views/Experience";
import Certifications from "@/views/Certifications";
import Contact from "@/views/Contact";

export default {
  name: "App",

  components: {
    Navbar,
    Home,
    Skills,
    Projects,
    Experience,
    Certifications,
    Contact
  },

  data: () => ({
    //
  })
};
</script>
