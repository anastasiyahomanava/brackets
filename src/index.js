module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
    const findBrackets = bracketsConfig[i].join('');

    if (str.includes(findBrackets)) {
        str = str.replace(findBrackets, '');
        i = -1;
    }
}

    return str.length === 0 ? true : false;
}
