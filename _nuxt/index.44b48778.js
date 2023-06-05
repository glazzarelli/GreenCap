import{_ as C}from"./Heading.c9f01121.js";import{_ as L}from"./nuxt-link.e681f634.js";import{o as n,c as a,e as j,q as $,a as e,t as _,F as x,k as y,C as S,w as D,D as b,r as g,u as N,A as h,j as c,s as B,E as P,x as R,y as V,l as z,m as E}from"./entry.670d053b.js";import{u as F}from"./fetch.f4b94d70.js";const M={class:"card w-96 bg-base-100 shadow-xl"},G=["src"],q={class:"card-body"},H={class:"card-title"},U=e("p",null,"Areas",-1),I={class:"card-actions justify-end"},O={class:"badge badge-secondary"},Q={__name:"ProjectCard",props:["project"],setup(i){return(m,v)=>{const r=L;return n(),a("div",M,[j(r,{to:`/projects/${i.project.id}`},{default:$(()=>[e("figure",null,[e("img",{src:`/images/projects/${i.project.image}`,alt:"Startup Logo"},null,8,G)])]),_:1},8,["to"]),e("div",q,[e("h2",H,_(i.project.name),1),e("p",null,_(i.project.descriptionShort),1),e("p",null,"Minimum investment: "+_(i.project.investment)+" €",1),U,e("div",I,[(n(!0),a(x,null,y(i.project.areas,p=>(n(),a("div",{key:p},[j(r,{to:`/areas/${p.id}`},{default:$(()=>[e("div",O,_(p.name),1)]),_:2},1032,["to"])]))),128))])])])}}},T={class:"flex flex-col items-center mb-10 mx-10 sm:mx-20"},Z={class:"btn-group w-3/5 lg:w-2/4 btn-group-horizontal justify-center"},J={key:0,class:"form-control sm:max-w-sm"},K=e("label",{class:"label"},[e("span",{class:"label-text"},"Select by area:")],-1),W=e("option",{value:""},"All Areas",-1),X=["value"],Y={key:0,class:"card-container"},ee={key:1},te=e("p",{class:"justify-center flex font-semibold"},"No projects found",-1),se=[te],le={__name:"index",async setup(i){let m,v;const{data:r}=S(([m,v]=D(()=>F(z().public.baseURL+"/projects","$olQ4jpDRvq")),m=await m,v(),m)),p=b(()=>{const o=r.flatMap(t=>t.areas.map(u=>u.name));return[...new Set(o)]}),l=g("");b(()=>r?r.map(t=>({name:t.person.name,surname:t.person.surname})).filter((t,u,f)=>u===f.findIndex(s=>s.name===t.name&&s.surname===t.surname)):[]),g({name:"",surname:""});const d=g("true");function k(o){d.value=o}function A(){d.value=!1,l.value=""}const w=b(()=>{let o=r;return l.value!==""&&(o=o.filter(t=>t.areas.some(u=>u.name===l.value))),d.value&&(o=r.slice(3,6),l.value=""),o});return N({title:"Projects - GreenCapital",meta:[{name:"description",content:"Discover our innovative projects that showcase our commitment to excellence and innovation. Our projects encompass a wide range of industries and demonstrate our expertise in delivering exceptional solutions. "},{name:"keywords",content:"innovations, expertise, team, success"},{name:"Gabriele Lazzarelli, Luca Zanotto, Martina Del Basso, Francesca Arrigoni",content:"GreenCapital"}]}),(o,t)=>{const u=C,f=Q;return n(),a("div",null,[j(u,{title:"Projects"}),e("div",T,[e("div",Z,[e("button",{onClick:t[0]||(t[0]=s=>k(!0)),class:h(["btn btn-outline btn-block text-lg",{"btn-active":c(d)}])},"RELEVANT",2),e("button",{onClick:t[1]||(t[1]=s=>A()),class:h(["btn btn-outline btn-block text-lg",{"btn-active":!c(d)}])},"ALL",2)]),c(d)?V("",!0):(n(),a("div",J,[K,B(e("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>R(l)?l.value=s:null),class:h(["select select-bordered w-full",{"select-primary":c(l).value!==""}]),label:"Areas"},[W,(n(!0),a(x,null,y(c(p),s=>(n(),a("option",{value:s},_(s),9,X))),256))],2),[[P,c(l)]])]))]),c(w).length>0?(n(),a("div",Y,[(n(!0),a(x,null,y(c(w),s=>(n(),E(f,{project:s},null,8,["project"]))),256))])):(n(),a("div",ee,se))])}}};export{le as default};
