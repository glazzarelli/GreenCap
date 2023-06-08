import{_ as u}from"./Heading.da48c78c.js";import{d as p,u as f,r as g,c as r,e as b,a as e,s as x,v as h,j as s,x as y,t as _,y as v,z as w,o as c}from"./entry.b83e99cd.js";import{u as k}from"./useEmailValidation.08911898.js";import"./nuxt-link.9b060dc8.js";const E={class:"container mx-auto px-5 flex sm:flex-nowrap flex-wrap"},C=e("div",{class:"lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"},[e("iframe",{class:"absolute inset-0",style:{filter:"grayscale(1) contrast(1.2) opacity(0.4)"},title:"map",marginheight:"0",marginwidth:"0",scrolling:"no",src:"https://maps.google.com/maps?width=100%&height=600&hl=en&q=Politecnico,Milan+Italy&ie=UTF8&t=&z=14&iwloc=B&output=embed",width:"100%",height:"100%",frameborder:"0"}),e("div",{class:"bg-base-100 relative flex flex-wrap py-6 rounded shadow-md"},[e("div",{class:"lg:w-1/2 px-6"},[e("h2",{class:"title-font font-semibold tracking-widest text-xs",style:{opacity:"1"}},"ADDRESS"),e("p",{class:"mt-1 font-bold opacity-100"},"piazza Leonardo da Vinci, 42 MILANO (MI), Italia")]),e("div",{class:"lg:w-1/2 px-6 mt-4 lg:mt-0"},[e("h2",{class:"title-font font-semibold tracking-widest text-xs",style:{opacity:"1"}},"EMAIL"),e("a",{class:"leading-relaxed font-bold opacity-100"},"example@email.com"),e("h2",{class:"title-font font-semibold tracking-widest text-xs mt-4",style:{opacity:"1"}},"PHONE"),e("p",{class:"leading-relaxed font-bold opacity-100"},"123-456-7890")])])],-1),M={class:"lg:w-1/3 md:w-1/2 bg-base-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"},z=e("h2",{class:"text-lg mb-1 font-bold title-font"},"Feedback",-1),D=e("p",{class:"leading-relaxed mb-5"},"Please leave us a note and we'll get back to you via email ",-1),I={class:"relative mb-2"},N=e("label",{for:"email",class:"leading-7 text-sm"},"Email",-1),V={key:0,class:"text-red-500 mt-2"},B=e("div",{class:"relative mb-4"},[e("label",{for:"message",class:"leading-7 text-sm"},"Message"),e("textarea",{id:"message",name:"message",class:"w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})],-1),q=e("h3",{class:"font-bold text-lg"},"Feedback sent!",-1),A=e("p",{class:"py-4"},"Thank for your feedback, it helps improve our services.",-1),F=e("p",{class:"text-xs font-medium text-900 mt-3"},"You will get an answer as soon as possible by our team.",-1),T={__name:"contact",setup(S){const{email:a,emailError:i}=k();p(()=>{f({title:"Contact Us - GreenCapital",meta:[{name:"description",content:"Contact us for inquiries, feedback, or any other questions you may have. Get in touch with our team and we will be happy to assist you."},{name:"keywords",content:"contact us, inquiries, feedback, customer support"}]})});const o=g(!1);function n(){o.value=!o.value}return(d,t)=>{const m=u;return c(),r("div",null,[b(m,{title:"Contact Us"}),e("div",E,[C,e("div",M,[z,D,e("div",I,[N,x(e("input",{type:"email",id:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=l=>y(a)?a.value=l:null),onInput:t[1]||(t[1]=(...l)=>d.validateEmail&&d.validateEmail(...l)),class:"w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,544),[[h,s(a)]]),s(i)?(c(),r("p",V,_(s(i)),1)):v("",!0)]),B,e("button",{class:"btn btn-accent font-bold",onClick:n},"SEND FEEDBACK"),e("div",{class:w(["modal modal-bottom sm:modal-middle",{"modal-open":s(o)}])},[e("div",{class:"modal-box"},[q,A,e("div",{class:"modal-action"},[e("button",{class:"btn",onClick:n}," Close ")])])],2),F])])])}}};export{T as default};