$(function () {
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
    //Стилизация чекбоксов. Селектов. Радио
    $('.filter__style').styler()
    //Переключение отображения карточек в каталоге
    $('.catalog__filters-btngrid').on('click', function () {
        $(this).addClass('catalog__filters-btn-active');
        $('.catalog__filters-btnline').removeClass('catalog__filters-btn-active');
        $('.popular__slider_item').removeClass('popular__slider_item-line')
    })

    $('.catalog__filters-btnline').on('click', function () {
        $(this).addClass('catalog__filters-btn-active');
        $('.popular__slider_item').addClass('popular__slider_item-line')
        $('.catalog__filters-btngrid').removeClass('catalog__filters-btn-active');
    })

    //Дропдауны в фильтре
    $('.title-drop').on('click', function () {
        $(this).toggleClass('title-drop-active');
        $(this).next().slideToggle(500)
    })

    $(".js-range-slider").ionRangeSlider({
        type: "double",
    });


    // $(".rate-Yo").rateYo({
    //     normalFill: "#c4c4c4",
    //     ratedFill: "#1C62CD",
    //     spacing: "7px",
    //     starWidth: "23px"
    // });


});

// ТАБЫ
const searchTab = document.querySelector('.search__tabs')
const tabs = document.querySelectorAll('.search__tab_item')
const searchContents = document.querySelectorAll('.search__content-item')

if (searchTab !== null) {
    searchTab.addEventListener('click', (event) => {
        event.preventDefault()
        changeTabs(tabs, searchContents, 'active_tab', 'active__search__content-item')
    })
}


const popularTab = document.querySelector('.popular__categories')
const populartabs = document.querySelectorAll('.popular__categories_item')
const popularContents = document.querySelectorAll('.popular__slider')

if (popularTab !== null) {
    popularTab.addEventListener('click', (event) => {
        event.preventDefault()
        changeTabs(populartabs, popularContents, 'active__tab', 'popular__slider--active')
    })
}


const prodTab = document.querySelector('.prod__categories')
const prodtabs = document.querySelectorAll('.prod__categories_item')
const prodContents = document.querySelectorAll('.prod__slider')

if (prodTab !== null) {
    prodTab.addEventListener('click', (event) => {
        event.preventDefault()
        changeTabs(prodtabs, prodContents, 'active__tab', 'popular__slider--active')
    })
}


const filterTab = document.querySelector('.filter__tabs')
const filtertabs = document.querySelectorAll('.filter__tabs-link')
const filterContents = document.querySelectorAll('.filter__tabs_content')

if (filterTab !== null) {
    filterTab.addEventListener('click', (event) => {
        event.preventDefault()
        changeTabs(filtertabs, filterContents, 'active__filter_tab', 'active__filter_content')
    })
}

const productCard = document.querySelector('.productCard__tabs')
const productCardtabs = document.querySelectorAll('.productCard__tab_item')
const productCardСontent = document.querySelectorAll('.productCard__content-item')

if (productCard !== null) {
    productCard.addEventListener('click', (event) => {
        event.preventDefault()
        changeTabs(productCardtabs, productCardСontent, 'active_tab', 'active__productCard__content-item')
    })
}

const productCardT = document.querySelector('.productCardTabs__tabs')
const productCardTabsitems = document.querySelectorAll('.productCardTabs_item')
const productCardTabsContent = document.querySelectorAll('.productCardTabs__content-item')

if (productCardT !== null) {
    productCardT.addEventListener('click', (event) => {
        event.preventDefault()
        changeTabs(productCardTabsitems, productCardTabsContent, 'active_tab', 'active__productCard__content-item')
    })
}

function changeTabs(tabsArr, contentArr, activeTabClass, activeContClass) {
    if(event.target.getAttribute('href') !== null){
        tabsArr.forEach(item => {
            item.classList.remove(activeTabClass)
        })
        
        contentArr.forEach(i => {
            i.classList.remove(activeContClass)
            
                if (event.target.getAttribute('href').slice(1, 20) == i.id) {
                    i.classList.add(activeContClass)
                }
        
        })
    }

    event.target.classList.add(activeTabClass)
}

//Добавление в избранное
const cards = document.querySelectorAll('.popular__product_item')

cards.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        if (event.target.classList.contains('popular__product_item-favorite')) {
            event.target.classList.toggle('popular__product_item-favorite--active')
        }
    })
})



const body = document.querySelector('body')
const popup = document.querySelector('.popUp__info')
if(popup !== null){
    setTimeout(() => {
        popup.classList.add('show')
        setTimeout(() => {
            popup.classList.remove('show')
        }, 8000);
    }, 3000);
}



