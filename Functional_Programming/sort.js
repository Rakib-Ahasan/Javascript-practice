var arr = [4,8,1,6,7,9,4,3,5,6]
// arr.sort()
// console.log(arr)

arr.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else{
        return 0
    }
})
console.log(arr)