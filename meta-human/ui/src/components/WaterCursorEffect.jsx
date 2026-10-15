import { useEffect, useRef } from "react"

function WaterCursorEffect(){

  const canvasRef = useRef(null)

  /* =========================
        CONTROLS
  ========================== */

  const MAX_RIPPLES = 200

  const RIPPLE_MIN_SIZE = 5
  const RIPPLE_MAX_SIZE = 55

  const RIPPLE_SIZE_SPEED = 1
  const RIPPLE_OPACITY = 0.22
  const RIPPLE_FADE_SPEED = 0.002
  const RIPPLE_THICKNESS = 1

  const RIPPLE_SPAWN_RATE = 1

  /* ========================= */

  useEffect(()=>{

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let ripples = []
    let frame = 0

    const createRipple = (x,y)=>{

      if(ripples.length > MAX_RIPPLES){
        ripples.shift()
      }

      ripples.push({
        x,
        y,
        radius: RIPPLE_MIN_SIZE,
        alpha: RIPPLE_OPACITY,
        maxRadius: Math.random()*(RIPPLE_MAX_SIZE-RIPPLE_MIN_SIZE)+RIPPLE_MIN_SIZE
      })

    }

    const draw = ()=>{

      ctx.clearRect(0,0,canvas.width,canvas.height)

      ripples.forEach((r,i)=>{

        ctx.beginPath()
        ctx.arc(r.x,r.y,r.radius,0,Math.PI*2)

        /* ===== Glow + Blur Effect ===== */

        ctx.shadowColor = "rgba(255,255,255,0.25)"
        ctx.shadowBlur = 30

        /* =============================== */

        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`
        ctx.lineWidth = RIPPLE_THICKNESS
        ctx.stroke()

        r.radius += RIPPLE_SIZE_SPEED
        r.alpha -= RIPPLE_FADE_SPEED

        if(r.radius > r.maxRadius || r.alpha <= 0){
          ripples.splice(i,1)
        }

      })

      requestAnimationFrame(draw)

    }

    draw()

    const handleMove = (e)=>{

      frame++

      if(frame % RIPPLE_SPAWN_RATE === 0){
        createRipple(e.clientX,e.clientY)
      }

    }

    window.addEventListener("mousemove",handleMove)

    return ()=>{
      window.removeEventListener("mousemove",handleMove)
    }

  },[])

  return(

    <canvas
      ref={canvasRef}
      style={{
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        pointerEvents:"none",
        zIndex:2
      }}
    />

  )

}

export default WaterCursorEffect