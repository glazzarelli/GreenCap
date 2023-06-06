import{_ as v}from"./Heading.809b60b7.js";import{_ as w}from"./ProjectCardForPerson.0470248e.js";import{_ as x,u as y,h as b,w as I,i as k,r as C,d as j,B,c as p,e as P,j as s,a as o,t as _,F as m,k as S,l as F,o as r,m as L,p as $,f as z}from"./entry.a0890fe6.js";import{u as E}from"./fetch.c1e12fde.js";import"./nuxt-link.05e3bf82.js";import"./useImages.e761210a.js";const G=a=>($("data-v-59b7d470"),a=a(),z(),a),M={class:"mt-10 mb-18"},R=["src"],A={class:"italic text-center text-4xl font-serif pl-6 pr-6 mb-8"},D={class:"mt-12"},H=G(()=>o("h1",null,"Supervised Projects",-1)),N={class:"flex flex-wrap"},J={__name:"[personId]",async setup(a){let n,i;y({title:"People - GreenCapital",meta:[{name:"description",content:"The purpose of a people page is to provide visitors with an overview of the individuals involved in the organization or community, highlighting their expertise, achievements, and contributions."},{name:"keywords",content:"people, expertise, team, profiles"},{name:"Gabriele Lazzarelli, Luca Zanotto, Martina Del Basso, Francesca Arrigoni",content:"GreenCapital"}]});const{personId:d}=b().params,{data:e}=([n,i]=I(()=>E(F().public.baseURL+`/people/${d}`,"$ngmCJLKkzg")),n=await n,i(),n);if(!e.value)throw k({statusCode:404,statusMessage:"Person not found",fatal:!0});const u=C("");async function g(t){try{if((await fetch(t)).ok)return t;throw new Error("Image not found")}catch{return console.log("error detected"),`../images/people/${e.image}`}}return j(async()=>{B(e,async t=>{t.value&&t.value.image&&(u.value=await g(`../../images/people/${t.value.image}`))})}),(t,c)=>{const h=v,f=w;return r(),p(m,null,[P(h,{title:"People / "+s(e).name+" "+s(e).surname},null,8,["title"]),o("div",M,[o("img",{src:`/images/people/${s(e).image}`,class:"rounded-md lg:float-left lg:h-1/3 lg:w-1/3 mr-8 mb-2 shadow-lg lg:max-h-screen lg:object-cover",alt:"Person Image"},null,8,R),o("p",A,'"'+_(s(e).motto)+'"',1),o("h2",null,_(s(e).cv),1)]),o("div",D,[H,o("div",N,[(r(!0),p(m,null,S(s(e).projects,l=>(r(),L(f,{key:l.id,project:l,class:"w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"},null,8,["project"]))),128))])])],64)}}},Q=x(J,[["__scopeId","data-v-59b7d470"]]);export{Q as default};