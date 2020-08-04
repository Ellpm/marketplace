import {BASKET_LOCAL_STORAGE_NAME} from '../constans'


export const isInBasket = (product) => {
  let result = false;
  let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
  storageData = JSON.parse(storageData)

  if (Array.isArray(storageData)) {
    for (let i = 0; i < storageData.length; i++) {
      if (storageData[i][0].scu_id == product.scu_id) {
        result = true
      }
    }
  }
  return result
}

export const getLocalStorageData = (key) => {
  let storageData = localStorage.getItem(key)
  return storageData
}

export const setLocalStorageData = (key, data) => {
  // Добавить проверку типа data и try
  localStorage.setItem(key, JSON.stringify(data));
}

export const addLocalStorageData = (key, data) => {
  let storageData = localStorage.getItem(key)
  let temp = JSON.parse(storageData)
  //console.log("THIS", temp, data)
  if (Array.isArray(temp)) {
    temp.push(data)
  } else {
    temp = new Array(data);
  }
  localStorage.setItem(key, JSON.stringify(temp));
}
