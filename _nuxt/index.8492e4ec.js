import{_ as u}from"./Heading.83cd082a.js";import{_ as h}from"./nuxt-link.a6cf36d4.js";import{_ as f,r as g,d as v,o as n,c as l,e as d,q as x,a as o,t as _,p as w,f as y,w as b,u as k,F as $,k as C,j as I,l as B,m as P}from"./entry.2a7c55e4.js";import{u as S}from"./fetch.439ba844.js";const F=e=>(w("data-v-20b64e66"),e=e(),y(),e),L={class:"relative"},j={class:"card card-compact image-full max-w-md mx-auto"},z={class:"relative"},G=["src"],T={class:"absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center p-2"},q={class:"card-title justify-center font-semibold text-shadow"},A=F(()=>o("div",{class:"card-body text-center mt-28"},null,-1)),D={__name:"PersonCard",props:{person:{type:Object,required:!0}},setup(e){const{person:t}=e,a=g("");async function r(s){try{if((await fetch(s)).ok)return s;throw new Error("Image not found")}catch{return a.value=`../images/people/${t.image}`,`./images/areas/'${t.image}`}}return v(async()=>{a.value=await r(`../images/people/${t.image}`)}),(s,i)=>{const c=h;return n(),l("div",L,[d(c,{to:`/people/${e.person.id}`},{default:x(()=>[o("div",j,[o("figure",z,[o("img",{src:a.value,alt:"Person Image"},null,8,G),o("figcaption",T,[o("h2",q,_(e.person.name)+" "+_(e.person.surname),1)])]),A])]),_:1},8,["to"])])}}},E=f(D,[["__scopeId","data-v-20b64e66"]]),H={class:"card-container"},O={__name:"index",async setup(e){let t,a;const{data:r}=([t,a]=b(()=>S(B().public.baseURL+"/people","$86ry0ThwyT")),t=await t,a(),t);return k({title:"People - GreenCapital",meta:[{name:"description",content:"The purpose of a people page is to provide visitors with an overview of the individuals involved in the organization or community, highlighting their expertise, achievements, and contributions."},{name:"keywords",content:"people, expertise, team, profiles"},{name:"Gabriele Lazzarelli, Luca Zanotto, Martina Del Basso, Francesca Arrigoni",content:"GreenCapital"}]}),(s,i)=>{const c=u,m=E;return n(),l("div",null,[d(c,{title:"People"}),o("div",H,[(n(!0),l($,null,C(I(r),p=>(n(),P(m,{person:p,key:p.id},null,8,["person"]))),128))])])}}};export{O as default};
