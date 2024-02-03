import{r as c,u as h,a as u,j as e,I as N,b as C,c as y,d as I,S as v,F as w,L as k,e as $,f as E,g as L}from"./index-WMnSV_ss.js";const S=i=>{const[l,t]=c.useState(0),r=h(s=>s.cart.items),n=i.item,{id:a,imageId:d,name:m,price:f,quantity:o}=n,x=u(),p=()=>{const s={...n,quantity:1};t(l+1),x(C(s))},b=()=>{if(l===0)return;const s={...n,quantity:1};t(l-1),x(y(s))},j=()=>{x(I(n.id))};return c.useEffect(()=>{const s=r.find(g=>a===g.id);t((s==null?void 0:s.quantity)||0)},[r,a]),e.jsxs("div",{className:"border-2 border-gray-300 p-2 mb-4  last:mb-[100px] flex justify-between rounded-md shadow-md",children:[e.jsxs("div",{className:"flex h-[150px] flex-col justify-start gap-2 w-40",children:[e.jsx("h1",{className:"text-lg font-semibold truncate text-gray-800",children:m}),e.jsx("div",{className:"w-full",children:e.jsx("img",{src:`${N}${d}`,alt:m,className:"w-full h-[110px] object-cover rounded-md border"})})]}),e.jsxs("div",{className:"flex flex-col items-end justify-between",children:[e.jsxs("h2",{className:"font-semibold text-gray-600",children:["Quantity: ",o]}),e.jsx("p",{className:"font-semibold",children:`₹${Math.floor(f/100)} x ${o} = ₹${Math.floor(f/100*o)}`}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsxs("div",{className:"px-2 py-[3px] bg-white rounded-full flex items-center space-x-4 border border-red-500",children:[e.jsx("button",{onClick:b,className:"text-sm",children:"-"}),e.jsx("span",{className:"text-green-500 font-semibold text-lg",children:l===0?"ADD":l}),e.jsx("button",{onClick:p,className:"text-sm",children:"+"})]}),e.jsx("button",{className:"text-xl font-semibold bg-red-500 text-white px-2 py-1 rounded-lg overflow-hidden mb-2 hover:bg-red-600",onClick:j,children:"Delete"})]})]})]})},D="/assets/cart-icon-KLu_lL1_.svg";function q(){const[i,l]=c.useState(!0),t=h(a=>a.cart.items),r=u();c.useEffect(()=>{const a=setTimeout(()=>{l(!1)},700);return()=>{clearTimeout(a)}},[]);const n=()=>{r(L())};return e.jsx(e.Fragment,{children:i?e.jsx(v,{}):e.jsxs("div",{className:`p-3 max-w-[800px] ${t.length===0?"":"min-h-[800px]"} mx-auto sm:px-[40px] relative mt-[90px]`,children:[t.length===0?e.jsxs("div",{children:[e.jsx("h1",{className:"text-center text-4xl font-bold",children:"Cart is Empty"}),e.jsx("img",{className:"w-60 mx-auto mt-10",src:D,alt:""})]}):e.jsxs("div",{children:[e.jsxs("h1",{className:"text-4xl mb-8 flex items-center gap-2 text-[#d74112] font-semibold",children:["Cart Items ",e.jsx(w,{color:""})]}),t.map((a,d)=>e.jsx(S,{item:{...a}},d))]}),e.jsxs("div",{className:`p-3 bg-white border-t  w-full fixed bottom-0 container flex mx-auto left-0 right-0  ${t.length===0?"justify-end":"justify-between"}`,children:[t.length!==0&&e.jsx("button",{className:"bg-green-500 px-2 py-1  md:p-3 font-semibold text-white rounded flex gap-2 text-base md:text-xl items-center uppercase",onClick:n,children:"Clear Cart"}),t.length===0?e.jsxs(k,{className:"bg-[#f97315] px-2 py-1  md:p-3font-semibold text-white rounded flex gap-2 ,text-base md:text-xl items-center",to:"/",children:["Add items",e.jsx($,{className:"md:text-3xl text-[20px]"})]}):e.jsxs("button",{className:"bg-[#f97315] px-2 py-1  md:p-3 font-semibold text-white rounded flex gap-2  text-base md:text-xl items-center",children:["Place order ",e.jsx(E,{className:"md:text-3xl text-[20px]"})]})]})]})})}export{q as default};