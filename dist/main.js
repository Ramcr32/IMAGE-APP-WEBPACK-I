(()=>{"use strict";let e=async(e,n,t,l)=>{document.getElementById("query").value;try{let o=await fetch(`https://api.unsplash.com/search/photos/?query=${n}&per_page=20&order_by=${t}&orientation=${l}&client_id=${e}`);return await o.json()}catch(e){console.log("err:",e)}},n=(e,n)=>{e.forEach((({alt_description:e,urls:{small:t}})=>{let l=document.createElement("div"),o=document.createElement("img"),c=document.createElement("h3");o.src=t,c.innerText=e,l.append(o,c),n.append(l)}))};const t="H45cD7zFEnXv0gs4QtDXZ86imf-7cX3quF4VCBhwrBo";document.getElementById("navbar").innerHTML='<div id="search_bar">\n    <input type="text" id="query" placeholder="type and press the Enter " />\n</div>\n<div id="categories">\n    <h3 id="nature">nature</h3>\n    <h3 id="cars">cars</h3>\n    <h3 id="music">music</h3>\n    <h3 id="cartoons">cartoons</h3>\n    <h3 id="technology">technology</h3>\n    <h3 id="marvel">marvel</h3>\n</div>';let l="latest",o="landscape";document.getElementById("query").addEventListener("keydown",(c=>{if("Enter"===c.key){var r=document.getElementById("query").value;e(t,r,l,o).then((e=>{console.log(e);let t=document.getElementById("container");t.innerHTML=null,n(e.results,t)}))}let d=document.getElementById("filter");d.addEventListener("change",(function(){o=d.value,e(t,r,l,o).then((e=>{console.log(e);let t=document.getElementById("container");t.innerHTML=null,n(e.results,t)})),console.log(o)}));let a=document.getElementById("sort");a.addEventListener("change",(function(){l=a.value,e(t,r,l,o).then((e=>{console.log(e);let t=document.getElementById("container");t.innerHTML=null,n(e.results,t)}))}))}));let c=document.getElementById("categories").children;for(let e of c)e.addEventListener("click",r);function r(){e(t,this.id,l,o).then((e=>{console.log(e);let t=document.getElementById("container");t.innerHTML=null,n(e.results,t)}));let c=document.getElementById("filter");c.addEventListener("change",(function(){o=c.value,e(t,value,l,o).then((e=>{console.log(e);let t=document.getElementById("container");t.innerHTML=null,n(e.results,t)})),console.log(o)}));let r=document.getElementById("sort");r.addEventListener("change",(function(){l=r.value,e(t,value,l,o).then((e=>{console.log(e);let t=document.getElementById("container");t.innerHTML=null,n(e.results,t)}))}))}})();