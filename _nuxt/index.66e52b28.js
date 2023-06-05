import{_ as v}from"./Heading.75a6dffe.js";import{_ as y}from"./nuxt-link.b2459cf2.js";import{_ as b,r as w,d as x,o,c as n,a,e as m,q as p,t as d,F as f,k as g,p as $,f as j,w as k,l as h,u as S,j as A,m as C}from"./entry.fb349575.js";import{u as I}from"./fetch.1883d272.js";const B=e=>($("data-v-9de74ac7"),e=e(),j(),e),L={class:"card md:card-side bg-base-100"},F={class:"w-full md:w-1/3 h-48 md:h-auto relative object-cover object-center rounded"},q=["src"],z={class:"card-body md:w-1/2 py-1 px-5 flex flex-col justify-between"},G={class:"card-title"},N={class:""},R={class:"items-end"},D={class:"card-actions justify-end"},E=B(()=>a("p",{class:"my-0"},"Projects in this area:",-1)),H={class:"badge badge-secondary"},M={__name:"AreaCard",props:{area:{type:Object,required:!0},path:{type:String,required:!0}},setup(e){const t=e,s=w("");async function l(c){try{if((await fetch(c)).ok)return c;throw new Error("Image not found")}catch{return s.value=`../images/areas/${t.area.image}`,`./images/areas/'${t.area.image}`}}return x(async()=>{s.value=await l(`../images/areas/${t.area.image}`)}),(c,_)=>{const i=y;return o(),n("div",L,[a("figure",F,[a("img",{src:s.value,alt:"Area image",class:"absolute inset-0 object-cover w-full h-full"},null,8,q)]),a("div",z,[m(i,{to:`/areas/${t.area.id}/`},{default:p(()=>[a("h2",G,d(e.area.name),1),a("p",N,d(e.area.descriptionShort),1),a("p",R,"In this area we already invested: "+d(e.area.totalInvestment)+" €",1)]),_:1},8,["to"]),a("div",D,[E,(o(!0),n(f,null,g(e.area.projects,r=>(o(),n("div",{key:r.id},[m(i,{to:`/projects/${r.id}`},{default:p(()=>[a("div",H,d(r.name),1)]),_:2},1032,["to"])]))),128))])])])}}},U=b(M,[["__scopeId","data-v-9de74ac7"]]),V={class:"card-container"},J={__name:"index",async setup(e){let t,s;const{data:l}=([t,s]=k(()=>I(h().public.baseURL+"/areas","$Stmmz1SXB6")),t=await t,s(),t);return console.log("this is runtime config public baseurl: "+h().public.baseURL),S({title:"Areas - GreenCapital",meta:[{name:"description",content:"The purpose of a area page is to provide visitors with an overview of the areas involved in our company"},{name:"keywords",content:"projects, opportunities, investment, features"},{name:"Gabriele Lazzarelli, Luca Zanotto, Martina Del Basso, Francesca Arrigoni",content:"GreenCapital"}]}),(c,_)=>{const i=v,r=U;return o(),n("div",null,[m(i,{title:"Areas",class:"mb-0"}),a("div",V,[(o(!0),n(f,null,g(A(l),u=>(o(),C(r,{key:u.id,area:u,path:`images/areas/${u.image}`},null,8,["area","path"]))),128))])])}}};export{J as default};