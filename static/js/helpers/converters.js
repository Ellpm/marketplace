import {OrderedMap, Map} from 'immutable';

export const generateSpecTable = (str) => {
  const arr = str.split(';');

  const table = arr.map(item => {
    return(
      '<td> </td>'
    )
  });

  return table;
}


export function arrToMap(arr, DataRecord = Map) {
  return arr.reduce((acc, item) =>
    acc.set(item._id, new DataRecord(item))
  , new OrderedMap({}) );
}

export function mapToArr(obj) {
  return obj.valueSeq().toArray()
}

export const transliterate = ( function() {
    var
        rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
        eng = "shh sh ch cz yu ya yo zh nn iy ee a b v g d e z i j k l m n o p r s t u f x n".split(/ +/g)
	;
	return function(text, engToRus) {
	   var x;
       for(x = 0; x < rus.length; x++) {
            text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
			      text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
        }
        return text;
    }
})();
