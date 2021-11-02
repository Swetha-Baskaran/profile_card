document.addEventListener("selectstart",e => {
     e.preventDefault();
})

document.addEventListener("contextmenu",e => {
    e.preventDefault();
})

let _ = a =>{
    return document.querySelector(a);
}
let move = _('.inner');
let profile_part =_(".view_profile");

let state = false;

profile_part.addEventListener('click',() => {

    if(state == false){
        move.classList.add("in");
        _('.arrow').style.transform = "rotate(-140deg)";
        state = true;
    }
    else{
        move.classList.remove("in");
        _('.arrow').style.transform = "rotate(45deg)";
        state = false;
    }
})

