const swiper =new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween:40,

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,

        },
        1024:{
            slidesPerView: 3,
        },
    },

    pagination: {
        el:'.swiper-pagination',
        dynamicBullts: true,
        clickable: true,
    },

    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper_scrollbar',
    },
});