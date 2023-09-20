const string = [
    {
    "name": "laptop",
    "price": 1500,
    "stock": 10
    },
    {
    "name": "desktop",
    "price": 1000,
    "stock": 8
    },
    {
    "name": "phone",
    "price": 800,
    "stock": 15
    }
];




const itemsValues = string.map((item)=>{
    return { name : item.name,
    total : item.price * item.stock}
})
const itemValue= {}



const newstring=string.map((item)=>{
    return{
        ...item,
        "price":item.price*2
    }
})


// console.log(newstring)



const numbers = [3,54,23,11,105];

const sorted = numbers.sort((a,b)=> a- b)
// const deleted = numbers.splice(2,3,'a','b','a','b','a','b')

console.log(sorted)
// console.log(numbers)
// console.log(deleted)

const even = numbers.filter((i)=>{
    return i %2 == 0;
})

const notEven = numbers.filter((i)=>{
    return i %2 !== 0;
})

// console.log(notEven)

const expensive = string.filter(i=>i.stock>10)

// console.log(expensive)



const letters = ['a','b','a','b','c','a','c','a','d']


const newletters = letters.filter((item,index,arr)=>{
    return arr.indexOf(item)===index
})

// console.log(newletters)

const total = string.reduce((acc, item, arr)=>{
    if (item.price<acc.price){
        return acc
    }else {
        return item
    }
},0)

// console.log(total)