//Select all sections inside <main> plus the hero <header>, and all navbar links
const sections = document.querySelectorAll("header[id], main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

//This function will be ran everytime the scroll wheel is used on the page
//so when the user scrolls down
window.addEventListener("scroll", () =>{
    let currentSectionId = "";

    //check how far doen the page has been scrolled by user
    sections.forEach((section) => {
        const sectionTop = section.offsetTop -120; //this is a 120px buffer for the sticky navbar
        const sectionHeight =section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            currentSectionId = section.getAttribute("id");
        }
    });

    //once the absolute bottom of the page is reached, force the last section (which is contact in this case) active
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5){
        currentSectionId = sections[sections.length -1].getAttribute("id");
    }

    //update the top of the navbar with what section is currently active
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
});