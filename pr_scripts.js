function Change(Element) {

  let elements = document.querySelectorAll(".btn-history-nav-active");

  let Holder = document.getElementById("history-holder");

  document.getElementById("location-img").src="location_light.svg";
    document.getElementById("person-img").src="person_light.svg";
    document.getElementById("history-img").src="history_light.svg";
    document.getElementById("equipment-img").src="equipment_light.svg";

  if (Element.classList.contains("btn-history-nav-inactive")){
    Element.classList.remove("btn-history-nav-inactive") ;
    Element.classList.add("btn-history-nav-active") ;
    
    if (Element.id == "btn-location") {
      document.getElementById("location-img").src="location_dark.svg";
    }

    if (Element.id == "btn-person") {
      document.getElementById("person-img").src="person_dark.svg";
    }

    if (Element.id == "btn-history") {
      document.getElementById("history-img").src="history_dark.svg";
    }

    if (Element.id == "btn-equipment") {
      document.getElementById("equipment-img").src="equipment_dark.svg";
    }

    if (Holder.classList.contains("btn-location")){
      Holder.classList.remove("btn-location");
    }

    if (Holder.classList.contains("btn-person")){
      Holder.classList.remove("btn-person");
    }

    if (Holder.classList.contains("btn-history")){
      Holder.classList.remove("btn-history");
    }

    if (Holder.classList.contains("btn-equipment")){
      Holder.classList.remove("btn-equipment");
    }

    Holder.classList.add(Element.id)

    for (let elem of elements){
      elem.classList.remove("btn-history-nav-active");
      elem.classList.add("btn-history-nav-inactive");
    }
    
  } else {
    Element.classList.remove("btn-history-nav-active") ;
    Element.classList.add("btn-history-nav-inactive") ;

    Holder.classList.remove(Element.id)
    
  }




  if (document.body.id == 1){

    document.getElementById("history-holder").innerHTML = text_annotation_1;

    if (Holder.classList.contains("btn-location")) {
      
      document.getElementById("history-holder").innerHTML = text_location_1;

    }

    if (Holder.classList.contains("btn-person")) {

      document.getElementById("history-holder").innerHTML = text_person_1;

    }

    if (Holder.classList.contains("btn-history")) {

      document.getElementById("history-holder").innerHTML = text_history_1;

    }

    if (Holder.classList.contains("btn-equipment")) {

      document.getElementById("history-holder").innerHTML = text_equipment_1;

    }
  }

}

let root = document.querySelector(':root');


function ChangeSize(Element){

  let root_style = getComputedStyle(root);

  let full_size = root_style.getPropertyValue('--text-size-change');

  let text_size = Number(full_size.replace('px',''));

  if (Element.id == "btn-plus-size"){
    text_size += 2;
  }

  if (Element.id == "btn-minus-size"){
    text_size += -2;
  }

  root.style.setProperty('--text-size-change',text_size + 'px');
}


