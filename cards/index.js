let card = document.getElementById("main_container")
fetch('https://jsonplaceholder.typicode.com/users').
    then((response)=>response.json()).
    then((data)=>populateData(data))
    function populateData(fechedData){
        
        fechedData.forEach((data) => {
            console.log(data)
              let card_data = document.createElement("div")
               card_data.innerHTML = `
               <div>
                   <div>${data.id}</div> 
                   <div>${data.name}</div> 
                   <div>${data.website}</div>       
                   <div>${data.phone}</div> 
               </div>`
               card_data.style.border = "1px solid black"
               card_data.setAttribute("class","data_div")
           card.appendChild(card_data)      
        });
       
    }
     