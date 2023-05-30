import React from 'react'
import Dropdown from '../dropdown/Dropdown';
import './list.css'
import aspectList from '../../json/tempAspect.json'

const List = (props) => {
    const {name} = props
  return (
    <div className='container'>
        <div className='listContainer'>
            <div className='listAvatar'>
                <img src='./avatar.png' width="30px" className='imgAvatar' alt='avatar'/>
            </div>
            <div className='listName'>
                <p>{name}</p>
            </div>
                {aspectList.map( (val,index) => {
                    return(
                        <Dropdown key={index} keyComp={Object.keys(val).toString()} list={Object.values(val)} {...props}/>
                    )
                })}
        </div>
    </div>
  )
}
export default List;
