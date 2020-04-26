<template>
  <v-container>
    <v-row no-gutters class="mt-2" justify="space-around">
      <v-col xs="12" sm="12" md="3" xl="3" class="skills">
        <span>
          <h1 class="text-center display-2">Experience</h1>
        </span>
      </v-col>
    </v-row>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="exp in experiences"
        :key="exp.title"
        :color="exp.color"
        fill-dot
        :right="exp.right"
        :left="exp.left"
      >
        <v-card>
          <v-card-title :class="exp.color">
            <v-row no-gutters>
              <v-col cols="1">
                <v-icon dark size="40" class="mr-4">mdi-account</v-icon>
              </v-col>
              <v-col cols="11">
                <h2 class="display-1 white--text font-weight-light">{{exp.title}}</h2>
              </v-col>
              <v-col cols="1" justify="left">
                <v-icon dark size="30" class="mr-4">mdi-calendar-text</v-icon>
              </v-col>
              <v-col cols="11" align-self="center">
                <h3 class="subtitle font-weight-light">{{exp.date}}</h3>
              </v-col>
              <v-col cols="1" align="left">
                <v-icon dark size="30" class="mr-4">mdi-home-modern</v-icon>
              </v-col>
              <v-col cols="11" align-self="center">
                <h3 class="subtitle font-weight-light">{{exp.where}}</h3>
              </v-col>
            </v-row>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <ul>
                  <li v-for="task in exp.tasks" :key="task">{{task}}</li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "Fullstack Developper",
          where: "Innovia Business Solutions",
          date: "Jan 2010 -Now",
          tasks: [
            "Mobile Applications Developper(01/2020)",
            "DevOps Engineer at Intersec Group (02/2020-Now)"
          ],
          color: "red lighten-1",
          right: true,
          left: false
        },
        {
          title: "Internship",
          where: " LMCS Laboratory-ESI- ",
          date: "Sep 2019- Now",
          tasks: [
            "Design and implementation of an approach to transform web open data to linked data"
          ],
          color: "green lighten-1",
          right: false,
          left: true
        },
        {
          title: "Member",
          where: " Shellmates Club",
          date: "Sep 2017- Feb 2020",
          tasks: [
            "vice-President (Sep 2018 - Oct 2019)",
            "Community Manager (Jan 2018-Jan 2020)",
            "Active Member (Sep 2017– Feb 2020)"
          ],
          color: "indigo lighten-1",
          right: true,
          left: false
        },
        {
          title: "Internship",
          where: " ELIT (EL Djazair Information Technology)",
          date: "Sep 2018-Oct 2018",
          tasks: [
            " Developping, deploying and securing a web application that automates annual audit planning"
          ],
          color: "blue lighten-1",
          right: false,
          left: true
        },
        {
          title: "Co-founder / Mobile Developper",
          where: " WashIT",
          date: "Nov 2017-Jun 2018",
          tasks: [
            " WashIt is an Algerian company that was created as a part of Injaz el Djazair Company Program. It was founded by students from ESI EX-INI on early 2018. WashIt is a washing/delivery service that is assured by a mobile application that also provides the possibility of tracking the laundry in real time and many other options."
          ],
          color: "teal lighten-1",
          right: true,
          left: false
        },
        {
          title: "Internship",
          where: " Sonatrach -Exploration Division-",
          date: "Jul 2016-Aug 2016",
          tasks: ["Discovering the company's IT Service departements"],
          color: "pink lighten-1",
          right: false,
          left: true
        }
      ]
    };
  }
};
</script>