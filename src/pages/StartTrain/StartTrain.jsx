import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import imgMove from "../../assets/imges/image 13.png"
export default function StartTrain() {
  return (
    <div className=''>
        <Navbar/>
        <div>
            <div className="flex">
                <img src={imgMove} alt="" />
            </div>
        </div>
    </div>
  )
}
