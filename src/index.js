module.exports = function check(str, bracketsConfig) {
  let result = true;
    
    const openBrck = bracketsConfig.flat().filter((brck, i) => i % 2 === 0);
    const closeBrck = bracketsConfig.flat().filter((brck, i) => i % 2 === 1);
    const checkArr = [];
    const strToArray = str.split('');

    if (strToArray.length % 2 != 0) {
        result = false;
    } else {
        strToArray.forEach(elnt => {
            if (closeBrck.includes(elnt)) {
                if (openBrck.includes(elnt) && !checkArr.includes(elnt)) {
                    checkArr.push(elnt)
                } else {
                    let lastElnt = checkArr.pop()
                    if (closeBrck.indexOf(elnt) === openBrck.indexOf(lastElnt)) {
                        result = true;
                    } else {
                        result = false;
                    }
                }
            } else if (openBrck.includes(elnt)) {
                checkArr.push(elnt)
            }
        });
    }
    if (checkArr.length > 0) {
        result = false;
    }
    return result;
}

