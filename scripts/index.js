//access key
const api="H45cD7zFEnXv0gs4QtDXZ86imf-7cX3quF4VCBhwrBo";
//key
//W59Ezq8b7BAqetuoP_x_EZKJ-2vdiOGPs0_KU5m8iAo
//link=<https://api.unsplash.com/search/photos?&query=office>
//  api=`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=H45cD7zFEnXv0gs4QtDXZ86imf-7cX3quF4VCBhwrBo`;

import { navbar } from "../components/navbar.js";
import { searchImages, append } from "./fetch.js"
let n=document.getElementById("navbar");

n.innerHTML=navbar();
let sortt="latest";
let filter="landscape";
    let search =(e)=>{
        if(e.key==="Enter"){
            var value=document.getElementById("query").value

            searchImages(api,value,sortt,filter).then((res)=>{
                console.log(res);
                let container=document.getElementById("container");
                container.innerHTML=null;
                append(res.results,container)

            })
        }
        let fil=document.getElementById("filter")

        fil.addEventListener("change",filt_)
        function filt_(){
            filter=fil.value;
            searchImages(api,value,sortt,filter).then((res)=>{
                console.log(res);
                let container=document.getElementById("container");
                container.innerHTML=null;
                append(res.results,container)

            })
            console.log(filter)


        }
        let sort=document.getElementById("sort")

        sort.addEventListener("change",sSort)
        function sSort(){
            sortt=sort.value;
            searchImages(api,value,sortt,filter).then((res)=>{
                console.log(res);
                let container=document.getElementById("container");
                container.innerHTML=null;
                append(res.results,container)

            })

        }
    };
    document.getElementById("query").addEventListener("keydown",search)
// let searchImages=async ()=>{
//     let query=document.getElementById("query").value;
//     try{
//         let res= await fetch(
//             `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=H45cD7zFEnXv0gs4QtDXZ86imf-7cX3quF4VCBhwrBo`);

//         let data=await res.json();
//         console.log(data)
//     }catch(err){
//         console.log("err:", err)
//     }
// }

let categories= document.getElementById("categories").children;
for(let el of categories){
    el.addEventListener("click",cSearch)
}
function cSearch(){
    // console.log(this.id)
   
    searchImages(api,this.id,sortt,filter).then((res)=>{
        console.log(res);
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(res.results,container)

    });

}

