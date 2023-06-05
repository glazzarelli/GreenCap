import{_ as d}from"./Heading.c114a4ef.js";import{_ as m}from"./nuxt-link.25cc3987.js";import{_ as u,o as a,c as i,e as _,q as h,a as t,t as r,p as f,f as g,w as v,u as x,F as y,k as w,j as b,l as k,m as C}from"./entry.f7f78e69.js";import{u as $}from"./fetch.1d897597.js";const P=e=>(f("data-v-7f90ac73"),e=e(),g(),e),B={class:"relative"},I={class:"card card-compact image-full max-w-md mx-auto"},F={class:"relative"},L=["src"],S={class:"absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center p-2"},j={class:"card-title justify-center font-semibold text-shadow"},z=P(()=>t("div",{class:"card-body text-center mt-28"},null,-1)),G={__name:"PersonCard",props:{person:{type:Object,required:!0}},setup(e){return(o,s)=>{const n=m;return a(),i("div",B,[_(n,{to:`/people/${e.person.id}`},{default:h(()=>[t("div",I,[t("figure",F,[t("img",{src:`images/people/${e.person.image}`,alt:"Person Image"},null,8,L),t("figcaption",S,[t("h2",j,r(e.person.name)+" "+r(e.person.surname),1)])]),z])]),_:1},8,["to"])])}}},T=u(G,[["__scopeId","data-v-7f90ac73"]]),q={class:"card-container"},E={__name:"index",async setup(e){let o,s;const{data:n}=([o,s]=v(()=>$(k().public.baseURL+"/people","$86ry0ThwyT")),o=await o,s(),o);return x({title:"People - GreenCapital",meta:[{name:"description",content:"The purpose of a people page is to provide visitors with an overview of the individuals involved in the organization or community, highlighting their expertise, achievements, and contributions."},{name:"keywords",content:"people, expertise, team, profiles"},{name:"Gabriele Lazzarelli, Luca Zanotto, Martina Del Basso, Francesca Arrigoni",content:"GreenCapital"}]}),(A,D)=>{const l=d,p=T;return a(),i("div",null,[_(l,{title:"People"}),t("div",q,[(a(!0),i(y,null,w(b(n),c=>(a(),C(p,{person:c,key:c.id},null,8,["person"]))),128))])])}}};export{E as default};
