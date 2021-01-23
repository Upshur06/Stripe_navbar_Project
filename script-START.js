const triggers = document.querySelectorAll('.cool > li');
// console.log(triggers);

const background = document.querySelector('.dropdownBackground');
// console.log(background);

const nav = document.querySelector('.top');
// console.log(nav);

let handleEnter = function(){
    console.log("ENTER!!!");
}

let handleLeave = function(){
    console.log("LEAVE!!!");
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave ));