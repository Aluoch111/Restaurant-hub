  setTimeout( welcomeMessage ,3000)
  function welcomeMessage(){
    let name1 =  prompt("Hello,what's your name?");
    alert(`Welcome to our site ${name1}`);
  }
  

   let btn = document.getElementById("btn" );
   btn.addEventListener("click" , () => {
   alert("Thank you for subscribing.")
   });


   let click = document.getElementById("api-data");
   click.addEventListener("click",fetchData );
   
   let form = document.querySelector("form");
   form.addEventListener("submit", (e) => {

      e.preventDefault();

       const input = document.getElementById("input");
       const comments = document.getElementById("ul");
       const newComment = document.createElement("li");
       newComment.innerHTML = input.value;
       comments.appendChild(newComment);
   });

 
      





   
function fetchData(){
    const options = {
        method: 'GET',
        headers: {
           'X-RapidAPI-Key': '1c5476fc26mshed3810bef19629bp1c44ecjsn5eaf3d529c49',
           'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
        }
     };
     
     fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156', options)
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            const items = data.data .map( api=> {
                return `

                 <div class = "menu">

                    <p> <img src = "${api.mainPhotoSrc}"  height = " 184px"/> </p>
                    <br>
                    <p> Name : ${api.name}</p>
                    <p> Specials: ${api.servesCuisine}</p>
                    <p> Offers: ${api.bestOffer.name} </p>
                    <p> Price-range:${api.priceRange}</p>
                    <br>
                 </div> 
                `;
            })
           
            .join("");
            console.log (items);
            document.querySelector("#menu").insertAdjacentHTML("afterbegin", items);
            
        })
        .catch(err => console.error(err));
}


