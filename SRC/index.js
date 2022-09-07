  // document.addEventListener("DOMContentLoaded" ,() => {
   //    let name1 =  prompt("Hello,what's your name?");
   //    alert(`Welcome to our site ${name1}`);
   // })
   


   let btn = document.getElementById("btn" );
   btn.addEventListener("click" , () => {
   alert("Thank you for subscribing.")
   });
   

   const options = {
     method: 'GET',
     headers: {
        'X-RapidAPI-Key': '1c5476fc26mshed3810bef19629bp1c44ecjsn5eaf3d529c49',
        'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
     }
  };
  
  fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156', options)
     .then(response => response.json())
     .then(response => console.log(response))
     .catch(err => console.error(err));