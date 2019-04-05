function translatePigLatin(str){

    var pigLatin = '';

    var regex = /[aeiou]/gi;

    //checfk if the firs character is a vowel

    if(str[0].match(regex)){
        pigLatin = str + 'way';
    }
    else{
        //find how many consonats before hte first vowel

        var vowelIndice = str.indexof(str.match(regex)[0]);

        //take the string from the first vowel to the last char
        // then add the concosnat that we previously ommited and add the ending

        pingLatin = str.substr(vowelIndice) + str.substr(0,vowelIndice)+'ay';
    }
    return pingLatin;
}
console.log(translatePigLatin("consonant"));