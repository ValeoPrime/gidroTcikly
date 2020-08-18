$(function(){
    $('.shares__slider').slick({
        dots: true,
        prevArrow: '<button class="shares__slider-btn shares__slider-btnprev"><img src="img/icons/left__arrow.svg" alt=""></button>',
        nextArrow: '<button class="shares__slider-btn shares__slider-btnnext"><img src="img/icons/right__arrow.svg" alt=""></button>',
    });

    $('.popular__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: -1,
        prevArrow: '<button class="popular__slider-btn popular__slider-btnprev"><img src="img/icons/left__arrow-black.svg" alt=""></button>',
        nextArrow: '<button class="popular__slider-btn popular__slider-btnnext"><img src="img/icons/right__arrow-black.svg" alt=""></button>',
    });
});

// ТАБЫ
const searchTab = document.querySelector('.search__tabs')
const tabs = document.querySelectorAll('.search__tab_item')
const searchContents = document.querySelectorAll('.search__content-item')

searchTab.addEventListener('click', (event) => {
    event.preventDefault()
    changeTabs (tabs, searchContents, 'active_tab', 'active__search__content-item')
})

const popularTab = document.querySelector('.popular__categories')
const populartabs = document.querySelectorAll('.popular__categories_item')
const popularContents = document.querySelectorAll('.popular__slider')

popularTab.addEventListener('click', (event) => {
    event.preventDefault()
    changeTabs (populartabs, popularContents, 'active__tab', 'popular__slider--active')
})

const prodTab = document.querySelector('.prod__categories')
const prodtabs = document.querySelectorAll('.prod__categories_item')
const prodContents = document.querySelectorAll('.prod__slider')

prodTab.addEventListener('click', (event) => {
    event.preventDefault()
    changeTabs (prodtabs, prodContents, 'active__tab', 'popular__slider--active')
})

function changeTabs (tabsArr, contentArr, activeTabClass, activeContClass) {
    tabsArr.forEach(item => {
        item.classList.remove(activeTabClass)
    })
    contentArr.forEach(i => {
        i.classList.remove(activeContClass)
        if(event.target.getAttribute('href').slice(1, 20) == i.id) {
            i.classList.add(activeContClass)
        }
    })

    event.target.classList.add(activeTabClass)
}

//Добавление в избранное
const cards = document.querySelectorAll('.popular__product_item')

cards.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        if(event.target.classList.contains('popular__product_item-favorite')){
            event.target.classList.toggle('popular__product_item-favorite--active')
        }
    })
})