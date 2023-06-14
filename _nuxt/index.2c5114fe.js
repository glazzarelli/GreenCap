import{_ as f}from"./Heading.3fad3cbd.js";import{_ as v}from"./nuxt-link.7478b175.js";import{_ as h,r as p,o as s,c as i,e as d,q as g,a as t,z as x,t as u,w as y,u as w,F as b,k,j as C,l as $,m as P}from"./entry.9af5b518.js";import{u as B}from"./fetch.79693fd7.js";const O={class:"relative"},z={class:"relative"},F=["src"],H={class:"absolute bottom-0 w-full card-no-opacity bg-black text-white text-center p-2"},T={class:"card-title justify-center font-semibold text-shadow"},j={__name:"PersonCard",props:["person"],setup(o){const e=p(!1),a=p(!0);function n(){a.value=!1,e.value=!0}function c(){a.value=!0,e.value=!1}return(m,l)=>{const r=v;return s(),i("div",O,[d(r,{to:`/people/${o.person.id}/`},{default:g(()=>[t("div",{class:x(["card card-compact image-full max-w-md mx-auto",{"card-hover-opacity":e.value}]),onMouseover:n,onMouseleave:c},[t("figure",z,[t("img",{src:`../images/people/${o.person.image}`,alt:"Person Image"},null,8,F),t("figcaption",H,[t("h2",T,u(o.person.name)+" "+u(o.person.surname),1)])])],34)]),_:1},8,["to"])])}}},I=h(j,[["__scopeId","data-v-1e91f0e7"]]),L={class:"card-container"},q={__name:"index",async setup(o){let e,a;const{data:n}=([e,a]=y(()=>B($().public.baseURL+"/people","$86ry0ThwyT")),e=await e,a(),e);return w({title:"People - GreenCapital",meta:[{name:"description",content:"The purpose of a people page is to provide visitors with an overview of the individuals involved in the organization or community, highlighting their expertise, achievements, and contributions."},{name:"keywords",content:"people, expertise, team, profiles"}]}),(c,m)=>{const l=f,r=I;return s(),i("div",null,[d(l,{title:"People"}),t("div",L,[(s(!0),i(b,null,k(C(n),_=>(s(),P(r,{person:_,key:_.id},null,8,["person"]))),128))])])}}};export{q as default};