const triggers = document.querySelectorAll('.cool > li');
// console.log(triggers);

const background = document.querySelector('.dropdownBackground');
// console.log(background);

const nav = document.querySelector('.top');
// console.log(nav);

let handleEnter = function(){
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
}

let handleLeave = function(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave ));