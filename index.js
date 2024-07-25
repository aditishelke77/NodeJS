const marks = [40,70,90,100,400,700,900]

let largest = marks[0]

for(const num of marks)
{
    if(num > largest){
        largest = num
    }
}
console.log(largest)