(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{7290:function(e,t,a){Promise.resolve().then(a.bind(a,9136))},7832:function(e,t,a){"use strict";a.d(t,{Z:function(){return Components_Navbar}});var r=a(7437),n=a(1396),s=a.n(n);a(2265);var i=a(4606),l=a(1490),Components_Logout=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>{l.Z.remove("UserId"),window.location.reload()},className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600 rounded md:bg-transparent md:p-0",children:"Log Out"})})}),Components_Navbar=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:(0,r.jsx)("nav",{className:"fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:(0,r.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,r.jsx)(s(),{href:"/dashboard",className:"flex items-center",children:(0,r.jsx)("span",{className:"self-center text-xl font-semibold font-serif px-3 whitespace-nowrap text-gray-700",children:"Chit-Chat"})}),(0,r.jsx)("div",{className:"w-full md:w-auto",id:"navbar-default",children:(0,r.jsxs)("ul",{className:"flex flex-row flex-wrap p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-400",children:[(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/organization",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"Organizations"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/addAIData",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"Train Data"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"https://github.com/apurvjha123",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"https://github.com/apurvjha123/chit-chat-nextjs",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(i.rFR,{className:"p-1 text-xl"}),"Contribute"]})})}),(0,r.jsx)(Components_Logout,{})]})})]})})})})},9947:function(e,t,a){"use strict";a.d(t,{$9:function(){return getOrganizationById},Fi:function(){return addOrganization},Mo:function(){return SignUp},XU:function(){return getAiModelById},gx:function(){return Auth}});var r=a(2173);let getOrganizationById=async()=>{let e=await r.Z.get("https://chit-chat.tech/api/v1/getOrganizationById",{withCredentials:!0});return e.data},getAiModelById=async()=>{let e=await r.Z.get("https://chit-chat.tech/api/v1/getAiModelById",{withCredentials:!0});return e.data},addOrganization=async e=>{let t=await r.Z.post("https://chit-chat.tech/api/v1/newOrganization",e);return t},Auth=async e=>{let t=await r.Z.post("https://chit-chat.tech/register/login",e,{withCredentials:!0});return t},SignUp=async e=>{let t=await r.Z.post("https://chit-chat.tech/register/signup",e,{withCredentials:!0});return t}},9136:function(e,t,a){"use strict";a.r(t);var r=a(7437),n=a(2265),s=a(7832),i=a(171),l=a(9150),o=a(4033),d=a(9947),c=a(1396),h=a.n(c);t.default=()=>{let e=(0,o.useRouter)(),[t,a]=(0,n.useState)(!1),[c,p]=(0,n.useState)({UserName:"",UserEmail:"",Password:""}),handleChange=e=>{p({...c,[e.target.name]:e.target.value})},handleSubmit=async t=>{var r;t.preventDefault(),a(!0);let n=await (0,d.Mo)(c);a(!1),(null===(r=n.data)||void 0===r?void 0:r.status)=="Success"?((0,i.Am)("Organization Submitted !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),e.push("/organization")):i.Am.error("User Already Exist!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-opacity-50 sm:pt-24 pt-30",children:(0,r.jsxs)("form",{onSubmit:handleSubmit,className:"p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10",style:{backdropFilter:"blur(4px)"},children:[(0,r.jsx)("div",{className:"text-gray-950 flex justify-center text-2xl",children:"Sign Up"}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-600",children:"UserName"}),(0,r.jsx)("input",{type:"text",name:"UserName",required:!0,minLength:6,onChange:handleChange,className:"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-pink-500"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-600",children:"Email"}),(0,r.jsx)("input",{type:"email",name:"UserEmail",required:!0,onChange:handleChange,className:"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-pink-500"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-600",children:"Password"}),(0,r.jsx)("input",{type:"password",name:"Password",required:!0,minLength:6,maxLength:12,onChange:handleChange,title:"Please enter a 10-digit mobile number",className:"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none  focus:border-pink-500"})]}),t?(0,r.jsx)("button",{disabled:!0,className:"w-full flex justify-center py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700",children:(0,r.jsx)(l.Z7b,{className:"animate-spin"})}):(0,r.jsx)("button",{className:"w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700",children:"Submit"}),(0,r.jsxs)("p",{className:"font-sans font-normal flex justify-center p-2",children:["Already Have Account  ",(0,r.jsx)(h(),{href:"/login",className:"text-sky-500 underline italic pl-2",children:"Login"})]})]})})]})}},4033:function(e,t,a){e.exports=a(290)}},function(e){e.O(0,[447,712,438,563,971,864,744],function(){return e(e.s=7290)}),_N_E=e.O()}]);