$(function () {
    $('.shares__slider').slick({
        dots: true,
        prevArrow: '<button class="shares__slider-btn shares__slider-btnprev"><img src="img/icons/left__arrow.svg" alt=""></button>',
        nextArrow: '<button class="shares__slider-btn shares__slider-btnnext"><img src="img/icons/right__arrow.svg" alt=""></button>',
    });

    $('.popular__slider').slick({
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="popular__slider-btn popular__slider-btnprev"><img src="img/icons/left__arrow-black.svg" alt=""></button>',
        nextArrow: '<button class="popular__slider-btn popular__slider-btnnext"><img src="img/icons/right__arrow-black.svg" alt=""></button>',
        responsive: [
                    {
                        breakpoint: 1251,
                        settings: {
                            arrows: false,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                      }
                    },
                    {
                        breakpoint: 1051,
                        settings: {
                            arrows: false,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                      },
                      {
                        breakpoint: 751,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                      },
                      {
                        breakpoint: 530,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                      },
                      
                    ]
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

    //Сворачивание фильтра
    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle(500)
    })

    // рейнж слайдер
    $(".js-range-slider").ionRangeSlider({
        type: "double",
    });

    if(document.querySelector('.rate-Yo') !== null){
        $(".rate-Yo").rateYo({
            normalFill: "#c4c4c4",
            ratedFill: "#1C62CD",
            spacing: "7px",
            starWidth: "23px"
        });
    }
    


});

const body = document.querySelector('body')
const menuMobile = document.querySelector('.menu__mobile')

const tabs = document.querySelectorAll('.search__tab_item')
const searchContents = document.querySelectorAll('.search__content-item')
const populartabs = document.querySelectorAll('.popular__categories_item')
const popularContents = document.querySelectorAll('.popular__slider')
const prodtabs = document.querySelectorAll('.prod__categories_item')
const prodContents = document.querySelectorAll('.prod__slider')
const filtertabs = document.querySelectorAll('.filter__tabs-link')
const filterContents = document.querySelectorAll('.filter__tabs_content')
const productCardtabs = document.querySelectorAll('.productCard__tab_item')
const productCardСontent = document.querySelectorAll('.productCard__content-item')
const productCardTabsite = document.querySelectorAll('.productCardTabs_item')
const productCardTabsContent = document.querySelectorAll('.productCardTabs__content-item')

body.addEventListener('click', e => {
    //Гамбургер меню
    if(e.target.classList.contains('menu__gamburger') || e.target.parentNode.classList.contains('menu__gamburger')) {
        e.preventDefault()
        menuMobile.classList.toggle('menu__mobile-open')
    }
    //Табы поиска
    if(e.target.classList.contains('search__tab_item')) {
        e.preventDefault()
        changeTabs(tabs, searchContents, 'active_tab', 'active__search__content-item')
    }
    //Табы популярных товаров
    if(e.target.classList.contains('popular__categories_item')) {
        e.preventDefault()
        changeTabs(populartabs, popularContents, 'active__tab', 'popular__slider--active')
    }
    //Табы с этим товаром покупают
    if(e.target.classList.contains('prod__categories_item')) {
        e.preventDefault()
        changeTabs(prodtabs, prodContents, 'active__tab', 'popular__slider--active')
    }
    //Табы фильтра
    if(e.target.classList.contains('filter__tabs-link')) {
        e.preventDefault()
        changeTabs(filtertabs, filterContents, 'active__filter_tab', 'active__filter_content')
    }
    //Табы в карточке продукта
    if(e.target.classList.contains('productCard__tab_item')) {
        e.preventDefault()
        changeTabs(productCardtabs, productCardСontent, 'active_tab', 'active__productCard__content-item')
    }
    //Табы в полном описании продукта
    if(e.target.classList.contains('productCardTabs_item')) {
        e.preventDefault()
        changeTabs(productCardTabsite, productCardTabsContent, 'active_tab', 'active__productCard__content-item')
    }
})

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




