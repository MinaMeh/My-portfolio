<template>
  <v-container>
    <v-row no-gutters class="mt-2" justify="space-around">
      <v-col cols="8" sm="8" md="3" xl="3" class="skills">
        <span>
          <h1 class="text-center display-2">Certifications</h1>
        </span>
      </v-col>
    </v-row>

    <v-timeline dense>
      <v-timeline-item large v-for="cert in certifications" :key="cert.date">
        <template v-slot:icon>
          <v-avatar>
            <img :src="'/images'+cert.logo" />
          </v-avatar>
        </template>
        <v-card class="elevation-2">
          <v-card-title>
            <h1 class="title">{{cert.title}}</h1>
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
            "https://www.lynda.com/Spark-DataFrames-tutorials/Apache-PySpark-Example/802868-2.html?certificate=E0DF59226F6541FC80ABD8640BA3D354"
        },
        {
          title: "Learning Amazon SageMaker -Lynda.com-",
          date: "(12/2019)",
          logo: "/cert/lynda.jpg",
          link:
            "https://www.lynda.com/Developer-tutorials/Learning-Amazon-SageMaker/5019805-2.html?certificate=8E201EE09BD045E381A5DFBEA0374375"
        },
        {
          title: "AWS Machine Learning by Example -Lynda.com-",
          date: "(12/2019)",
          logo: "/cert/lynda.jpg",
          link:
            "https://www.lynda.com/Amazon-Web-Services-tutorials/AWS-Machine-Learning-Example/704145-2.html?certificate=0D4E0321495A45C0869FE671F91E364C"
        },
        {
          title: "Data Science with Scala -Cognitive Class (IBM)-",
          date: "(12/2019)",
          logo: "/cert/cc.png",
          link:
            "https://courses.cognitiveclass.ai/certificates/user/1434420/course/course-v1:Lightbend+SC0105EN+v1"
        },
        {
          title: "Spark Overview for Scala Analytics -Cognitive Class (IBM)-",
          date: "(12/2019)",
          logo: "/cert/cc.png",
          link:
            "https://courses.cognitiveclass.ai/certificates/05e3b248b5a1451bb054fa00c3e2bfa5"
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
          link: ""
        },
        {
          title: "Spark Fundamentals I-Cognitive Class (IBM)-",
          date: "(12/2019)",
          logo: "/cert/cc.png",
          link:
            "https://courses.cognitiveclass.ai/certificates/aa6c1a202e074b9a80ca9a10f841c505"
        },
        {
          title: "Hadoop 101 -Cognitive Class (IBM)-",
          date: "(11/2019)",
          logo: "/cert/cc.png",
          link:
            "https://courses.cognitiveclass.ai/certificates/user/1434420/course/course-v1:BigDataUniversity+BD0111EN+2016"
        },
        {
          title:
            "Docker Essentials: A Developer Introduction-Cognitive Class (IBM)-",
          date: "(11/2019)",
          logo: "/cert/cc.png",
          link:
            "https://courses.cognitiveclass.ai/certificates/6ede9f8a30a441578f35baa30ce47a8a"
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
          link: ""
        },
        {
          title: "Data Analysis with Pandas and Python -Udemy-",
          date: "(09/2019-10/2019)",
          logo: "/cert/udemy.png",
          link: "https://www.udemy.com/certificate/UC-POJYT8YF/"
        },
        {
          title: "Machine Learning -Coursera- ",
          date: "(07/2019- 09/2019)",
          logo: "/cert/coursera.png",
          link:
            "https://www.coursera.org/account/accomplishments/certificate/CVJ487RBL2H5?utm_me"
        },
        {
          title: "Laravel 5 from scratch -Laracasts- ",
          date: "(09/2018)",
          logo: "/cert/laracasts.jpeg",
          link: ""
        },
        {
          title: "The complete python 3 Course -Udemy- ",
          date: "(08/2018 -09/2018)",
          logo: "/cert/udemy.png",
          link: "https://www.udemy.com/certificate/UC-YPBK38YU/"
        },
        {
          title: "SoloLearn-PHP ",
          date: "(08/2018 -09/2018)",
          logo: "/cert/sololearn.jpeg",
          link: "https://www.sololearn.com/Certificate/1059-10650055/pdf/"
        },
        {
          title: "SoloLearn-Python ",
          date: "(07/2018 -08/2018)",
          logo: "/cert/sololearn.jpeg",
          link: "https://www.sololearn.com/Certificate/1073-10650055/pdf/"
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