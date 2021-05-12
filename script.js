(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => {
        
        navLink.addEventListener('click', () => {

            // navLink.classList.add('hovered')
            navLink.classList.contains('focused') ? navLink.classList.remove('focused') : navLink.classList.add('focused');
        })
    })
})();

(function openMobileNav(){
    
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    

    hamburgerIcon.addEventListener('click', () => {
        
        if  (mobileMenu.classList.contains('opened')) {
            hamburgerIcon.src = "./images/icon-hamburger.svg";
            
            mobileMenu.classList.remove('opened')
        } else {
            mobileMenu.classList.add('opened');
            hamburgerIcon.src = "./images/icon-close.svg";
            
        }
    })
})();



function showMobileLinks() {
    
    const mobileNavLinks = document.querySelectorAll('.clickable-span');
    
    mobileNavLinks.forEach((link) => {
        
        link.addEventListener('click', () => {
            
            const linkContainer = link.parentElement;
            const angleIcon = linkContainer.querySelector('i');

            if (linkContainer.classList.contains('clicked')) {
                linkContainer.classList.remove('clicked');
                angleIcon.classList.add('fa-angle-down');
                angleIcon.classList.remove('fa-angle-up');
                
            } else {
                linkContainer.classList.add('clicked');
                angleIcon.classList.remove('fa-angle-down');
                angleIcon.classList.add('fa-angle-up');
                
            }
            
        })
    })
}

showMobileLinks();



(function ChangeSectionTwoImage() {
    const image = document.querySelector('.section2-image')
    const mediaQuery = window.matchMedia('(min-width: 1200px)')

    function checkWindowSize () {
        if (mediaQuery.matches) {
            
            image.src = 'images/illustration-editor-desktop.svg'

        } else if (!mediaQuery.matches) {
            
            image.src = 'images/illustration-editor-mobile.svg'
        }
    }
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize)
    

    
})();