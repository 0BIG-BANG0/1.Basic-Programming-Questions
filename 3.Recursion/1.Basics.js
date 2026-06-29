//1. 
function printNamNtimes(name,n){
    if(n<1){
        return 
    }
    console.log(name)
    printNamNtimes(name,n-1)
}
// printNamNtimes("BATMAN",5)

//2
function print1toN(n){
    if(n<1){
        return 
    }
    print1toN(n-1)
    console.log(n)
}
// print1toN(10)

//3
function printNto1(n){
    if(n<1){
        return 
    }
    console.log(n)
    printNto1(n-1)
}
printNto1(10)

