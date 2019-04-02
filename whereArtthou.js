function whatIsInName(collection, source){

    var srcKeys= object.keys(source);

    return collection.filter(function (obj){
        for(var i  = 0; i<srcKeys.length;i++){
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i] !== source[srcKeys[i]]]){
                return false;
            }
        }
        return true;
    })
}

console.log(whatIsInName([{first:"rome",last: "monty"},
                            {frist: "sdfs",last: "sdfsdf"},{
                            first:"tybalt", last:"catapault"
                            }],{last: "catapulet"}))