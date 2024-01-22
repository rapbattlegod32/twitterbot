//function for a delay, 1000 = 1 second
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

module.exports = { delay }