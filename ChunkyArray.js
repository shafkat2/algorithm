function chunkyArrayGroups(arr, size){
    var temp = [];
    var result = [];

        for(var a  = 0; a<arr.length; a++){
            if(a % size !== size -1){
                temp.push(arr[a]);
                console.log(arr[a])
            }
            else{
                temp.push(arr[a]);
                console.log(arra[a])
                result.push(temp);
                temp = [];
            }
        }
        if(temp.length !== 0)
            result.push(temp)
        return result

}

console.log(chunkyArrayGroups([1,2,3,4,5,6,6],2));
