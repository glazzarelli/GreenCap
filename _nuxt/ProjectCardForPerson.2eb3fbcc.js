import{_ as a}from"./nuxt-link.479792d5.js";import{_ as r,o as n,c as _,e as d,q as i,a as t,t as c}from"./entry.ad35dbf2.js";const p={class:"card"},l=["src"],m={class:"card-body"},j={class:"card-title"},g={class:"card-text"},u={__name:"ProjectCardForPerson",props:["project"],setup(o){const{project:e}=o;return console.log("Project id passed to cardForPerson :",e.id),console.log("Project image passed to cardForPerson :",e.image),(h,x)=>{const s=a;return n(),_("div",p,[d(s,{to:`/projects/${o.project.id}`},{default:i(()=>[t("img",{src:`../images/projects/${o.project.image}`,alt:"Startup Logo",class:"card-img-top"},null,8,l),t("div",m,[t("h2",j,c(o.project.name),1),t("p",g,c(o.project.descriptionShort),1)])]),_:1},8,["to"])])}}},v=r(u,[["__scopeId","data-v-3d8b6452"]]);export{v as _};