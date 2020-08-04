
export const getDeliveryDate = () => {
  let today = new Date();
  let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  let mounths = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,девакбря'.split(',')

  return tomorrow.getDate() + ' ' + mounths[tomorrow.getMonth()]
}

export const getTodayDate = () => {
  let today = new Date();
  let tomorrow = new Date(today.getTime() + (1 * 60 * 60 * 1000));
  let mounths = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,девакбря'.split(',')

  return tomorrow.getDate() + ' ' + mounths[tomorrow.getMonth()]
}


export const generateDeliveryDate = () => {
  let mounths = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,девакбря'.split(',')
  let today = new Date();
  let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  let monthTomorrow = tomorrow.getMonth() + 1;
  let result = []
  let count = [1, 3, 5, 7, 9, 11];
  for (let i = 1; i < 6; i++) {
      let lastDay = count.indexOf(monthTomorrow) != 1 ? 30 : 31;
      let date = new Date(today.getTime() + ((24 * 60 * 60 * 1000))*i).getDate();
      if (date == lastDay && monthTomorrow < 12) {
          monthTomorrow++;
      }
      result.push(date + ' ' + mounths[monthTomorrow - 1])
  }
  return result;
}
