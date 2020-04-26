<template>
  <v-container>
    <v-row no-gutters class="mt-2" justify="space-around">
      <v-col xs="12" sm="12" md="3" xl="3" class="skills">
        <span>
          <h1 class="text-center display-2">Certifications</h1>
        </span>
      </v-col>
    </v-row>

    <v-timeline dense>
      <v-timeline-item large v-for="cert in certifications" :key="cert.date">
        <template v-slot:icon>
          <v-avatar>
            <img :src="cert.logo" />
          </v-avatar>
        </template>
        <v-card class="elevation-2">
          <v-card-title>
            <h1 class="headline">{{cert.title}}</h1>
            <a :href="cert.link" class="ml-3" target="__">See certificate</a>
          </v-card-title>
          <v-card-text>
            <v-icon>mdi-calendar-text</v-icon>
            {{cert.date}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      certifications: [
        {
          title: "Continuous Delivery Using Docker And Ansible -Pluralsight- ",
          date: "(04/2020)",
          logo: "/cert/pluralsight.jpg",
          link:
            "https://app.pluralsight.com/learner/user/courses/docker-ansible-continuous-delivery/certificate"
        },
        {
          title: "Getting Started with Ansible  -Pluralsight- ",
          date: "(04/2020)",
          logo: "/cert/pluralsight.jpg",
          link:
            "https://app.pluralsight.com/learner/user/courses/getting-started-ansible/certificate"
        },
        {
          title: "Master VI/VIM Linux Command Line Text Editor -Udemy-",
          date: "(04/2020)",
          logo: "/cert/udemy.png",
          link:
            "https://www.udemy.com/certificate/UC-ff06cfa3-f822-4915-9015-8abf594a849d/"
        },
        {
          title: "AI Programming with Python Nanodegree -Udacity-",
          date: "(01/2020-03/2020)",
          logo: "/cert/udacity.jpg",
          link: "https://graduation.udacity.com/confirm/LAMKEM74"
        },
        {
          title: "Apache PySpark by Example -Lynda.com-",
          date: "(12/2019)",
          logo: "/cert/lynda.jpg",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Learning Amazone SageMaker -Lynda.com-",
          date: "(12/2019)",
          logo: "/cert/lynda.jpg",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "AWS Machine Learning by Example -Lynda.com-",
          date: "(12/2019)",
          logo: "/cert/lynda.jpg",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Data Science with Scala -Cognitive Class (IBM)-",
          date: "(12/2019)",
          logo: "/cert/cc.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Spark Overview for Scala Analytics -Cognitive Class (IBM)-",
          date: "(12/2019)",
          logo: "/cert/cc.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Scala 101 -Cognitive Class (IBM)-",
          date: "(12/2019)",
          logo: "/cert/cc.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Intro to Deep learning with PyTorch -Udacity-",
          date: "(11/2019-12/2019)",
          logo: "/cert/udacity.jpg",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Spark Fundamentals I-Cognitive Class (IBM)-",
          date: "(12/2019)",
          logo: "/cert/cc.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Hadoop 101 -Cognitive Class (IBM)-",
          date: "(11/2019)",
          logo: "/cert/cc.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title:
            "Docker Essentials: A Developer Introduction-Cognitive Class (IBM)-",
          date: "(11/2019)",
          logo: "/cert/cc.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Big Data 101-Cognitive Class (IBM)-",
          date: "(11/2019)",
          logo: "/cert/cc.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Python for Data Science Bootcamp -Udemy-",
          date: "(10/2019)",
          logo: "/cert/udemy.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Data Analysis with Pandas and Python -Udemy-",
          date: "(09/2019-10/2019)",
          logo: "/cert/udemy.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Machine Learning -Coursera- ",
          date: "(07/2019- 09/2019)",
          logo: "/cert/coursera.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Laravel 5 from scratch -Laracasts- ",
          date: "(09/2018)",
          logo: "/cert/laracasts.jpeg",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "The complete python 3 Course -Udemy- ",
          date: "(08/2018 -09/2018)",
          logo: "/cert/udemy.png",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "SoloLearn-PHP ",
          date: "(08/2018 -09/2018)",
          logo: "/cert/sololearn.jpeg",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "SoloLearn-Python ",
          date: "(07/2018 -08/2018)",
          logo: "/cert/sololearn.jpeg",
          link:
            "https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"
        },
        {
          title: "Fullstack Web Developper - Udemy-)",
          date: "(07/2017 -08/2017)",
          logo: "/cert/udemy.png",
          link: ""
        }
      ]
    };
  }
};
</script>