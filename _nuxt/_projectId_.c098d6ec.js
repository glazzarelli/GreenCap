import{_ as b}from"./Heading.daef320a.js";import{_ as m}from"./nuxt-link.919e6eaa.js";import{h as j,w as y,i as k,u as C,c as a,e as i,k as s,a as e,t as n,F as l,l as _,C as P,s as u,m as B,o as r}from"./entry.243a4834.js";import{u as I}from"./fetch.74865462.js";import{u as p}from"./useImages.93a3c940.js";const L={class:"px-4 sm:px-6 lg:px-8 py-14 mx-auto"},N={class:"flex flex-wrap"},S={class:"lg:w-1/3 lg:min-w-[360px] w-full h-full object-center md:mx-auto lg:mt-6",alt:"project image"},$=["src"],A={class:"lg:w-2/3 w-full md:mx-auto md:mt-8 lg:px-5 py-0 mt-4 flex flex-wrap md:flex-nowrap"},F={class:"lg:w-2/3 w-full"},M={class:"leading-relaxed mt-0"},R={class:"col-start-5"},V=e("h2",{class:"card-subtitle mb-2"},"Areas: ",-1),z={class:"card-actions"},D={class:"badge badge-secondary"},E={class:"items-end",style:{"font-weight":"bold","font-size":"18px"}},H=e("br",null,null,-1),T={class:"lg:w-1/3 w-full flex flex-col items-center mt-3"},G={class:"mb-5"},O={class:"avatar"},U={class:"w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"},q=["src"],J=e("br",null,null,-1),K=e("p",{class:"mt-0"},"Team Members: ",-1),Q={class:"flex mt-6 pb-5 border-b-2 border-gray-100 mb-5"},ae={__name:"[projectId]",async setup(W){let c,d;const{projectId:h}=j().params,{data:t}=([c,d]=y(()=>I(B().public.baseURL+`/projects/${h}`,"$zo2MABbjjt")),c=await c,d(),c);if(!t.value)throw k({statusCode:404,statusMessage:"Project not found",fatal:!0});const f=p("projects",t.value.name),g=p("people",t.value.person.image.replace(".jpg",""));return C({title:"Projects - GreenCapital",meta:[{name:"description",content:"Discover our innovative projects that showcase our commitment to excellence and innovation. Our projects encompass a wide range of industries and demonstrate our expertise in delivering exceptional solutions. "},{name:"keywords",content:"innovations, expertise, team, success"}]}),(X,Y)=>{const x=b,v=m,w=m;return r(),a(l,null,[i(x,{title:"Projects / "+s(t).name},null,8,["title"]),e("section",L,[e("div",N,[e("figure",S,[e("img",{src:s(f),class:"mx-auto object-cover rounded",alt:"project image"},null,8,$)]),e("div",A,[e("div",F,[e("p",M,n(s(t).descriptionLong),1),e("div",R,[V,e("div",z,[(r(!0),a(l,null,_(s(t).areas,o=>(r(),a("div",{key:o},[i(v,{to:`/areas/${o.id}`},{default:u(()=>[e("div",D,n(o.name),1)]),_:2},1032,["to"])]))),128)),e("p",E,[H,P(" In this project the minimum investment is: "+n(s(t).investment)+" € ",1)])])])]),e("div",T,[e("h2",G,"Supervisor: "+n(s(t).person.name)+" "+n(s(t).person.surname),1),i(w,{to:`/people/${s(t).person.id}/`},{default:u(()=>[e("div",O,[e("div",U,[e("img",{src:s(g),alt:"Supervisor image",class:"object-cover rounded-full"},null,8,q)])])]),_:1},8,["to"]),J,K,e("div",Q,[e("ol",null,[(r(!0),a(l,null,_(s(t).team,(o,Z)=>(r(),a("li",{key:o},n(o),1))),128))])])])])])])],64)}}};export{ae as default};
