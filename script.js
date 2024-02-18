const section = document.querySelectorAll('section[id]')



window.onscroll = () => {
    let curret = scrollY;
    
    section.forEach(element => {

        var current = '';

        const sectionTop = element.offsetTop;

        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id"); 
        }

    });    
}

