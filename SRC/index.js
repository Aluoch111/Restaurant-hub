  setTimeout( welcomeMessage ,2000)
  function welcomeMessage(){
    let name1 =  prompt("Hello,what's your name?");
    alert(`Welcome to our site ${name1}`);
  }
  
// Subscribe button
   let btn = document.getElementById("btn" );
   btn.addEventListener("click" , () => {
   alert("Thank you for subscribing.")
   });

// Executes fetchData()
   let click = document.getElementById("api-data");
   click.addEventListener("click",fetchData );

   // Comment section
   const form = document.querySelector("form");
   form.addEventListener("submit", (e) => {

       e.preventDefault();
         const input = document.getElementById("input");
         const comment = document.getElementById("ul");
         const newComment = document.createElement("li");
         newComment.innerText = input.value;
         comment.appendChild(newComment);

         e.target.reset();
   });

   // Fetch Data from public API
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
           
            const items = data.data .map( api=> {
                return `

                 <div class = "menu">

                    <p> <img src = "${api.mainPhotoSrc}"  height ="185px"/> </p>
                    <br>
                    <p> Name : ${api.name}</p>
                    <p> Specials: ${api.servesCuisine}</p>
                    <p> Offers: ${api.bestOffer.name} </p>
                    <p> Price-range:${api.priceRange}</p>
                    <br>
                 </div> 
                `;
            })
           
            document.querySelector("#sample").insertAdjacentHTML("afterbegin", items);
            
        })
        .catch(err => console.error(err));
}
