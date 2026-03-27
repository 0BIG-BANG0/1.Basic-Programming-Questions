// function nestedArray(arr){
//     //Infinity flatens to any depth
    
//     return arr.flat(Infinity)//flat takes depth till when it has to go inside of the 
// }
// let arr = [1,2,3,[1,2,[1,1,[2,2,[3,3,[4,4]]]]],4,5]
// let res = nestedArray(arr)
// console.log(res)

function flatten(arr){
    let result = []

    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flatten(item))
        }else{
            result.push(item)
        }
    }
    return result
}
let arr = [1,2,3,[1,2,[1,1,[2,2,[3,3,[4,4]]]]],4,5]
let res = flatten(arr)
console.log(res)