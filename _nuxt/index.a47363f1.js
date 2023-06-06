import{_ as v}from"./Heading.d37bee83.js";import{_ as y}from"./nuxt-link.cc0e851e.js";import{_ as b,r as w,d as x,o as s,c as n,a,e as m,q as p,t as d,F as f,k as g,p as j,f as k,w as S,l as h,u as $,j as A,m as C}from"./entry.8cf8930e.js";import{u as I}from"./fetch.400e1924.js";const B=e=>(j("data-v-4373d055"),e=e(),k(),e),L={class:"card md:card-side bg-base-100"},F={class:"w-full md:w-1/3 h-48 md:h-auto relative object-cover object-center rounded"},q=["src"],z={class:"card-body md:w-1/2 py-1 px-5 flex flex-col justify-between"},G={class:"card-title"},N={class:""},R={class:"items-end"},D={class:"card-actions justify-end"},E=B(()=>a("p",{class:"my-0"},"Projects in this area:",-1)),H={class:"badge badge-secondary"},M={__name:"AreaCard",props:{area:{type:Object,required:!0},path:{type:String,required:!0}},setup(e){const t=e,o=w("");async function l(c){try{if((await fetch(c)).ok)return c;throw new Error("Image not found")}catch{return console.log("error detected"),`../images/areas/${t.area.image}`}}return x(async()=>{o.value=await l(`/images/areas/${t.area.image}`)}),(c,_)=>{const i=y;return s(),n("div",L,[a("figure",F,[a("img",{src:o.value,alt:"Area image",class:"absolute inset-0 object-cover w-full h-full"},null,8,q)]),a("div",z,[m(i,{to:`/areas/${e.area.id}/`},{default:p(()=>[a("h2",G,d(e.area.name),1),a("p",N,d(e.area.descriptionShort),1),a("p",R,"In this area we already invested: "+d(e.area.totalInvestment)+" €",1)]),_:1},8,["to"]),a("div",D,[E,(s(!0),n(f,null,g(e.area.projects,r=>(s(),n("div",{key:r.id},[m(i,{to:`/projects/${r.id}`},{default:p(()=>[a("div",H,d(r.name),1)]),_:2},1032,["to"])]))),128))])])])}}},U=b(M,[["__scopeId","data-v-4373d055"]]),V={class:"card-container"},J={__name:"index",async setup(e){let t,o;const{data:l}=([t,o]=S(()=>I(h().public.baseURL+"/areas","$Stmmz1SXB6")),t=await t,o(),t);return console.log("this is runtime config public baseurl: "+h().public.baseURL),$({title:"Areas - GreenCapital",meta:[{name:"description",content:"The purpose of a area page is to provide visitors with an overview of the areas involved in our company"},{name:"keywords",content:"projects, opportunities, investment, features"},{name:"Gabriele Lazzarelli, Luca Zanotto, Martina Del Basso, Francesca Arrigoni",content:"GreenCapital"}]}),(c,_)=>{const i=v,r=U;return s(),n("div",null,[m(i,{title:"Areas",class:"mb-0"}),a("div",V,[(s(!0),n(f,null,g(A(l),u=>(s(),C(r,{key:u.id,area:u,path:`/images/areas/${u.image}`},null,8,["area","path"]))),128))])])}}};export{J as default};