
export const fakeMenu = [

  {
    id: '2',
    itemId: 'napitki',
    itemName: 'Напитки',
    showItemName: 'Все напитки',
    bannerUrl: '/img/common/drinks-banner.png',
    showName: 'Каталог напитков',
    slogan: 'Напитки от отечественных и зарубежных производителей',
    promoBanner: '/img/common/drinksPromoBanner.png',
    subCategoryes: [
      {name: 'Вода', itemId: '/catalog/napitki/byTag/water'},
      {name: 'Соки', itemId: '/catalog/napitki/byTag/juices'},
      {name: 'Лимонады', itemId: '/catalog/napitki/byTag/lemonades'},
      {name: 'Энергитиеские напитки', itemId: '/catalog/napitki/byTag/energy'}
    ]
  },
  {
    id: '3',
    itemId: 'pivo',
    itemName: 'Пиво и сидр',
    showItemName: 'Всё пиво и сидр',
    bannerUrl: '/img/common/beer-banner.png',
    showName: 'Каталог пива',
    slogan: 'Пиво от отечественных и зарубежных производителей',
    promoBanner: '/img/common/beerPromoBanner.png',
    subCategoryes: [
      {name: 'Российское пиво', itemId: '/catalog/pivo/country/rossiya'},
      {name: 'Импортное пиво', itemId: '/catalog/collections/importbeer'},
      {name: 'Крафтовое пиво', itemId: '/catalog/pivo/byTag/craft'},
      {name: 'Безалкогольное пиво', itemId: '/catalog/pivo/byTag/free-alc'},
    ]
  },
  {
    id: '4',
    itemId: 'bokaliy',
    itemName: 'Кружки и бокалы',
    showItemName: 'Все бокалы и кружки',
    bannerUrl: '/img/common/water-banner.png',
    showName: 'Каталог кофе и чая',
    slogan: 'Кофе и чай от отечественных и зарубежных производителей',
    promoBanner: '/img/common/glassPromoBanner.png',
    subCategoryes: [
      {name: 'Бокалы', itemId: '/catalog/bokaliy/byTag/bokali'},
      {name: 'Кружки', itemId: '/catalog/bokaliy/byTag/kruzhki'}
    ]
  }
]
