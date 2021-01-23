const triggers = document.querySelectorAll('.cool > li');
// console.log(triggers);

const background = document.querySelector('.dropdownBackground');
// console.log(background);

const nav = document.querySelector('.top');
// console.log(nav);

let handleEnter = function(){
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropDown = this.querySelector('.dropdown');
    const dropDownCoords = dropDown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height : dropDownCoords.height,
        width : dropDownCoords.width
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
}

let handleLeave = function(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave ));