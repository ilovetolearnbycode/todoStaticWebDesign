// listening to the description box click!!!
let popupDescription = document.querySelector('.description-popup');
let descriptionButton = document.querySelector('.description');
let popupDescriptionState = false;
descriptionButton.addEventListener('click',e=>{
  e.preventDefault();
  if(!popupDescriptionState){
    popupDescription.style.display = "flex";
    popupDescriptionState = true;
  }else{
    popupDescription.style.display = "none";
    popupDescriptionState = false;
  }
});
