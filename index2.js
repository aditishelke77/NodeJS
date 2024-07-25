const numbers = [3,9,5,2,4,7]
let sum = 0
for (let i=0; i<numbers.length; i++)
{
    if(numbers[i] % 2 == 1)
    {
        sum+=numbers[i]
    }
}
console.log(`sum: ${sum}`)