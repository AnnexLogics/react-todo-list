import React, { useEffect, useState } from 'react'

export default function Home() {
 
  const[ currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(()=>setCurrentTime(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});
  return (
    <div>
        <h1>Hello word {currentTime.toLocaleTimeString()} </h1>
       
    </div>
  )
}
