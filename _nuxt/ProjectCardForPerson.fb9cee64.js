import{_ as d}from"./nuxt-link.28d6de8c.js";import{_ as i,r as p,d as l,o as m,c as u,e as f,q as g,a as e,j as h,t as a}from"./entry.924ba5ce.js";const j={class:"card"},x=["src"],y={class:"card-body"},v={class:"card-title"},w={class:"card-text"},k={__name:"ProjectCardForPerson",props:["project"],setup(t){const{project:c}=t,s=p("");async function n(o){try{if((await fetch(o)).ok)return o;throw new Error("Image not found")}catch{return`../images/projects/${c.image}`}}return l(async()=>{s.value=await n(`/images/projects/${c.image}`)}),(o,r)=>{const _=d;return m(),u("div",j,[f(_,{to:`/projects/${t.project.id}/`},{default:g(()=>[e("img",{src:h(s),alt:"Startup Logo",class:"card-img-top"},null,8,x),e("div",y,[e("h2",v,a(t.project.name),1),e("p",w,a(t.project.descriptionShort),1)])]),_:1},8,["to"])])}}},B=i(k,[["__scopeId","data-v-cc228dc4"]]);export{B as _};
