/*

Exercise-5:(2)
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count. You may use  reduce to solve the problem

Examples:
    vowelCount('samim') // {a:1,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    //your code goes here

    const strArr = str.toLowerCase().split('')
    const vowels = 'aeiou'
    console.log(strArr);

    return strArr.reduce((acc, curr)=>{

        if(vowels.includes(curr)){
            if(curr in acc){

                acc[curr] = acc[curr]+1
            }else{
                acc[curr] = 1
            }
        }

        return acc
    },{})
}

console.log(vowelCount('samim'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));
console.log(vowelCount('I Am awesome and so are you'));