
let swipers = document.querySelectorAll('.swiper');

// appending right number of dots into 'bullets' div
for (i = 0; i < swipers.length; i++) {
    
    swipers[i].setAttribute("currentindex", 0);
    swipers[i].getElementsByClassName("slider-container")[0].setAttribute("current-translate", 0);
    let slideNum = swipers[i].getElementsByClassName("slide");
    
    for (c = 0; c < slideNum.length; c++) {
        slideNum[c].setAttribute("index", c);
        let dot = document.createElement('span');
        dot.classList.add("dot");
        if (c == 0) {
            dot.classList.add("active");
        }
        dot.setAttribute("oncklick", "currentSlide(" + c + ")");
        swipers[i].getElementsByClassName("bullets")[0].appendChild(dot);
    }
    
}

let swiper;//swiper
let sliderWrapper;//.slider-container-wrapper
let slider;//.slider-container
let allslides = Array.from(document.querySelectorAll('.slide'));
    console.log(allslides);
let slides;//.slide
let alldots = Array.from(document.querySelectorAll(".dot"));
let dots;

let allPrevButton = document.querySelectorAll('.prev');
let prevButton;
let allNextButton = document.querySelectorAll('.next');
let nextButton;
let touchDots = document.getElementsByClassName("dot");

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID
    mycurrentIndex = 0

// click events and hidding prevButton
for (i = 0; i < allNextButton.length; i++) {
    allNextButton[i].addEventListener("click", showNxtSlide);
    allPrevButton[i].addEventListener("click", showPrvSlide);
    allPrevButton[i].className += " hide-arrow";
}

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// Detacting dragging
// Adding touch eventListeners to all slides 
allslides.forEach((slide, index) => {
    
    const slideImage = slide.querySelector('img')
    
    // disable default image drag
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
    
    // touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
    
})


function showNxtSlide(event) {
    
    console.log("showNxtSlide");

    slider = event.target.parentElement.getElementsByClassName("slider-container")[0];//slider-container
    sliderWrapper = event.target.parentElement;//slider-container-wrapper
    swiper = slider.parentElement.parentElement;//swiper
    slides = slider.getElementsByClassName("slide");//slide
    dots = sliderWrapper.parentElement.getElementsByClassName("bullets")[0].getElementsByClassName("dot");
    prevButton = sliderWrapper.getElementsByClassName("prev")[0];
    nextButton = sliderWrapper.getElementsByClassName("next")[0];
    
    //console.log(prevButton);
    
    let currentIndex = swiper.getAttribute("currentindex");

    if (currentIndex == slides.length-1) {
        currentIndex = slides.length-1;
    } else if (currentIndex < slides.length-1) {
        currentIndex++;
    }
    
    mycurrentIndex = currentIndex;
    console.log("currentIndex: " + currentIndex);
    swiper.setAttribute("currentindex", currentIndex);
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[currentIndex].className += " active";

    setPositionByIndex();
    hideArrow();
}

function showPrvSlide() {

    console.log("showPrvSlide");
    
    slider = event.target.parentElement.getElementsByClassName("slider-container")[0];//slider-container
    sliderWrapper = event.target.parentElement;//slider-container-wrapper
    swiper = slider.parentElement.parentElement;//swiper
    slides = slider.getElementsByClassName("slide");//slide
    dots = sliderWrapper.parentElement.getElementsByClassName("bullets")[0].getElementsByClassName("dot");
    prevButton = sliderWrapper.getElementsByClassName("prev")[0];
    nextButton = sliderWrapper.getElementsByClassName("next")[0];
    
    //console.log(prevButton);
    
    let currentIndex = swiper.getAttribute("currentindex");

    if (currentIndex == 0) {
        currentIndex = 0;
    } else if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
    }
    
    mycurrentIndex = currentIndex;
    console.log("currentIndex: " + currentIndex);
    swiper.setAttribute("currentindex", currentIndex);

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    setPositionByIndex();
    dots[currentIndex].className += " active";
    hideArrow();
    
    slider = null;
    sliderWrapper = null;
    swiper = null;
    slides = null;
    dots = null;
    prevButton = null;
    nextButton = null;
    myicurrentIndex = 0;
}

function animation() {
  //setSliderPosition()
    console.log("animation slider");
    console.log(slider);
    slider.style.transform = `translateX(${currentTranslate}px)`
    if (isDragging) requestAnimationFrame(animation)
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

//function touchStart(index) {
//  return function (event) {
//    console.log("touchStart1");
//    console.log(event.target.closest(".slide"));
//    console.log("my target");
//    
//    // Setting all the elements
//    slider = event.target.closest(".slider-container");//slider-container
//    sliderWrapper = event.target.closest(".slider-container-wrapper");//slider-container-wrapper
//    console.log(slider);
//    swiper = slider.closest(".swiper");//swiper
//    slides = slider.getElementsByClassName("slide");//slide
//    dots = sliderWrapper.parentElement.getElementsByClassName("bullets")[0].getElementsByClassName("dot");
//    prevButton = sliderWrapper.getElementsByClassName("prev")[0];
//    nextButton = sliderWrapper.getElementsByClassName("next")[0];
//    
//    // Setting currentIndex
//    if (event.target.className === "slide") {
//        mycurrentIndex = Number(event.target.getAttribute("index"));
//    } else {
//        mycurrentIndex = Number(event.target.closest(".slide").getAttribute("index"));
//    }
//
//    startPos = getPositionX(event);
//    isDragging = true;
//    animationID = requestAnimationFrame(animation);
//    slider.classList.add('grabbing');
//  }
//}
//
//function touchMove(event) {
//  if (isDragging) {
//    const currentPosition = getPositionX(event)
//    currentTranslate = prevTranslate + currentPosition - startPos
//  }
//}
//
//function touchEnd() {
//    for (i = 0; i < touchDots.length; i++) {
//        touchDots[i].className = touchDots[i].className.replace(" active", "");
//    }
//  cancelAnimationFrame(animationID)
//  isDragging = false
//  const movedBy = currentTranslate - prevTranslate
//
//    // if moved enough negative then snap to next slide if there is one
//    if (movedBy < -100 && mycurrentIndex < slides.length - 1) {
//        mycurrentIndex += 1;
//    }
//
//    // if moved enough positive then snap to previous slide if there is one
//    if (movedBy > 100 && mycurrentIndex > 0) {
//        mycurrentIndex -= 1;
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//   
//    console.log("Array: " + dots[i]);
//
//    setPositionByIndex()
//    
//    touchDots[mycurrentIndex].className += " active";
//    hideArrow();
//
//    console.log(slider);
//    slider.classList.remove('grabbing')
//    
//    slider = null;
//    sliderWrapper = null;
//    swiper = null;
//    slides = null;
//    dots = null;
//    prevButton = null;
//    nextButton = null;
//    myicurrentIndex = 0;
//}

function setPositionByIndex() {
    let curTranslt = swiper.getAttribute("currentindex") * -sliderWrapper.offsetWidth;
    slider.setAttribute("current-translate", curTranslt);
    prevTranslate = currentTranslate
    //setSliderPosition()
    slider.style.transform = `translateX(${curTranslt}px)`
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function hideArrow() {
    prevButton.className = prevButton.className.replace(" hide-arrow", "");    
    nextButton.className = nextButton.className.replace(" hide-arrow", "");    

    if (mycurrentIndex <= 0) {
        prevButton.className += " hide-arrow";
        console.log("hidding prev button");
    }
    if (mycurrentIndex >= slides.length-1) {
        nextButton.className += " hide-arrow";
        console.log("hidding next button");
    }
    
}

