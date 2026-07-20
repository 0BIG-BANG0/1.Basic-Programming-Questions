function countSubsequencesK(nums, target){
    function helper(i,sum){
        //base case
        if(i === nums.length){
            if(sum === target){// if found 
                return 1
            }else{
                return 0
            }
        }

        //Pick 
        let pick = helper(i+1,sum+nums[i])
        //not Pick
        let notPick = helper(i+1,sum)

        return pick + notPick
    }
    return helper(0,0)
}
let nums = [1,2,1]
let ans = countSubsequencesK(nums,2)
console.log(ans)

function printSubsequencesWithSumK(nums, target){
    function helper(i,ds,sum){
        //base case
        if(i === nums.length){
            if(sum === target){// if found 
                console.log(ds)
            }
            return
        }

        //Pick 
        ds.push(nums[i])
        helper(i+1,ds,sum+nums[i])
        //not Pick
        ds.pop()
        helper(i+1,ds,sum)

        
    }
    helper(0,[],0)
}
printSubsequencesWithSumK(nums,2)

function booleanSubsequencesWithSumK(nums, target){
    function helper(i,sum){
        //base case
        if(i === nums.length){
            if(sum === target){// if found 
                return 1
            }else{
                return 0
            }
            
        }

        //Pick 
        let pick = helper(i+1,sum+nums[i])
        //not Pick
        let notPick = helper(i+1,sum)

        if(pick + notPick){
            return true
        }else{
            return false
        }
        
    }
    return helper(0,0)
}
let ans1 = booleanSubsequencesWithSumK(nums,2)
console.log(ans1)