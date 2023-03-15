const navSlide = () =>
{
    const navigator = document.querySelector('.navigator');
    const nav = document.querySelector('.navbar');
    const navlinks = document.querySelectorAll('.navbar li');

    navigator.addEventListener('click',()=>
    {
        //
        nav.classList.toggle('nav-active');
        // animasi navigator
        navigator.classList.toggle('toggle');
    });

    navlinks.forEach((link, index) =>
    {
        link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.3}s`;
    })
}



navSlide();