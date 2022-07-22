function myFunction(){

    var input = document.getElementById('myFilter');
    //console.log("1" + input);
    var filter = input.value.toUpperCase();
    //console.log("2" + filter);

    var allCards = document.getElementById('myCards');
    console.log(allCards);
    //document.write(allCards);

    cards = allCards.getElementsByClassName('card');
    //console.log(cards);

    for(i=0; i<cards.length; i++){
        var title = cards[i].querySelector('.card-title');
         console.log(title);
        // console.log(title.innerText.toUpperCase().indexOf(filter) > -1);
        if(title.innerText.toUpperCase().indexOf(filter) > -1){
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none";
        }
    }
    
   
}

// myFunction()


// let cards = document.querySelectorAll(".card")
// let input = document.querySelector("#myFilter")

// // input.addEventListener("change", (e)=> {
// //    console.log(e);
// // })

// input.addEventListener('keyup', (event) => {
// // console.log(event.target.value);

// for (let i = 0; i < cards.length; i++) {
//     // if(cards[i].)
//     // console.log(cards[i].innerText);
//     if(cards[i].innerText.toLowerCase().includes(event.target.value.toLowerCase())){
//         cards[i].style.display = "block"
//     } else{
//         cards[i].style.display = "none"
//     }
    
// }



// });