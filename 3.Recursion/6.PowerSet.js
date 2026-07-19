//Approach 1 : Pick/Dont Pick (Recursion Backtracking)
function powerSet(nums){
    function helper(ps,i){
        if(i === nums.length){
            console.log(ps)
            return
        }
        //Pick
        ps.push(nums[i])
        helper(ps,i+1)
        //Dont pick
        ps.pop()
        helper(ps,i+1)
    }
    helper([],0)
    
}
let nums = [1,2,3]
powerSet(nums)