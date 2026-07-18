function printSubsequences(i,arr,sbs){
    if(i===arr.length){
        console.log(sbs)
        return 
    }
    //Pick
    sbs.push(arr[i])
    printSubsequences(i+1,arr,sbs)

    //backtrack
    sbs.pop()

    //DOntPick
    printSubsequences(i+1,arr,sbs)
}
let arr = [3,1,2]
printSubsequences(0,arr,[])