import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const styles = [
  { weight:400, skew:0 },
  { weight:600, skew:0 },
  { weight:800, skew:0 },
  { weight:500, skew:-6 },
  { weight:700, skew:-6 }
]

function SlotLetter({ letter, delay }){

  const [styleIndex,setStyleIndex] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{

      const random = Math.floor(Math.random()*styles.length)
      setStyleIndex(random)

    },3000 + delay)   // slower change (3 seconds)

    return ()=>clearInterval(interval)

  },[delay])

  const current = styles[styleIndex]

  return(

    <div
      style={{
        height:"1.4em",
        overflow:"hidden",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}
    >

      <AnimatePresence mode="wait">

        <motion.div
          key={styleIndex}

          initial={{ y:-80 }}
          animate={{ y:0 }}
          exit={{ y:80 }}

          transition={{
            duration:0.6,
            ease:"easeInOut"
          }}

          style={{
            fontWeight:current.weight,
            transform:`skewX(${current.skew}deg)`
          }}
        >
          {letter}
        </motion.div>

      </AnimatePresence>

    </div>

  )

}

function AnimatedTitle(){

  const text = "Meta Human"

  return(

    <div
      style={{
        display:"flex",
        fontFamily:"Inter",
        fontSize:"72px",
        lineHeight:"1.2"
      }}
    >

      {text.split("").map((letter,i)=>{

        if(letter === " "){
          return <div key={i} style={{width:"22px"}} />
        }

        return(
          <SlotLetter
            key={i}
            letter={letter}
            delay={i*300}   // stagger between letters
          />
        )

      })}

    </div>

  )

}

export default AnimatedTitle