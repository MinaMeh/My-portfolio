<template>
  <v-container class="window-size">
    <v-row no-gutters class="mt-2" justify="space-around">
      <v-col xs="12" sm="12" md="2" xl="2" class="skills">
        <span>
          <h1 class="text-center display-2">Skills</h1>
        </span>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-3" align="center">
      <v-col xs="12" sm="12" md="5" xl="5">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Data Analysis</h1>
            <v-chip
              class="ma-1"
              color="primary"
              v-for="(skill, index) in data_analyses"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="3" xl="3">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Machine Learning</h1>
            <v-chip
              class="ma-1"
              color="red"
              v-for="(skill, index) in machine_learning"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="4" xl="4">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Big Data</h1>
            <v-chip
              class="ma-1"
              color="green"
              v-for="(skill, index) in big_data"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="12" sm="12" md="5" xl="5">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Web Development</h1>
            <v-chip
              class="ma-1"
              color="purple"
              v-for="(skill, index) in frontend"
              :key="index"
            >{{skill}}</v-chip>
            <br />
            <v-chip
              class="ma-1"
              color="purple"
              v-for="(skill, index) in backend"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12" sm="12" md="3" xl="3">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Databases</h1>
            <v-chip
              class="ma-1"
              color="pink"
              v-for="(skill, index) in databases"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12" sm="12" md="2" xl="2" align-self="center">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Mobile Development</h1>
            <v-chip
              class="ma-1"
              color="deep-orange darken-4"
              v-for="(skill, index) in mobile"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="2" xl="2" align-self="center">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Operating Systems</h1>
            <v-chip
              class="ma-1 ml-3"
              color="brown darken-1"
              v-for="(skill, index) in os"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="12" sm="12" md="2" xl="2">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Devops</h1>
            <v-chip
              class="ma-1"
              color="red lighten-1"
              v-for="(skill, index) in devops"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="3" xl="3">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Tools</h1>
            <v-chip class="ma-1" color="teal" v-for="(skill, index) in tools" :key="index">{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="3" xl="3">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Project Management</h1>
            <v-chip
              class="ma-1"
              color="green darken-4"
              v-for="(skill, index) in project_management"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="4" xl="4">
        <v-card class="text-center ma-1">
          <v-card-text>
            <h1 class="title">Others</h1>
            <v-chip
              class="ma-1"
              color="indigo"
              v-for="(skill, index) in others"
              :key="index"
            >{{skill}}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data_analyses: [
        "Python",
        "R",
        "Numpy",
        "Pandas",
        "Matplotlob",
        "Seaborn"
      ],
      machine_learning: ["Python", "Sci-kit Learn", "Pytorch"],
      big_data: ["Python", "Scala", "Spark/PySpark", "Hive", "Hadoop"],
      frontend: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Bulma",
        "Javascript",
        "JQuery",
        "VueJs",
        "Vuetify"
      ],
      backend: ["PHP", "Laravel", "Django"],
      databases: [
        "MySQL",
        "NoSQL",
        "Oracle",
        "PostgreSQL",
        "PL/SQL",
        "MongoDB"
      ],
      mobile: ["Android Studio", "Kotlin"],
      os: ["Linux", "Windows"],
      devops: ["Docker", "Ansible", "Jenkins", "Make"],
      tools: ["Git/Github", "Microsoft Office", "Cisco Packet Tracer", "GNS3"],
      project_management: ["Ms Project", "Trello", "Scrum", "Gerrit", "Slack"],
      others: ["Java", "C", "Matlab", "Octave", "Bash", "VHDL", "Windev"]
    };
  }
};
</script>
<style>
.skills {
  border-bottom: 2px solid;
}
</style>