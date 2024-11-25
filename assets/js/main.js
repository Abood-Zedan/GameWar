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
// active navbar 
const activeNavbar = () => {
    const itemLinks = Array.from(document.querySelectorAll('.nav-active .nav-link'));
    itemLinks.forEach((itemLink) => {
        itemLink.addEventListener('click', () => {
            document.querySelector('.active').classList.remove('active');
            itemLink.classList.add('active');
        });
    });
};
activeNavbar();
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
// Start Products
// order
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
// wishlist
const hearts = Array.from(document.querySelectorAll('.our-Products .product .heart'));
const layer_groups = Array.from(document.querySelectorAll('.our-Products .product #layer-group'));

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
// Cart
const but_carts = Array.from(document.querySelectorAll('.add-to-cart'));
const cart = document.querySelector('#cart');
const cart_price = document.querySelector('#cart span');
let sumOFPrice = 0.00;
let count_product = 0;
cart_price.textContent = `(${count_product}) $${sumOFPrice}`;
const add_to_cart = () => {
    but_carts.forEach((but_cart) => {
        but_cart.addEventListener('click', () => {
            const textPrice = (but_cart.parentElement.firstElementChild.nextElementSibling.firstElementChild.textContent);
            const price = parseFloat((textPrice).replace(/^\D+/g, ""));
            count_product++;
            sumOFPrice += price;
            cart_price.textContent = `(${count_product}) $${sumOFPrice}`;
        });
    })
};
add_to_cart();

// cart navbar
document.getElementById('but_cart').addEventListener('click', function (event) {
    event.preventDefault();
});
const add_cart = () => {
    but_carts.forEach((but_cart) => {
        but_cart.addEventListener('click', () => {
            document.querySelector('.no-more-item').style.display = 'none';
            const img = but_cart.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;
            const titel = but_cart.parentElement.firstElementChild.textContent;
            const textPrice = (but_cart.parentElement.firstElementChild.nextElementSibling.firstElementChild.textContent);
            const price = parseFloat((textPrice).replace(/^\D+/g, ""));
            const result = `<div class="cart-item w-100 d-flex align-items-center gap-2">
                                <div class="img">
                                    <img src="${img}" alt="" class="w-100">
                                </div>
                                <div class="item-information d-flex align-items-center">
                                    <div class="product-item__title">
                                        <h5 class="">${titel}</h5>
                                        <span>$ ${price}</span>
                                    </div>
                                    <div class="remov align-self-start">
                                        <i class="fa-regular fa-trash-can"></i>
                                    </div>
                                </div>
                            </div>`;
            document.querySelector('.cart-navbar .navbar-nav').innerHTML += result;
            removeItem();
        });
    });
};
const removeItem = () => {
    const removIcons = Array.from(document.querySelectorAll('.offcanvas .fa-regular '));
    console.log(removIcons);
    removIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            const textPrice = (icon.parentElement.parentElement.firstElementChild.lastElementChild.textContent);
            const price = parseFloat((textPrice).replace(/^\D+/g, ""));
            sumOFPrice -= price;
            count_product--;
            cart_price.textContent = `(${count_product}) $${sumOFPrice}`;
            icon.parentElement.parentElement.parentElement.remove();
            if (document.querySelector('.offcanvas .navbar-nav').childElementCount == 1) {
                document.querySelector('.no-more-item').style.display = 'block';
            }
        });
    })
}
add_cart();
// End Products
document.querySelector('main').style.display = 'none';
document.querySelector('nav').style.display = 'none';
document.querySelector('header').style.display = 'none';
document.querySelector('footer').classList.add('d-non');
setTimeout(() => {
    document.querySelector('.lod').classList.add('d-non');;
    document.querySelector('main').style.display = 'block';
    document.querySelector('nav').style.display = 'block';
    document.querySelector('header').style.display = 'block';
    document.querySelector('footer').classList.remove('d-non');
}, 1000);

const messages = ()=> {
    let arr = Array.from(document.querySelectorAll('.our-Products .product .card-img-top'));
    const mag = document.querySelector('.message');
    let index = 0;
    setInterval(() => {
        setTimeout(() => {
            mag.firstElementChild.firstElementChild.firstElementChild.src = arr[index++].src;
            mag.classList.remove('pos-let');
        }, 5000);
        setTimeout(() => {
            mag.classList.add('pos-let');
        }, 8000);
        if (index == arr.length) {
            index = 0;
        }
    }, 10000);
}
messages();