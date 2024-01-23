import React from 'react'
import Person from './Person'

function NameList() {
    const names=['mrunu','manu','minu']
    const persons=[
        {
        id:1,
        name:'mrunu',
        age:20,
        skill:'react'
        },
        {
            id:2,
            name:'mrunu',
            age:20,
            skill:'react'
        },
        {
            id:3,
            name:'mrunu',
            age:20,
            skill:'react'
        },
        {
            id:4,
            name:'mrunu',
            age:20,
            skill:'react'
        }
    ]
const nameList=names.map((name,index)=><h2 key={name}>{name} {index}</h2>)
  return (
    <div>
     {nameList }
    </div>
  )
}

export default NameList
