
//const sliderWrapper = document.querySelector('.slider-container-wrapper');
//const slider = document.querySelector('.slider-container');
//const slides = Array.from(document.querySelectorAll('.slide'));
//const dots = Array.from(document.querySelectorAll(".dot"));
//
//let prevButton = document.getElementById("prev");
//let nextButton = document.getElementById("next");
//let touchDots = document.getElementsByClassName("dot");

let swipers = document.querySelectorAll('.swiper');

// appending right number of dots into 'bullets' div
for (i = 0; i < swipers.length; i++) {
    
    let slideNum = swipers[i].getElementsByClassName("slide");
    
    for (c = 0; c < slideNum.length; c++) {
        let dot = document.createElement('span');
        dot.classList.add("dot");
        if (c == 0) {
            dot.classList.add("active");
        }
        dot.setAttribute("oncklick", "currentSlide(" + c + ")");
        swipers[i].getElementsByClassName("bullets")[0].appendChild(dot);
    }
    
}




let sliderWrapper;// = document.querySelector('.slider-container-wrapper');
let slider;// = document.querySelector('.slider-container');
let allslides = Array.from(document.querySelectorAll('.slide'));
let slides;// = Array.from(document.querySelectorAll('.slide'));
let alldots = Array.from(document.querySelectorAll(".dot"));
let dots;

let prevButton = document.querySelectorAll('.prev');
let nextButton = document.querySelectorAll('.next');
let touchDots = document.getElementsByClassName("dot");

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0

// click events
for (i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener("click", showNxtSlide);
    prevButton[i].addEventListener("click", showPrvSlide);
    prevButton[i].className += " hide-arrow";
}



// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

//alldots[currentIndex].className += " active";
//prevButton.className += " hide-arrow";



allslides.forEach((slide, index) => {
    
    const slideImage = slide.querySelector('img')
    
    // disable default image drag
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
    
    // touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
    
})


function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// showing slide by dots

function currentSlide(n) {
    currentIndex = n;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    showSlide();
    dots[currentIndex].className += " active";
    hideArrow();
}

function showSlide() {

    console.log("dot index = " + currentIndex);
    setPositionByIndex();
}

// showing slide by arrow

function showNxtSlide(event) {
    
    console.log("showNxtSlide");
    console.log(event);
    console.log(event.target.parentElement);

    slider = event.target.parentElement;
    sliderWrapper = slider.parentElement;// = document.querySelector('.slider-container-wrapper');
    slides = slider.getElementsByClassName("slide");// = Array.from(document.querySelectorAll('.slide'));
    dots = sliderWrapper.parentElement.getElementsByClassName("bullets")[0].getElementsByClassName("dots");
    console.log(dots);
    
    currentIndex += 1;
    if (currentIndex > slides.length-1) {
        currentIndex = slides.length-1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    console.log("slideIndex = " + currentIndex);
    
    setPositionByIndex();
    dots[currentIndex].className += " active";
    console.log("dots" + currentIndex)
    hideArrow();
}


function showPrvSlide() {

    console.log("showPrvSlide");
    
    slider = event.target.parentElement;
    sliderWrapper = slider.parentElement;// = document.querySelector('.slider-container-wrapper');
    slides = slider.getElementsByClassName("slide");// = Array.from(document.querySelectorAll('.slide'));

    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    console.log("slideIndex = " + currentIndex);
    
    setPositionByIndex();
    dots[currentIndex].className += " active";
    hideArrow();
}

// Hidding prev and next buttins

function hideArrow() {
    prevButton.className = prevButton.className.replace(" hide-arrow", "");    
    nextButton.className = nextButton.className.replace(" hide-arrow", "");    

    if (currentIndex <= 0) {
        prevButton.className += " hide-arrow";
        console.log("hidding prev button");
    }
    if (currentIndex >= slides.length-1) {
        nextButton.className += " hide-arrow";
        console.log("hidding next button");
    }
}



function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
    for (i = 0; i < touchDots.length; i++) {
        touchDots[i].className = touchDots[i].className.replace(" active", "");
    }
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100 && currentIndex < slides.length - 1) {
        currentIndex += 1;
    }

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100 && currentIndex > 0) {
        currentIndex -= 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
   
    console.log("Array: " + dots[i]);

    setPositionByIndex()
    
    touchDots[currentIndex].className += " active";
    hideArrow();

  slider.classList.remove('grabbing')
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
    console.log("wrapper width: " + sliderWrapper);
    console.log(sliderWrapper);
   //     currentTranslate = currentIndex * -800//-window.innerWidth
    if (window.innerWidth > 795) {
        currentTranslate = currentIndex * -800//-window.innerWidth
    } else if (window.innerWidth < 795) {
        currentTranslate = currentIndex * -sliderWrapper.offsetWidth;
    }
    prevTranslate = currentTranslate
    setSliderPosition()
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}


// prevent menu popup on long press
//window.oncontextmenu = function (event) {
//  event.preventDefault()
//  event.stopPropagation()
//  return false
//}

