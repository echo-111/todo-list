function _addZero (value){
    return value < 10 ? ('0'+ value) : value;
}

function formatDateTime (timeStamp) {
    const date = new Date(timeStamp);

    const y = date.getFullYear(),
          m = date.getMonth()+1,
          d = date.getDate(),
          h = _addZero(date.getHours()),
          i = _addZero(date.getMinutes()),
          s = _addZero(date.getSeconds());

    return `${d}/${m}/${y} ${h}:${i}:${s}`;
}

export {formatDateTime}