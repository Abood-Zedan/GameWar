// Start header 
const swiper1 = new Swiper('.header .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    pagination: {
        el: '.header .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.header .swiper-button-next',
        prevEl: '.header .swiper-button-prev',
    },
});
// End Header
// Start Products
const featured = document.querySelector('.our-Products .items-bar #featured');
const bestseller = document.querySelector('.our-Products .items-bar #bestseller');
const special = document.querySelector('.our-Products .items-bar #special');
const columns = Array.from(document.querySelectorAll('.our-Products .row .ord'));

featured.addEventListener('click', () => {
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.order = i;
    }
    featured.classList.add('active');
    bestseller.classList.remove('active');
    special.classList.remove('active');
});
bestseller.addEventListener('click', () => {
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.order = Math.floor(Math.random() * columns.length) + 1;
    }
    bestseller.classList.add('active');
    featured.classList.remove('active');
    special.classList.remove('active');
});
special.addEventListener('click', () => {
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.order = Math.floor(Math.random() * columns.length) + 1;
    }
    special.classList.add('active');
    bestseller.classList.remove('active');
    featured.classList.remove('active');
});

const hearts = Array.from(document.querySelectorAll('.our-Products .product .heart'));
const layer_groups = Array.from(document.querySelectorAll('.our-Products .product #layer-group'));
const maximize = document.querySelector('.our-Products .product #maximize');

const wishlist = document.querySelector('.navbar #wishlist span');
let countHeart = 0;
wishlist.textContent = `(${countHeart})`;

hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
        if (heart.classList.contains('fa-regular')) {
            heart.classList.add('fa-solid');
            heart.classList.remove('fa-regular');
            countHeart++;
        } else {
            heart.classList.add('fa-regular');
            heart.classList.remove('fa-solid');
            countHeart--;
        }
        wishlist.textContent = `(${countHeart})`;

    });
})
const compare = document.querySelector('.navbar #compare span');
let countLayer = 0;
compare.textContent = `(${countLayer})`;
layer_groups.forEach((layer_group) => {
    layer_group.addEventListener('click', () => {
        layer_group.classList.toggle('active');
        if (layer_group.classList.contains('active')) {
            countLayer++;
        } else {
            countLayer--;
        }
        compare.textContent = `(${countLayer})`;
    })
});
// End Products
// Start feedback 
const swiper2 = new Swiper('.feedback .swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.feedback .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.feedback .swiper-button-next',
        prevEl: '.feedback .swiper-button-prev',
    },
});
// End feedback
// Start blog
const swiper3 = new Swiper('.blog .swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.blog .swiper-pagination',
    },

    navigation: {
        nextEl: '.blog .swiper-button-next',
        prevEl: '.blog .swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});
// End blog
// Start ramadan
const countDown = () => {
    const countDownDate = new Date('2025-03-01T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % (86400000)) / 3600000);
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / 60000);
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;
}
setInterval(() => {
    countDown();
}, 1000);
// End ramadan
// Start tm-logo
const swiper4 = new Swiper('.tm-logo .swiper', {

    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 5,
    spaceBetween: 30,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 60
        }
    }
});
// End tm-logo
// But back to top
const but = document.querySelector('#but');
console.log(but);

window.onscroll = function () {
    if (scrollY >= 400) {
        but.style.display = 'block';
        but.style.transition = '0.9s';
    }
    else {
        but.style.display = 'none';
        but.style.transition = '0.9s';
    }
}
but.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})