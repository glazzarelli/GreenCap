import{_ as f}from"./Heading.ddb06899.js";import{_ as h}from"./ProjectCardWithoutLinks.cfd80180.js";import{_ as g,h as v,w as x,i as w,u as I,c,e as k,j as s,a as t,t as l,F as p,k as y,l as b,o as n,m as j,p as P,f as C}from"./entry.1c00b5b2.js";import{u as S}from"./fetch.a0d117bf.js";import{u as B}from"./useImages.9d2e80c6.js";import"./nuxt-link.cfcf244d.js";const L=o=>(P("data-v-f2547edf"),o=o(),C(),o),F={class:"mt-10 mb-18"},R=["src"],z={class:"italic text-center text-4xl font-serif pl-6 pr-6 mb-8"},E={class:"mt-12"},H=L(()=>t("h1",null,"Supervised Projects",-1)),N={class:"flex flex-wrap"},V={__name:"[personId]",async setup(o){let a,r;const{personId:_}=v().params,{data:e}=([a,r]=x(()=>S(b().public.baseURL+`/people/${_}`,"$ngmCJLKkzg")),a=await a,r(),a);if(!e.value)throw w({statusCode:404,statusMessage:"Person not found",fatal:!0});const m=B("people",e.value.image.replace(".jpg",""));return I({title:"People - GreenCapital",meta:[{name:"description",content:"The purpose of a people page is to provide visitors with an overview of the individuals involved in the organization or community, highlighting their expertise, achievements, and contributions."},{name:"keywords",content:"people, expertise, team, profiles"}]}),($,A)=>{const d=f,u=h;return n(),c(p,null,[k(d,{title:"People / "+s(e).name+" "+s(e).surname},null,8,["title"]),t("div",F,[t("img",{src:s(m),class:"rounded-md lg:float-left lg:h-1/3 lg:w-1/3 mr-8 mb-2 shadow-lg lg:max-h-screen lg:object-cover",alt:"Person Image"},null,8,R),t("p",z,'"'+l(s(e).motto)+'"',1),t("h2",null,l(s(e).cv),1)]),t("div",E,[H,t("div",N,[(n(!0),c(p,null,y(s(e).projects,i=>(n(),j(u,{key:i.id,project:i,class:"w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"},null,8,["project"]))),128))])])],64)}}},U=g(V,[["__scopeId","data-v-f2547edf"]]);export{U as default};