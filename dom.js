//add element 
//compteur ajout +1 

let plusBtn = document.getElementsByClassName('btn-plus');

console.log(plusBtn);

for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
  });

}


//diminuer 

let minusBtn = document.getElementsByClassName('btn-moins');
for(let minus of minusBtn){

minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
}

})

};


//delete:


let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i < deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
       
    })
 
}


//style heart 
let hearts = document.getElementsByClassName('fa-heart');
console.log(hearts)

for (let heart of hearts){

  heart.addEventListener('click', function(){

 if ( heart.style.color === "gray"){
   heart.style.color = "red"
 } else {
   heart.style.color ="gray"
 }



  })

}