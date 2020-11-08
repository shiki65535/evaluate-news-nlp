function urlFormatCheck(input){
    const checkForHTTP = /^http:\/\/|^https:\/\//i;
    const checkForSpace = /\s/;

        if (checkForHTTP.test(input) && !checkForSpace.test(input)){
            return true;
        } else {
            return false;
        }
}

export { urlFormatCheck }