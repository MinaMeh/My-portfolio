(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"92b66e89"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4230:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("Home",{attrs:{id:"home"}}),a("Skills",{attrs:{id:"skills"}}),a("Projects",{attrs:{id:"projects"}}),a("Experience",{attrs:{id:"experience"}}),a("Certifications",{attrs:{id:"certifications"}}),a("Contact",{attrs:{id:"contact"}}),a("v-footer",{staticClass:"mt-5"},[a("v-col",{staticClass:"text-center font-weight-light",attrs:{cols:"12"}},[t._v("Made by MEHERHERA Amina — using Vuejs and Vuetify © 2020")])],1)],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{app:""}},[a("span",{staticClass:"hidden-sm-and-up"},[a("v-app-bar-nav-icon",{on:{click:function(e){t.sidebar=!t.sidebar}}})],1),a("v-avatar",{attrs:{size:"50"}},[a("img",{attrs:{src:"/images/me.jpg",alt:""}})]),a("v-toolbar-title",{staticClass:"ma-4"},[t._v("Amina Meherhera")]),a("v-spacer"),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{text:"",color:"grey lighten-2"},on:{click:function(e){return t.$vuetify.goTo("#home")}}},[t._v("Home")]),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{text:"",color:"grey lighten-2"},on:{click:function(e){return t.$vuetify.goTo("#skills")}}},[t._v("Skills")]),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{text:"",color:"grey lighten-2"},on:{click:function(e){return t.$vuetify.goTo("#projects")}}},[t._v("Projects")]),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{text:"",color:"grey lighten-2"},on:{click:function(e){return t.$vuetify.goTo("#experience")}}},[t._v("Experience")]),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{text:"",color:"grey lighten-2"},on:{click:function(e){return t.$vuetify.goTo("#certifications")}}},[t._v("Certifications")]),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{text:"",color:"grey lighten-2"},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[t._v("Contact me")]),a("v-spacer")],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[a("v-list",[a("v-list-item",{on:{click:function(e){return t.$vuetify.goTo("#home")}}},[a("v-list-item-content",[t._v("Home")])],1),a("v-list-item",{on:{click:function(e){return t.$vuetify.goTo("#skills")}}},[a("v-list-item-content",[t._v("Skills")])],1),a("v-list-item",{on:{click:function(e){return t.$vuetify.goTo("#projects")}}},[a("v-list-item-content",[t._v("Projects")])],1),a("v-list-item",{on:{click:function(e){return t.$vuetify.goTo("#experience")}}},[a("v-list-item-content",[t._v("Experience")])],1),a("v-list-item",{on:{click:function(e){return t.$vuetify.goTo("#certifications")}}},[a("v-list-item-content",[t._v("Certifications")])],1),a("v-list-item",{on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[a("v-list-item-content",[t._v("Contact Me")])],1)],1)],1)],1)},o=[],c={name:"Navbar",data:function(){return{sidebar:!1}}},l=c,u=a("2877"),d=a("6544"),p=a.n(d),m=a("40dc"),v=a("5bc1"),g=a("8212"),h=a("8336"),f=a("8860"),y=a("da13"),C=a("5d23"),_=a("f774"),b=a("2fa4"),k=a("2a7f"),w=Object(u["a"])(l,r,o,!1,null,null,null),x=w.exports;p()(w,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:g["a"],VBtn:h["a"],VList:f["a"],VListItem:y["a"],VListItemContent:C["a"],VNavigationDrawer:_["a"],VSpacer:b["a"],VToolbarTitle:k["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","align-content-space-around":""}},[a("v-col",{staticClass:"mt-4",attrs:{cols:"12",sm:"12",md:"6",xl:"6",align:"center"}},[a("img",{staticClass:"pic",attrs:{src:"/images/pc.jpeg",alt:""}})]),a("v-flex",{staticClass:"mt-4",attrs:{xs12:"",sm12:"",md6:"",xl6:"","align-self-center":""}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"headline font-weight-light text-center"},[a("p",[t._v("A final year Computer Science Student at Ecole Supérieure d'Informatique (ESI-Algiers) and DevOps Engineer at Innovia for Intersec Group.")]),a("p",[t._v("Passionate about all what concerns computer science, always seeking knowledge and learning new things.")])])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12","align-self":"center"}},[a("a",{attrs:{href:"mailto: fa_meherhera@esi.dz"}},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"50"}},[a("img",{attrs:{src:"/images/social/gmail.png",alt:"alt"}})])],1),a("a",{attrs:{href:"https://www.linkedin.com/in/amina-meherhera-b63323135/"}},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"50"}},[a("img",{attrs:{src:"/images/social/linkedin.png",alt:"alt"}})])],1),a("a",{attrs:{href:"https://github.com/MinaMeh"}},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"50"}},[a("img",{attrs:{src:"/images/social/github.png",alt:"alt"}})])],1),a("a",{attrs:{href:""}},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"50"}},[a("img",{attrs:{src:"/images/social/acclaim.jpg",alt:"alt"}})])],1)])],1)],1)],1)},V=[],A={name:"Home",components:{}},j=A,M=(a("cccb"),a("b0af")),P=a("99d9"),E=a("62ad"),D=a("a523"),T=a("0e8f"),L=a("a722"),I=Object(u["a"])(j,S,V,!1,null,null,null),B=I.exports;p()(I,{VAvatar:g["a"],VCard:M["a"],VCardText:P["a"],VCol:E["a"],VContainer:D["a"],VFlex:T["a"],VLayout:L["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"window-size"},[a("v-row",{staticClass:"mt-2",attrs:{"no-gutters":"",justify:"space-around"}},[a("v-col",{staticClass:"skills",attrs:{cols:"4",sm:"4",md:"2",xl:"2"}},[a("span",[a("h1",{staticClass:"text-center display-2"},[t._v("Skills")])])])],1),a("v-row",{staticClass:"mt-3",attrs:{"no-gutters":"",align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"5",xl:"5"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Data Analysis")]),t._l(t.data_analyses,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"primary"}},[t._v(t._s(e))])}))],2)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"3",xl:"3"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Machine Learning")]),t._l(t.machine_learning,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"red"}},[t._v(t._s(e))])}))],2)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",xl:"4"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Big Data")]),t._l(t.big_data,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"green"}},[t._v(t._s(e))])}))],2)],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"5",xl:"5"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Web Development")]),t._l(t.frontend,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"purple"}},[t._v(t._s(e))])})),a("br"),t._l(t.backend,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"purple"}},[t._v(t._s(e))])}))],2)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"3",xl:"3"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Databases")]),t._l(t.databases,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"pink"}},[t._v(t._s(e))])}))],2)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"2",xl:"2","align-self":"center"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Mobile Development")]),t._l(t.mobile,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"deep-orange darken-4"}},[t._v(t._s(e))])}))],2)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"2",xl:"2","align-self":"center"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Operating Systems")]),t._l(t.os,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1 ml-3",attrs:{color:"brown darken-1"}},[t._v(t._s(e))])}))],2)],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"5",xl:"5"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Tools")]),t._l(t.tools,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"teal"}},[t._v(t._s(e))])}))],2)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"3",xl:"3"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Project Management")]),t._l(t.project_management,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"green darken-4"}},[t._v(t._s(e))])}))],2)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"4",xl:"4"}},[a("v-card",{staticClass:"text-center ma-1"},[a("v-card-text",[a("h1",{staticClass:"title"},[t._v("Others")]),t._l(t.others,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"indigo"}},[t._v(t._s(e))])}))],2)],1)],1)],1)],1)},F=[],H={data:function(){return{data_analyses:["Python","R","Numpy","Pandas","Matplotlib","Seaborn"],machine_learning:["Python","Scikit-learn","Pytorch"],big_data:["Python","Scala","Spark/PySpark","Hive","Hadoop"],frontend:["HTML","CSS","Bootstrap","Bulma","Javascript","JQuery","VueJs","Vuetify"],backend:["PHP","Laravel","Django"],databases:["MySQL","NoSQL","Oracle","PostgreSQL","PL/SQL","MongoDB"],mobile:["Android Studio","Kotlin"],os:["Linux","Windows"],tools:["Git/Github","Docker","Microsoft Office","Cisco Packet Tracer","GNS3","VMware ESXi"],project_management:["Ms Project","Trello","Scrum","Gerrit","Slack"],others:["Java","C","Matlab","Octave","Bash","VHDL","Windev"]}}},J=H,$=(a("910d"),a("cc20")),z=a("0fd9"),N=Object(u["a"])(J,O,F,!1,null,null,null),R=N.exports;p()(N,{VCard:M["a"],VCardText:P["a"],VChip:$["a"],VCol:E["a"],VContainer:D["a"],VRow:z["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mt-2",attrs:{"no-gutters":"",justify:"space-around"}},[a("v-col",{staticClass:"skills",attrs:{cols:"6",sm:"6",md:"2",xl:"2"}},[a("span",[a("h1",{staticClass:"text-center display-2"},[t._v("Projects")])])])],1),a("v-row",{attrs:{justify:"space-around"}},t._l(t.projects,(function(e,s){return a("v-col",{key:s,attrs:{"align-self":"stretch",cols:"12",sm:"12",md:"6",xl:"6"}},[a("v-card",{staticClass:"text-center",attrs:{height:"100%"}},[a("v-card-text",[a("v-carousel",{attrs:{height:"400",continuous:"",cycle:"",interval:"3000"}},t._l(e.items,(function(t,e){return a("v-carousel-item",{key:e,attrs:{href:t,target:"__","reverse-transition":"fade-transition",transition:"fade-transition"}},[a("img",{staticClass:"fit",attrs:{src:"/images"+t,alt:""}})])})),1),a("v-col",{attrs:{align:"stretch"}},[a("h2",{staticClass:"mt-4"},[t._v(t._s(e.title))]),a("p",{staticClass:"mt-2"},[t._v(t._s(e.description))]),t._l(e.technologies,(function(s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:e.color}},[t._v(t._s(s))])}))],2)],1)],1)],1)})),1)],1)},Q=[],W={data:function(){return{projects:[{title:"My Pharma",description:"An android mobile application for pharmacies customers which allow to display pharmacies by city, the details of a pharmacy, the nearest pharmacies on a map. It also makes it possible to launch an order and follow the processing status of the order",technologies:["Kotlin","NodeJs"],color:"green accent-2",items:["/pharma/5.png","/pharma/6.png","/pharma/7.png"]},{title:"SYNTECH",description:"A minimal Linux distribution for terminals having minimum of resources (RAM, CPU, disk space). It only needs 100MB of RAM and about 3GB of disk space. It also comes with installed communication packages (Telnet, SSH, RDP)",technologies:["LiveBuild","LFS"],color:"blue",items:["/syntech/1.png","/syntech/2.png"]},{title:"Knaspack",description:"A Desktop application to resolve the knapsack problem with exact methods, heuristics and meta-heuristics",technologies:["Python","PyQt5"],color:"purple darken-4",items:["/knapsack/1.png","/knapsack/2.png"]},{title:"Artic",description:"A Desktop application to detect the articulation point in a graph",technologies:["JAVA","JavaFX"],color:"deep-orange accent-4",items:["/articulation/2.png","/articulation/3.png"]},{title:"AUDIT",description:"A web application for to automate the  management of annual audit planning for Systems and Data Security  Department at ELIT (EL Djazair Information Technology) ",technologies:["HTML","CSS","Bootstrap","JQUERY","Laravel","MySQL"],color:"success",items:["/elit/5.png","/elit/8.png","/elit/11.png"]},{title:"WashIT",description:"An app forwashing/delivery service that also provides the possibility of tracking the laundry in real time and many other options.",technologies:["JAVA","Firebase"],color:"cyan accent-4",items:["/washit/1.jpg","/washit/2.jpg"]},{title:"BoostResto",description:"A restaurant management application that allows the management of the kitchen, menus, stock and it offers the possibility to  generate statistics",technologies:["Windev"],color:"blue",items:["/boostresto/1.png","/boostresto/3.png","/boostresto/5.png","/boostresto/7.png","/boostresto/10.png"]},{title:"Secret Diary",description:"A web application to save your daily diaries ",technologies:["HTML","CSS","Bootstrap","JQUERY","PHP","MySQL"],color:"success",items:["/diary/1.png","/diary/2.png"]},{title:"Weather Scraper",description:"A web application to get the weather of  a given town ",technologies:["HTML","CSS","Bootstrap","JQUERY","PHP","MySQL"],color:"success",items:["/weather/1.png","/weather/2.png"]},{title:"Landing Pages",description:"A lanscape page of a mobile application presentation  ",technologies:["HTML","CSS","Bootstrap","JQUERY","PHP","MySQL"],color:"blue",items:["/landing/1.png","/landing/2.png"]},{title:"Pendu",description:"Un jeu de mot desktop dans lequel vous allez devoir découvrir un mot de 7 à 11 lettres d'après une indication qui est son synonyme, antomyme ou définition . ",technologies:["JAVA","JavaFX"],color:"purple",items:["/pendu/1.png"]}]}}},Y=W,G=(a("ed0c"),a("5e66")),K=a("3e35"),q=Object(u["a"])(Y,U,Q,!1,null,null,null),X=q.exports;p()(q,{VCard:M["a"],VCardText:P["a"],VCarousel:G["a"],VCarouselItem:K["a"],VChip:$["a"],VCol:E["a"],VContainer:D["a"],VRow:z["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mt-2",attrs:{"no-gutters":"",justify:"space-around"}},[a("v-col",{staticClass:"skills",attrs:{cols:"7",sm:"7",md:"3",xl:"3"}},[a("span",[a("h1",{staticClass:"text-center display-2"},[t._v("Experience")])])])],1),a("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.experiences,(function(e){return a("v-timeline-item",{key:e.title,attrs:{color:e.color,"fill-dot":"",right:e.right,left:e.left}},[a("v-card",[a("v-card-title",{class:e.color},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{staticClass:"mr-4",attrs:{dark:"",size:"40"}},[t._v("mdi-account")])],1),a("v-col",{attrs:{cols:"11"}},[a("h2",{staticClass:"headline white--text ml-3 mt-2"},[t._v(t._s(e.title))])]),a("v-col",{attrs:{cols:"1",justify:"left"}},[a("v-icon",{staticClass:"mr-4",attrs:{dark:"",size:"30"}},[t._v("mdi-calendar-text")])],1),a("v-col",{attrs:{cols:"11","align-self":"center"}},[a("h3",{staticClass:"subtitle-1 font-weight-light ml-3"},[t._v(t._s(e.date))])]),a("v-col",{attrs:{cols:"1",align:"left"}},[a("v-icon",{staticClass:"mr-4",attrs:{dark:"",size:"30"}},[t._v("mdi-home-modern")])],1),a("v-col",{attrs:{cols:"11","align-self":"center"}},[a("h3",{staticClass:"subtitle-1 font-weight-light ml-3"},[t._v(t._s(e.where))])])],1)],1),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("ul",t._l(e.tasks,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0)])],1)],1)],1)],1)})),1)],1)},tt=[],et={data:function(){return{experiences:[{title:"Fullstack Developper",where:"Innovia Business Solutions",date:"Jan 2010 -Now",tasks:["Mobile Applications Developper(01/2020)","DevOps Engineer at Intersec Group (02/2020-Présent)"],color:"red lighten-1",right:!0,left:!1},{title:"Internship",where:" LMCS Laboratory-ESI- ",date:"Sep 2019- Now",tasks:["Design and implementation of an approach to transform web open data to linked data"],color:"green lighten-1",right:!1,left:!0},{title:"Member",where:" Shellmates Club",date:"Sep 2017- Feb 2020",tasks:["vice-President (Sep 2018 - Oct 2019)","Community Manager (Jan 2018-Jan 2020)","Active Member (Sep 2017– Feb 2020)"],color:"indigo lighten-1",right:!0,left:!1},{title:"Internship",where:" ELIT (EL Djazair Information Technology)",date:"Sep 2018-Oct 2018",tasks:[" Developping, deploying and securing a web application that automates annual audit planning"],color:"blue lighten-1",right:!1,left:!0},{title:"Co-founder / Mobile Developper",where:" WashIT",date:"Nov 2017-Jun 2018",tasks:[" WashIt is an Algerian company that was created as a part of Injaz el Djazair Company Program. It was founded by students from ESI EX-INI on early 2018. WashIt is a washing/delivery service that is assured by a mobile application that also provides the possibility of tracking the laundry in real time and many other options."],color:"teal lighten-1",right:!0,left:!1},{title:"Internship",where:" Sonatrach -Exploration Division-",date:"Jul 2016-Aug 2016",tasks:["Discovering the company's IT Service departements"],color:"pink lighten-1",right:!1,left:!0}]}}},at=et,st=a("132d"),it=a("8414"),nt=a("1e06"),rt=Object(u["a"])(at,Z,tt,!1,null,null,null),ot=rt.exports;p()(rt,{VCard:M["a"],VCardTitle:P["b"],VCol:E["a"],VContainer:D["a"],VIcon:st["a"],VRow:z["a"],VTimeline:it["a"],VTimelineItem:nt["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mt-2",attrs:{"no-gutters":"",justify:"space-around"}},[a("v-col",{staticClass:"skills",attrs:{cols:"8",sm:"8",md:"3",xl:"3"}},[a("span",[a("h1",{staticClass:"text-center display-2"},[t._v("Certifications")])])])],1),a("v-timeline",{attrs:{dense:""}},t._l(t.certifications,(function(e){return a("v-timeline-item",{key:e.date,attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[a("v-avatar",[a("img",{attrs:{src:"/images"+e.logo}})])]},proxy:!0}],null,!0)},[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",[a("h1",{staticClass:"title"},[t._v(t._s(e.title))]),a("a",{staticClass:"ml-3",attrs:{href:e.link,target:"__"}},[t._v("See certificate")])]),a("v-card-text",[a("v-icon",[t._v("mdi-calendar-text")]),t._v(" "+t._s(e.date)+" ")],1)],1)],1)})),1)],1)},lt=[],ut={data:function(){return{certifications:[{title:"AI Programming with Python Nanodegree -Udacity-",date:"(01/2020-03/2020)",logo:"/cert/udacity.jpg",link:"https://graduation.udacity.com/confirm/LAMKEM74"},{title:"Apache PySpark by Example -Lynda.com-",date:"(12/2019)",logo:"/cert/lynda.jpg",link:"https://www.lynda.com/Spark-DataFrames-tutorials/Apache-PySpark-Example/802868-2.html?certificate=E0DF59226F6541FC80ABD8640BA3D354"},{title:"Learning Amazon SageMaker -Lynda.com-",date:"(12/2019)",logo:"/cert/lynda.jpg",link:"https://www.lynda.com/Developer-tutorials/Learning-Amazon-SageMaker/5019805-2.html?certificate=8E201EE09BD045E381A5DFBEA0374375"},{title:"AWS Machine Learning by Example -Lynda.com-",date:"(12/2019)",logo:"/cert/lynda.jpg",link:"https://www.lynda.com/Amazon-Web-Services-tutorials/AWS-Machine-Learning-Example/704145-2.html?certificate=0D4E0321495A45C0869FE671F91E364C"},{title:"Data Science with Scala -Cognitive Class (IBM)-",date:"(12/2019)",logo:"/cert/cc.png",link:"https://courses.cognitiveclass.ai/certificates/user/1434420/course/course-v1:Lightbend+SC0105EN+v1"},{title:"Spark Overview for Scala Analytics -Cognitive Class (IBM)-",date:"(12/2019)",logo:"/cert/cc.png",link:"https://courses.cognitiveclass.ai/certificates/05e3b248b5a1451bb054fa00c3e2bfa5"},{title:"Scala 101 -Cognitive Class (IBM)-",date:"(12/2019)",logo:"/cert/cc.png",link:"https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},{title:"Intro to Deep learning with PyTorch -Udacity-",date:"(11/2019-12/2019)",logo:"/cert/udacity.jpg",link:""},{title:"Spark Fundamentals I-Cognitive Class (IBM)-",date:"(12/2019)",logo:"/cert/cc.png",link:"https://courses.cognitiveclass.ai/certificates/aa6c1a202e074b9a80ca9a10f841c505"},{title:"Hadoop 101 -Cognitive Class (IBM)-",date:"(11/2019)",logo:"/cert/cc.png",link:"https://courses.cognitiveclass.ai/certificates/user/1434420/course/course-v1:BigDataUniversity+BD0111EN+2016"},{title:"Docker Essentials: A Developer Introduction-Cognitive Class (IBM)-",date:"(11/2019)",logo:"/cert/cc.png",link:"https://courses.cognitiveclass.ai/certificates/6ede9f8a30a441578f35baa30ce47a8a"},{title:"Big Data 101-Cognitive Class (IBM)-",date:"(11/2019)",logo:"/cert/cc.png",link:"https://www.lynda.com/ViewCertificate/E0DF59226F6541FC80ABD8640BA3D354?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},{title:"Python for Data Science Bootcamp -Udemy-",date:"(10/2019)",logo:"/cert/udemy.png",link:""},{title:"Data Analysis with Pandas and Python -Udemy-",date:"(09/2019-10/2019)",logo:"/cert/udemy.png",link:"https://www.udemy.com/certificate/UC-POJYT8YF/"},{title:"Machine Learning -Coursera- ",date:"(07/2019- 09/2019)",logo:"/cert/coursera.png",link:"https://www.coursera.org/account/accomplishments/certificate/CVJ487RBL2H5?utm_me"},{title:"Laravel 5 from scratch -Laracasts- ",date:"(09/2018)",logo:"/cert/laracasts.jpeg",link:""},{title:"The complete python 3 Course -Udemy- ",date:"(08/2018 -09/2018)",logo:"/cert/udemy.png",link:"https://www.udemy.com/certificate/UC-YPBK38YU/"},{title:"SoloLearn-PHP ",date:"(08/2018 -09/2018)",logo:"/cert/sololearn.jpeg",link:"https://www.sololearn.com/Certificate/1059-10650055/pdf/"},{title:"SoloLearn-Python ",date:"(07/2018 -08/2018)",logo:"/cert/sololearn.jpeg",link:"https://www.sololearn.com/Certificate/1073-10650055/pdf/"},{title:"Fullstack Web Developper - Udemy-)",date:"(07/2017 -08/2017)",logo:"/cert/udemy.png",link:""}]}}},dt=ut,pt=Object(u["a"])(dt,ct,lt,!1,null,null,null),mt=pt.exports;p()(pt,{VAvatar:g["a"],VCard:M["a"],VCardText:P["a"],VCardTitle:P["b"],VCol:E["a"],VContainer:D["a"],VIcon:st["a"],VRow:z["a"],VTimeline:it["a"],VTimelineItem:nt["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"ma-3 mb-5"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"6","align-self":"center"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("h1",{staticClass:"display-2 text-center ma-3"},[t._v("Contact Me")]),a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-map-marker")]),t._v("Boumerdes -Algeria ")],1),a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-email")]),t._v("fa_meherhera@esi.dz ")],1),a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-linkedin")]),a("a",{attrs:{href:"https://www.linkedin.com/in/amina-meherhera-b63323135/"}},[t._v("Amina Meherhera")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-github")]),a("a",{attrs:{href:"github.com/MinaMeh"}},[t._v("MinaMeh")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"6",align:"center",justify:"center"}},[a("img",{staticClass:"pic",attrs:{src:"/images/pc.jpeg",alt:""}})])],1)],1)},gt=[],ht={date:function(){return{}}},ft=ht,yt=Object(u["a"])(ft,vt,gt,!1,null,null,null),Ct=yt.exports;p()(yt,{VCard:M["a"],VCardText:P["a"],VCol:E["a"],VContainer:D["a"],VIcon:st["a"],VRow:z["a"]});var _t={name:"App",components:{Navbar:x,Home:B,Skills:R,Projects:X,Experience:ot,Certifications:mt,Contact:Ct},data:function(){return{}}},bt=_t,kt=a("7496"),wt=a("a75b"),xt=a("553a"),St=Object(u["a"])(bt,i,n,!1,null,null,null),Vt=St.exports;p()(St,{VApp:kt["a"],VCol:E["a"],VContent:wt["a"],VFooter:xt["a"]});a("d3b7");var At=a("8c4f");s["a"].use(At["a"]);var jt=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Mt=new At["a"]({mode:"history",base:"/",routes:jt}),Pt=Mt,Et=a("f309");s["a"].use(Et["a"]);var Dt=new Et["a"]({theme:{dark:!0}});s["a"].config.productionTip=!1,new s["a"]({router:Pt,vuetify:Dt,render:function(t){return t(Vt)}}).$mount("#app")},"910d":function(t,e,a){"use strict";var s=a("bdf1"),i=a.n(s);i.a},bdf1:function(t,e,a){},cccb:function(t,e,a){"use strict";var s=a("4230"),i=a.n(s);i.a},d340:function(t,e,a){},ed0c:function(t,e,a){"use strict";var s=a("d340"),i=a.n(s);i.a}});
//# sourceMappingURL=app.6ac06a6f.js.map