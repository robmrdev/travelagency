import React from 'react'
import movData from '../../assets/data.json'

const Test = () => {

    const string = ["1","2","3","4","5"];

    const numbers = string.map(Number)

    // numbers.forEach((item, index, arr) =>{
    //     console.log(`item  ${index} = `+ item)
    // })


    const letters = ['a','b','a','b','c','a','c','a','d']

    const count = {}

    letters.forEach(item=>{
        if(count[item]){
            count[item]++
        }else{
            count[item]=1
        }
    })

    console.log(numbers)


  return (
    <div>Test</div>
  )
}

export default Test