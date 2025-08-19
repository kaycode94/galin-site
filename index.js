// Activelink for active pages

const pathName = window.location.pathname
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink");
}

if(pageName === "About.html"){
    document.querySelector(".about").classList.add("activeLink");
}
if(pageName === "Services.html"){
    document.querySelector(".services").classList.add("activeLink");
}
if(pageName === "Projects.html"){
    document.querySelector(".projects").classList.add("activeLink");
}
if(pageName === "Contacts.html"){
    document.querySelector(".contacts").classList.add("activeLink");
}

function scrollValue() {
  var header = document.getElementById('header');
  var scroll = window.scrollY;
  if (scroll < 20) {
      header.classList.remove('BgColour');
  } else {
      header.classList.add('BgColour');
  }
}

window.addEventListener('scroll', scrollValue);



// CONTACTS PAGE____________________________________________________________________________________________
// _________________________________________________________________________________________________________
// Contact Form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// CONTACTS PAGE____________________________________________________________________________________________
// _________________________________________________________________________________________________________
// Filter Gallery

let filterItem = document.querySelector('.btnContainer');
let filterImages = document.querySelectorAll('.project-img')

window.addEventListener('load',()=>{
  filterItem.addEventListener('click',(selectedItem)=>{
    if(selectedItem.target.classList.contains('bt')){
      document.querySelector('.bt-active').classList.remove('bt-active');
      selectedItem.target.classList.add('bt-active');
      let filterName = selectedItem.target.getAttribute('data-name');
      filterImages.forEach((image)=>{
        let filterImages = image.getAttribute('data-name');
        if((filterImages == filterName ) || filterName == 'all'){
          image.style.display='block'
        }
        else{
          image.style.display='none'
        }
      })
    }
  })
})


// FOOTER SECTION___________________________________________________________________________________________
// Automatic year update script

document.querySelector(".year").innerText="Designed by KayCode | " + (new Date().getFullYear());




// HOME PAGE________________________________________________________________________________________________
// _________________________________________________________________________________________________________
// Slider Formatting


const sliderControls = document.querySelector(".slider-controls");
const sliderTabs = sliderControls.querySelectorAll(".slider-tab");
const sliderIndicator = sliderControls.querySelector(".slider-indicator");

// Update the indicator
const updateIndicator = (tab, index ) => {
  document.querySelector(".slider-tab.current")?.classList.remove("current");
  tab.classList.add("current");

  sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;

  // Calculate the scroll position and scroll smoothly
  const scrollLeft = sliderTabs[index].offsetLeft - sliderControls.offsetWidth / 2 + sliderTabs[index].offsetWidth / 2;
  sliderControls.scrollTo({ left: scrollLeft, behavior: "smooth" });
}

// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  autoplay: { delay: 4000 },
  navigation: {
    prevEl: "#slide-prev",
    nextEl: "#slide-next",
  },
  on: {
    // Update indicator on slide change
    slideChange: () => {
      const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
      updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
    },
    reachEnd: () => swiper.autoplay.any,
  },
});

// Update the slide on tab click
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updateIndicator(tab, index);
  });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () => updateIndicator(sliderTabs[swiper.activeIndex], 0));






