import{_ as c}from"./Heading.ddb06899.js";import{d as m,u,c as n,e as p,a as e,s as g,v as f,j as o,x as b,t as x,y,g as h,o as d}from"./entry.1c00b5b2.js";import{u as w}from"./useEmailValidation.ce25c297.js";import"./nuxt-link.cfcf244d.js";const _={class:"container mx-auto px-5 flex sm:flex-nowrap flex-wrap"},v=e("div",{class:"lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"},[e("iframe",{class:"absolute inset-0",style:{filter:"grayscale(1) contrast(1.2) opacity(0.4)"},title:"map",marginheight:"0",marginwidth:"0",scrolling:"no",src:"https://maps.google.com/maps?width=100%&height=600&hl=en&q=Politecnico,Milan+Italy&ie=UTF8&t=&z=14&iwloc=B&output=embed",width:"100%",height:"100%",frameborder:"0"}),e("div",{class:"bg-base-100 relative flex flex-wrap py-6 rounded shadow-md"},[e("div",{class:"lg:w-1/2 px-6"},[e("h2",{class:"title-font font-semibold tracking-widest text-xs",style:{opacity:"1"}},"ADDRESS"),e("p",{class:"mt-1 font-bold opacity-100"},"piazza Leonardo da Vinci, 42 MILANO (MI), Italia")]),e("div",{class:"lg:w-1/2 px-6 mt-4 lg:mt-0"},[e("h2",{class:"title-font font-semibold tracking-widest text-xs",style:{opacity:"1"}},"EMAIL"),e("a",{class:"leading-relaxed font-bold opacity-100"},"example@email.com"),e("h2",{class:"title-font font-semibold tracking-widest text-xs mt-4",style:{opacity:"1"}},"PHONE"),e("p",{class:"leading-relaxed font-bold opacity-100"},"123-456-7890")])])],-1),E={class:"lg:w-1/3 md:w-1/2 bg-base-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"},k=e("h2",{class:"text-lg mb-1 font-bold title-font"},"Feedback",-1),M=e("p",{class:"leading-relaxed mb-5"},"Please leave us a note and we'll get back to you via email ",-1),N={class:"relative mb-2"},V=e("label",{for:"email",class:"leading-7 text-sm"},"Email",-1),C={key:0,class:"text-red-500 mt-2"},D=h('<div class="relative mb-4"><label for="message" class="leading-7 text-sm">Message</label><textarea id="message" name="message" class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea></div><button class="btn btn-accent font-bold">SEND FEEDBACK</button><p class="text-xs font-medium text-900 mt-3">You will get an answer as soon as possible by our team.</p>',3),A={__name:"contact",setup(I){const{email:a,emailError:i}=w();return m(()=>{u({title:"Contact Us - GreenCapital",meta:[{name:"description",content:"Contact us for inquiries, feedback, or any other questions you may have. Get in touch with our team and we will be happy to assist you."},{name:"keywords",content:"contact us, inquiries, feedback, customer support"}]})}),(l,t)=>{const r=c;return d(),n("div",null,[p(r,{title:"Contact Us"}),e("div",_,[v,e("div",E,[k,M,e("div",N,[V,g(e("input",{type:"email",id:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=s=>b(a)?a.value=s:null),onInput:t[1]||(t[1]=(...s)=>l.validateEmail&&l.validateEmail(...s)),class:"w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,544),[[f,o(a)]]),o(i)?(d(),n("p",C,x(o(i)),1)):y("",!0)]),D])])])}}};export{A as default};