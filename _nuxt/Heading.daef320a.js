import{_ as f}from"./nuxt-link.919e6eaa.js";import{_ as h,E as l,h as g,o as s,c as n,a as x,F as k,l as y,e as v,s as N,C as V,t as B,k as u,z as C}from"./entry.243a4834.js";const E={class:"flex items-center justify-center"},R={key:0},j={__name:"Heading",props:{title:String},setup(i){const{title:p}=i,m=l(()=>p.split(" / ")),c=g().fullPath,d=c.split("/").slice(0,2).join("/")+"/",_=l(()=>{const a=[];let t="";return m.value.forEach((o,e)=>{e===0?t=d:e===1&&(t=c),a.push({name:o,path:t})}),a});return(a,t)=>{const o=f;return s(),n("div",E,[x("h1",null,[(s(!0),n(k,null,y(u(_),(e,r)=>(s(),n("span",{key:r},[v(o,{class:"link",to:`${e.path}`},{default:N(()=>[V(B(e.name),1)]),_:2},1032,["to"]),r<u(_).length-1?(s(),n("span",R," / ")):C("",!0)]))),128))])])}}},L=h(j,[["__scopeId","data-v-72446d5a"]]);export{L as _};
