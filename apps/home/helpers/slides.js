
import slice from 'lodash/slice'
import concat from 'lodash/concat'

export const slideData = function (data, number = 2) {
  let result = []
  if (data.length === 0 || (data.length <= number)) {
    result[0] = data
  } else {
    const idFirst = data[0].id;
    const repeatData = concat(data, data);
    let count = 0;
    repeatData.map((obj, index) => {
      let dataArray = slice(repeatData, index, index + number);
      if (count !== -1 ) {
        result[count] = dataArray;
        count = dataArray[number-1].id === idFirst? -1: count + 1 ;
      }
    });
  }
  return result;
}
