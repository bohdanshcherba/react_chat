function addZero(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

const getCurrentDate = () => {
    let today = new Date();

    return today.getFullYear() + '-' + addZero(today.getMonth() + 1) + '-' + addZero(today.getDate())
        + 'T' + addZero(today.getHours()) + ':' + addZero(today.getMinutes())
        + ':' + addZero(today.getSeconds())+ '.' + today.getMilliseconds() + 'Z'


}

export default getCurrentDate
