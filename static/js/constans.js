
// Local storage

export const TEST = 'test2'
export const BASKET_LOCAL_STORAGE_NAME = 'basketGetDrinksStore'
export const ORDER_INFO_LOCAL_STORAGE = 'orderInfoGetDrinks'
export const USER_AGE_SETTINGS_STORAGE = 'userAgeGetDrinks'
export const USER_AGE_SETTINGS_INIT_TIME = 'userAgeInitTimeGD'
export const USER_ACEPT_COOKIES = 'userAceptCookiesGetDrinks'
export const USER_BRAND_FILTERS = 'userBrandFilters'


// Заебался вносить комментарии юристов
// Пусть пока будет так
export const FUCKING_LLEGAL_NAME_ONE = 'пункт продажи'
export const FUCKING_LLEGAL_NAME_ONE2 = 'пункте продажи'
export const FUCKING_LLEGAL_NAME_MANY = 'пунктах продажи'
export const FUCKING_LLEGAL_NAME_MANY2 = 'пунктов продажи'
export const LITRA_FINANCE_INFO = '(Литра, реквизиты)'

export const BTN_NAME_BEFORE_PURCHASE = 'В корзину'
export const BTN_NAME_AFTER_PURCHASE = 'В корзине'

// Api

export const SERVER_ADDR = 'https://getdrinks.ru:2998/'
//export const SERVER_ADDR = 'http://127.0.0.1:2998/'
//export const SERVER_ADDR = 'http://195.201.137.93:2998/'

export const CATEGORIES_API = SERVER_ADDR + 'api/categories'
export const PRODUCTS_API = SERVER_ADDR + 'api/products'
export const BRANDS_API = SERVER_ADDR + 'api/brands'
export const VOLUMES_API = SERVER_ADDR + 'api/volumes'
export const COUNTRIES_API = SERVER_ADDR + 'api/countries'
export const PACKAGES_API = SERVER_ADDR + 'api/packages'
export const PICKPOINTS_API = SERVER_ADDR + 'api/pickpoints'
export const TAGS_API = SERVER_ADDR + 'api/tags';

export const SUBCATEGORY_BY_COUNTRY_API = PRODUCTS_API + '/byCountry/'
export const SUBCATEGORY_BY_TYPE_API = PRODUCTS_API + '/byType/'
export const COLLECTIONS_API = PRODUCTS_API + '/byCollection'
export const RECOMENDATION_API = PRODUCTS_API + '/recomend'

// Redux

export const START = '_START'
export const SUCCESS = '_SUCCESS'
export const FAIL = '_FAIL'


// API
export const FETCH_CATEGORIES_LIST__API = 'FETCH_CATEGORIES_LIST__API'
export const FETCH_TAGS_LIST__API = 'FETCH_TAGS_LIST__API'
export const GET_PRODUCT_BY_TAG_NAME = 'GET_PRODUCT_BY_TAG_NAME'
export const GET_PRODUCTS_BY_CATEGORY__API = 'GET_PRODUCTS_BY_CATEGORY__API'
export const GET_ONE_SCU_BY_PRODUCTS__API = 'GET_ONE_SCU_BY_PRODUCTS__API'
export const GET_PRODUCTS_BY_SUBCATEGORY__API = 'GET_PRODUCTS_BY_SUBCATEGORY__API'
export const GET_PRODUCTS_BY_COLLECTION__API = 'GET_PRODUCTS_BY_COLLECTION__API'
export const GET_PRODUCTS_BY_RECOMENDATION__API = 'GET_PRODUCTS_BY_RECOMENDATION__API'
export const GET_PICKPOINT = 'GET_PICKPOINT'

export const GET_DETAIL_TAG = 'GET_DETAIL_TAG'
export const GET_DETAIL_CATEGORY = 'GET_DETAIL_CATEGORY'

export const SHOW_LOADER = 'SHOW_LOADER'


export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY'
export const GET_PRODUCTS_BY_SUBCATEGORY = 'GET_PRODUCTS_BY_SUBCATEGORY'
export const GET_PRODUCTS_BY_BRAND = 'GET_PRODUCTS_BY_BRAND'
export const GET_PRODUCT_ITEM = 'GET_PRODUCT_ITEM'
export const GET_PRODUCTS_BY_COLLECTION = 'GET_PRODUCTS_BY_COLLECTION'

export const FILTER_PRODUCT_BY_TYPE = 'FILTER_PRODUCT_BY_TYPE'
export const FILTER_PRODUCT_BY_BRAND = 'FILTER_PRODUCT_BY_BRAND'
export const FILTER_PRODUCT_BY_VOLUME = 'FILTER_PRODUCT_BY_VOLUME'
export const FILTER_PRODUCT_BY_COUNTRY = 'FILTER_PRODUCT_BY_COUNTRY'
export const FILTER_PRODUCT_BY_PACKAGE = 'FILTER_PRODUCT_BY_PACKAGE'

export const GET_FILTERS = 'GET_FILTERS'


export const GET_CART_FROM_LOCAL_STORAGE = 'GET_CART_FROM_LOCAL_STORAGE'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_BASKET'
export const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART'
export const GET_CART_LENGTH = 'GET_CART_LENGTH'
export const GET_TOTAL_SUM_FROM_CART = 'GET_TOTAL_SUM_FROM_CART'
