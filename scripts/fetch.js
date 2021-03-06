let searchImages =async (api,value,sort,filter)=>{
    let query=document.getElementById("query").value;

    try{
        let res= await fetch(
            `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=${sort}&orientation=${filter}&client_id=${api}`);

        let data=await res.json();
        // console.log(data)
        return data
    }catch(err){
        console.log("err:", err)
    }
}

let append =(data,container)=>{
    data.forEach(({alt_description,urls:{small}})=>{
        let div=document.createElement("div")
        let img=document.createElement("img");
        let h3=document.createElement("h3")

        img.src=small;
        h3.innerText=alt_description;
        div.append(img,h3)
        container.append(div)
    })
}


export {searchImages ,append}