/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
// Selection of all the sections
const sections = document.querySelectorAll("section");
// Create a Document Fragment
const docFragment = document.createDocumentFragment();
// Define an element (ul) in a Variable
const element = document.querySelector("ul");
/**
 * End Global Variables
 * Start Helper Functions
*/
// Create loop on the sections list
function li_List(){
    for(let section of sections){
        sectionName = section.getAttribute("data-nav");
        sectionLink = section.getAttribute("id");
// Create li Element
const liElement = document.createElement("li");
    liElement.innerHTML = `<a href='${sectionLink}' class="menu__link"
    data-nav = ${sectionLink}>${sectionName}</a>`
    liElement.addEventListener("click", (e)=>{
        e.preventDefault()
// Smoothly
section.scrollIntoView({behavior: "smooth"})
})
// Add li Element to docFragment
docFragment.appendChild(liElement);
};
// Add docFragment to ul Element
element.appendChild(docFragment);
};
// Active Section
function callback(entries){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            sections.forEach((mySec)=>{
                if(mySec.classList.contains("your-active-section")){
                    mySec.classList.remove("your-active-section");
                }
            });
            entry.target.classList.add("your-active-section");
        }
// Active Nav
let activeNav = element.querySelector(`[data-nav=${entry.target.id}]`);
        if(entry.isIntersecting){
            activeNav.classList.add("active-nav");
        }else{
            activeNav.classList.remove("active-nav");
        }
    });
}
/*
Creating an intersection observer
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer
*/
let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.7
};
let observer = new IntersectionObserver(callback, options);
sections.forEach((sec) =>{
    observer.observe(sec);
});

/**
 * End Helper Functions
 * Begin Main Functions
*/

// build the nav
li_List();
// Style menu left
element.style.textAlign= "left";


/**
 * End Main Functions
 * Begin Events
*/

// Build menu

// Scroll to section on link click

// Set sections as active



// An other way

