import React,{useRef,useEffect, useState} from 'react'
import Notification from '../../assets/audio/notification.mp3'

function UseRef() {

const notificationPlayer = useRef(null)

const [isPlaying, setIsPlaying] = useState(false)

const handlePlay = () => {
    if (!isPlaying) {
        notificationPlayer.current.play()
        setIsPlaying(true)
    } else {
        notificationPlayer.current.pause()
        setIsPlaying(false)
    }
}

useEffect(() => {
    console.log('useEffect is working') 
    console.log(notificationPlayer.current.play())
}, [])

  return (
    <div>
        <audio ref={notificationPlayer} src={Notification}>audio</audio>
        <button
        onClick={handlePlay}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isPlaying ? 'pause notification' : 'play notification'}
        </button>

    </div>
  )
}

export default UseRef