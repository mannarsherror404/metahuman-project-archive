import { motion } from "framer-motion";

const fractional = (value) => value - Math.floor(value)
const particleValue = (index, salt) =>
  fractional(Math.sin((index + 1) * (salt + 1) * 12.9898) * 43758.5453)

const particles = Array.from({ length: 140 }, (_, index) => {
  const depth = particleValue(index, 2)
  const speed = depth > 0.6 ? 12 : 25

  return {
    size: particleValue(index, 1) * 4 + 2,
    depth,
    speed,
    xPos: particleValue(index, 3) * 100,
    delay: -particleValue(index, 4) * speed,
  }
})

function FloatingElements(){

  return (

    <div
      style={{
        position:"fixed",
        top:0,
        left:0,
        width:"100vw",
        height:"100vh",
        overflow:"hidden",
        pointerEvents:"none",
        zIndex:0
      }}
    >

      {particles.map(({ size, depth, speed, xPos, delay },i)=>{

        return(

          <motion.div
            key={i}

            style={{
              position:"absolute",
              width:size,
              height:size,
              borderRadius:"50%",
              background:"rgba(255,255,255,0.7)",
              opacity:depth,
              left:`${xPos}%`,
              bottom:"-10vh"
            }}

            animate={{
              y:["0vh","-120vh"]
            }}

            transition={{
              duration:speed,
              repeat:Infinity,
              ease:"linear",
              delay
            }}

          />

        )

      })}

    </div>

  )

}

export default FloatingElements
