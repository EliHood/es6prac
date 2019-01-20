// Array practice


// object to an array

let myArray = {
    name: 'owl',
    age: 23
}

newArr = []


Object.keys(myArray).forEach( (item)=> {
    newArr.push(myArray[item])
})

const get = (arr) => {

    Object.keys(arr).forEach( (item)=> {
        newArr.push(arr[item])
    });

    return newArr;

}

owl = get(myArray)
console.log(owl);