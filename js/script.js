const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    let isAnimating = false;
    
    menuBtn.addEventListener('click', () => {
        if (isAnimating) return;
        
        isAnimating = true;
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        setTimeout(() => {
            isAnimating = false;
        }, 400);
    });

    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isAnimating) return;
            
            isAnimating = true;
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            setTimeout(() => {
                isAnimating = false;
            }, 400);
        });
    });
}

const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
    const marqueeText = marqueeContent.innerHTML;
    marqueeContent.innerHTML = marqueeText + marqueeText;
}
