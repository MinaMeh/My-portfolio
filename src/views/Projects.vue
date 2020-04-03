<template>
  <v-container>
    <v-row no-gutters class="mt-2" justify="space-around">
      <v-col xs="12" sm="12" md="2" xl="2" class="skills">
        <span>
          <h1 class="text-center display-2">Projects</h1>
        </span>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col
        align-self="stretch"
        xs="12"
        sm="12"
        md="6"
        xl="6"
        v-for="(project, item) in projects"
        :key="item"
      >
        <v-card class="text-center" height="100%">
          <v-card-text>
            <v-carousel height="400" continuous cycle interval="3000">
              <v-carousel-item
                v-for="(item,i) in project.items"
                :key="i"
                :src="item"
                :href="item"
                target="__"
                class="fit"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
            <v-col align="stretch">
              <h2 class="mt-4">{{project.title}}</h2>
              <p class="mt-2">{{project.description}}</p>
              <v-chip
                :color="project.color"
                class="ma-1"
                v-for="tech in project.technologies"
                :key="tech"
              >{{tech}}</v-chip>
            </v-col>
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
      projects: [
        {
          title: "My Pharma",
          description:
            "An android mobile application for pharmacies customers which allow to display pharmacies by city, the details of a pharmacy, the nearest pharmacies on a map. It also makes it possible to launch an order and follow the processing status of the order",
          technologies: ["Kotlin", "NodeJs"],
          color: "green accent-2",
          items: [
            "/pharma/1-1.png",
            "/pharma/3.png",
            "/pharma/4.png",
            "/pharma/5.png",
            "/pharma/6.png",
            "/pharma/7.png"
          ]
        },
        {
          title: "SYNTECH",
          description:
            "A minimal Linux distribution for terminals having minimum of resources (RAM, CPU, disk space). It only needs 100MB of RAM and about 3GB of disk space. It also comes with installed communication packages (Telnet, SSH, RDP)",
          technologies: ["LiveBuild", "LFS"],
          color: "blue",
          items: ["/syntech/1.png", "/syntech/2.png"]
        },
        {
          title: "Knaspack",
          description:
            "A Desktop application to resolve the knapsack problem with exact methods, heuristics and meta-heuristics",
          technologies: ["Python", "PyQt5"],
          color: "purple darken-4",
          items: ["/knapsack/1.png", "/knapsack/2.png", "/knapsack/3.png"]
        },
        {
          title: "Artic",
          description:
            "A Desktop application to detect the articulation point in a graph",
          technologies: ["JAVA", "JavaFX"],
          color: "deep-orange accent-4",
          items: [
            "/articulation/1.png",
            "/articulation/2.png",
            "/articulation/3.png"
          ]
        },
        {
          title: "AUDIT",
          description:
            "A web application for to automate the  management of annual audit planning for Systems and Data Security  Department at ELIT (EL Djazair Information Technology) ",
          technologies: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JQUERY",
            "Laravel",
            "MySQL"
          ],
          color: "success",
          items: [
            "/elit/1-1.png",
            "/elit/2.png",
            "/elit/4.png",
            "/elit/5.png",
            "/elit/6.png",
            "/elit/7.png",
            "/elit/8.png",
            "/elit/9.png",
            "/elit/10.png",
            "/elit/11.png"
          ]
        },
        {
          title: "WashIT",
          description:
            "An app forwashing/delivery service that also provides the possibility of tracking the laundry in real time and many other options.",
          technologies: ["JAVA", "Firebase"],
          color: "cyan accent-4",
          items: ["/washit/1.jpg", "/washit/2.jpg"]
        },
        {
          title: "BoostResto",
          description:
            "Une application de gestion des restaurants qui permet la gestion de la cuisine, des menus et plats, de stock et éventuellemnt générer les statistique",
          technologies: ["Windev"],
          color: "blue",
          items: [
            "/boostresto/1.png",
            "/boostresto/2.png",
            "/boostresto/3.png",

            "/boostresto/4.png",
            "/boostresto/5.png",
            "/boostresto/6.png",
            "/boostresto/7.png",
            "/boostresto/8.png",
            "/boostresto/9.png",
            "/boostresto/10.png",
            "/boostresto/11.png",
            "/boostresto/12.png",
            "/boostresto/13.png"
          ]
        },
        {
          title: "Secret Diary",
          description: "A web application to save your daily diaries ",
          technologies: ["HTML", "CSS", "Bootstrap", "JQUERY", "PHP", "MySQL"],
          color: "success",
          items: ["/diary/1.png", "/diary/2.png"]
        },
        {
          title: "Weather Scraper",
          description: "A web application to get the weather of  a given town ",
          technologies: ["HTML", "CSS", "Bootstrap", "JQUERY", "PHP", "MySQL"],
          color: "success",
          items: ["/boostresto/1.png", "/boostresto/2.png", "/boostresto/3.png"]
        },
        {
          title: "Lanscape Pages",
          description: "A lanscape page of a mobile application presentation  ",
          technologies: ["HTML", "CSS", "Bootstrap", "JQUERY", "PHP", "MySQL"],
          color: "blue",
          items: ["/weather/1.png", "/weather/2.png"]
        },
        {
          title: "Pendu",
          description:
            "Un jeu de mot desktop dans lequel vous allez devoir découvrir un mot de 7 à 11 lettres d'après une indication qui est son synonyme, antomyme ou définition . ",
          technologies: ["JAVA", "JavaFX"],
          color: "purple",
          items: ["/pendu/1.png"]
        }
      ]
    };
  }
};
</script>
<style>
.aligned-p {
  margin: auto;
}
.fit {
  height: "200";
}
</style>