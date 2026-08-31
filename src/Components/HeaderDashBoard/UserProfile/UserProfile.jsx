import React from 'react'
import Avatar from "../../../assets/imges/image 11.png";

export default function UserProfile() {
  return (
         <div className="rounded-full bg-[linear-gradient(180deg,#007BFF_0%,rgba(246,242,250,0)_100%)] p-px">
           <div className="rounded-full bg-white">
             <img
               src={Avatar}
               alt="avatar"
               className="w-12 h-12 rounded-full object-cover p-1"
             />
           </div>
         </div>
  )
}
