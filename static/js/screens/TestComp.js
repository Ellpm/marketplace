import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CatalogLoader from '../components/common/Loaders/CatalogLoader'

const BASE_URL = "http://195.201.137.93:2999/brands";
const WEATHER_URL = "https://api.weatherbit.io/v2.0/current?city=Moscow,RU&key=b4492c70adde4c55887d5b8b19a778b5";

const Weather = (props) => {
  return(
    <div>
      <CatalogLoader />
      <h1>В Москве сейчас:</h1>
      <h3>{props.data.temp} градусов по Цельсию, ощущается как {props.data.app_temp}</h3>
      <h3>Ветер дует со скоростью: {props.data.wind_spd} м/с</h3>
      <h3>Закат ожидается в {props.data.sunset}</h3>
    </div>
  )
}

const Item = (props) => {
  return(
    <div>
      <p>{props.brand.brandName}</p>
    </div>
  )
}


const coords = [
  {
  point_id: "МД00011059",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Шверника ул, дом № 13, корпус 1",
  coords: [
  55.691679,
  37.589096
  ],
  internal_id: ""
  },
  {
  point_id: "МД00013513",
  show_name: "Getdrinks Пункт выдачи ",
  address: "141401, Московская обл, Химки г, Сходня мкр, Мичурина ул, дом № 17",
  coords: [
  55.945503,
  37.300485
  ],
  internal_id: ""
  },
  {
  point_id: "МД00010012",
  show_name: "Getdrinks Пункт выдачи ",
  address: "105077, Москва г, Сиреневый б-р, дом № 44",
  coords: [
  55.802583,
  37.815471
  ],
  internal_id: ""
  },
  {
  point_id: "МД00008373",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Петровско-Разумовский проезд, дом № 16",
  coords: [
  55.797574,
  37.569468
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД012949",
  show_name: "Getdrinks Пункт выдачи ",
  address: "119602, Москва г, Покрышкина ул, дом № 5, строение 1",
  coords: [
  55.664126,
  37.470069
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД003014",
  show_name: "Getdrinks Пункт выдачи ",
  address: "143969, Московская обл, Реутов г, Юбилейный пр-кт, дом № 47",
  coords: [
  55.752561,
  37.876404
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД014691",
  show_name: "Getdrinks Пункт выдачи ",
  address: "119633, Москва г, Боровское ш., дом № 27",
  coords: [
  55.64475,
  37.365748
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД012885",
  show_name: "Getdrinks Пункт выдачи ",
  address: "125459, Москва г, Яна Райниса б-р, дом № 8",
  coords: [
  55.850899,
  37.427318
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД009946",
  show_name: "Getdrinks Пункт выдачи ",
  address: "111674, Москва г, Рождественская ул, дом № 31",
  coords: [
  55.705914,
  37.931722
  ],
  internal_id: ""
  },
  {
  point_id: "МД00001134",
  show_name: "Getdrinks Пункт выдачи ",
  address: "127224, Москва г, Шокальского проезд, дом № 61",
  coords: [
  55.883989,
  37.666782
  ],
  internal_id: ""
  },
  {
  point_id: "МД00014027",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Судостроительная ул, дом № 37/11",
  coords: [
  55.684488,
  37.685817
  ],
  internal_id: ""
  },
  {
  point_id: "МД00008912",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Родионовская ул, дом № 12",
  coords: [
  55.893854,
  37.389607
  ],
  internal_id: ""
  },
  {
  point_id: "МД00010983",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Щелковское ш, дом № 12, корпус 1",
  coords: [
  55.806105,
  37.770079
  ],
  internal_id: ""
  },
  {
  point_id: "МД00007338",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Химкинский б-р, дом № 1",
  coords: [
  55.850328,
  37.451168
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД009976",
  show_name: "Getdrinks Пункт выдачи ",
  address: "121596, Москва г, Толбухина ул, дом № 8, корпус 1",
  coords: [
  55.719282,
  37.401833
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД011729",
  show_name: "Getdrinks Пункт выдачи ",
  address: "111020, Москва г, Юрьевский пер, дом № 22, корпус 1",
  coords: [
  55.76253,
  37.717447
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД010604",
  show_name: "Getdrinks Пункт выдачи ",
  address: "115597, Москва г, Ясеневая ул, дом № 32, корпус 3",
  coords: [
  55.602993,
  37.740246
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД014115",
  show_name: "Getdrinks Пункт выдачи ",
  address: "115582, Москва г, Ясеневая ул, дом № 12, корпус 1",
  coords: [
  55.601203,
  37.727553
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД009975",
  show_name: "Getdrinks Пункт выдачи ",
  address: "119620, Москва г, Солнцевский пр-кт, дом № 2, строение 3",
  coords: [
  55.652578,
  37.396865
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД013820",
  show_name: "Getdrinks Пункт выдачи ",
  address: "115470, Москва г, Судостроительная ул, дом № 17",
  coords: [
  55.681387,
  37.674445
  ],
  internal_id: ""
  },
  {
  point_id: "МД00009728",
  show_name: "Getdrinks Пункт выдачи ",
  address: "141400, Московская обл, Химки г, Московская ул, дом № 7/1",
  coords: [
  55.892006,
  37.448222
  ],
  internal_id: ""
  },
  {
  point_id: "МД00012220",
  show_name: "Getdrinks Пункт выдачи ",
  address: "117463, Москва г, Паустовского ул, дом № 6, корпус 1",
  coords: [
  55.600318,
  37.53906
  ],
  internal_id: ""
  },
  {
  point_id: "МД00007404",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Летчика Бабушкина ул, дом № 10/1",
  coords: [
  55.862171,
  37.674606
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД009002",
  show_name: "Getdrinks Пункт выдачи ",
  address: "123308, Москва г, Маршала Жукова пр-кт, дом № 17",
  coords: [
  55.775363,
  37.492778
  ],
  internal_id: ""
  },
  {
  point_id: "МД00009367",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Черкизовская Б. ул, дом № 6",
  coords: [
  55.796203,
  37.719594
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД011384",
  show_name: "Getdrinks Пункт выдачи ",
  address: "125499, Москва г, Кронштадтский б-р, дом № 47",
  coords: [
  55.851717,
  37.511724
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД014076",
  show_name: "Getdrinks Пункт выдачи ",
  address: "107258, Москва г, Гражданская 3-я ул, дом № 70",
  coords: [
  55.807956,
  37.713566
  ],
  internal_id: ""
  },
  {
  point_id: "МД00008914",
  show_name: "Getdrinks Пункт выдачи ",
  address: "Москва г, Вешняковская ул, дом № 39Г",
  coords: [
  55.718136,
  37.826161
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД009000",
  show_name: "Getdrinks Пункт выдачи ",
  address: "108818, Москва г, Десеновское п, Нововатутинская 5-я ул, дом № 9, помещение 3",
  coords: [
  55.516379,
  37.347368
  ],
  internal_id: ""
  },
  {
  point_id: "МД00014045",
  show_name: "Getdrinks Пункт выдачи ",
  address: "129346, Москва г, Малыгина ул, дом № 5, корпус 1",
  coords: [
  55.879526,
  37.696588
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД010460",
  show_name: "Getdrinks Пункт выдачи ",
  address: "119313, Москва г, Ленинский пр-кт, дом № 89/2",
  coords: [
  55.677935,
  37.531622
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД010602",
  show_name: "Getdrinks Пункт выдачи ",
  address: "108814, Москва г, Сосенское п, Коммунарка п, Александры Монаховой ул, дом № 96, корпус 2",
  coords: [
  55.540949,
  37.486544
  ],
  internal_id: ""
  },
  {
  point_id: "МД00007459",
  show_name: "Getdrinks Пункт выдачи ",
  address: "143350, Москва г, Октябрьская ул, дом № 18",
  coords: [
  55.787285,
  37.613997
  ],
  internal_id: ""
  },
  {
  point_id: "МД00007448",
  show_name: "Getdrinks Пункт выдачи ",
  address: "115093, Москва г, Серпуховская Б. ул, дом № 48/1",
  coords: [
  55.721944,
  37.626987
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД009947",
  show_name: "Getdrinks Пункт выдачи ",
  address: "117041, Москва г, Чечерский (п Воскресенское) проезд, дом № 126",
  coords: [
  55.527581,
  37.514077
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД010940",
  show_name: "Getdrinks Пункт выдачи ",
  address: "108814, Москва г, Сосенское п, Коммунарка п, Лазурная ул, дом № 11, помещение IV",
  coords: [
  55.56588,
  37.472629
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД005195",
  show_name: "Getdrinks Пункт выдачи ",
  address: "123154, Москва г, Народного Ополчения ул, дом № 29, корпус 1",
  coords: [
  55.781585,
  37.479708
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД014152",
  show_name: "Getdrinks Пункт выдачи ",
  address: "109651, Москва г, Донецкая ул, дом № 23, строение 2",
  coords: [
  55.6473,
  37.715534
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД014633",
  show_name: "Getdrinks Пункт выдачи ",
  address: "141090, Московская обл, Королев г, Юбилейный мкр, М.К.Тихонравова ул, дом № 35, корпус 7",
  coords: [
  55.933383,
  37.842735
  ],
  internal_id: ""
  },
  {
  point_id: "00-МД014190",
  show_name: "Getdrinks Пункт выдачи ",
  address: "121354, Москва г, Гришина ул, дом № 16, помещение 2",
  coords: [
  55.722593,
  37.418191
  ],
  internal_id: ""
  }
]



class TextComp extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    data: [],
  }

  handleLoad = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('amap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/mapicon.gif',
              iconImageSize: [10, 10],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }

  handleLoad2 = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('bmap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/mapicon.gif',
              iconImageSize: [15, 15],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }

  handleLoad3 = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('cmap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/mapicon.gif',
              iconImageSize: [20, 20],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }

  handleLoad4 = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('dmap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/mapicon.gif',
              iconImageSize: [25, 25],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }

  handleLoad5 = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('emap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/mapicon.gif',
              iconImageSize: [30, 30],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }

  handleLoad6 = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('fmap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/mapicon.gif',
              iconImageSize: [35, 35],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }

  handleLoad7 = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('gmap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/dino/7.png',
              iconImageSize: [40, 40],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }


  handleLoad8 = () => {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('jmap', {center: [55.753661, 37.619774], zoom: 10}, {
        searchControlProvider: 'yandex#search'});

        for (let i = 0; i < coords.length; i++) {
          var placemark = new window.ymaps.Placemark(coords[i].coords, {
              iconContent: coords[i].point_id,
              hintContent : coords[i].show_name
            }, {
              //preset: "islands#circleDotIcon",
              //iconColor: '#00cc00',
              iconLayout: 'default#image',
              iconImageHref: 'img/common/dino/8.png',
              iconImageSize: [30, 35],
              iconImageOffset: [-5, -28]
          });
          this.localMap.geoObjects.add(placemark);
        }
    });
  }

  componentDidMount() {
    //this.getData()
    this.handleLoad()
    this.handleLoad2()
    this.handleLoad3()
    this.handleLoad4()
    this.handleLoad5()
    this.handleLoad6()
    this.handleLoad7()
    this.handleLoad8()
  }

  getData = () => {
    fetch(WEATHER_URL, {
      method: "GET"
    })
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      this.setState({data: data.data})
    })
  }

  render() {
    return (
      <div>
        <div id='amap' style={{width: '550px', height: '350px'}}></div>
        <div id='bmap' style={{width: '550px', height: '350px'}}></div>
        <div id='cmap' style={{width: '550px', height: '350px'}}></div>
        <div id='dmap' style={{width: '550px', height: '350px'}}></div>
        <div id='emap' style={{width: '550px', height: '350px'}}></div>
        <div id='fmap' style={{width: '550px', height: '350px'}}></div>
        <div id='gmap' style={{width: '550px', height: '350px'}}></div>
        <div id='jmap' style={{width: '550px', height: '350px'}}></div>
      </div>
    );
  }
}

TextComp.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default TextComp;
