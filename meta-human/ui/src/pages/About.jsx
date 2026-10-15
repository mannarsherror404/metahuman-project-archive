import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

import BackButton from "../components/BackButton"
import FloatingElements from "../components/FloatingElements"

import me from "../assets/team/me.png"
import abhideep from "../assets/team/abhideep.png"

function About(){

/* CURSOR PARALLAX SYSTEM */

const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)

const springX = useSpring(mouseX,{ stiffness:40, damping:20 })
const springY = useSpring(mouseY,{ stiffness:40, damping:20 })

const handleMouseMove = (e)=>{

const x = (e.clientX / window.innerWidth - 0.5) * -80
const y = (e.clientY / window.innerHeight - 0.5) * -80

mouseX.set(x)
mouseY.set(y)

}


/* AUTO SCROLL ON FIRST SCROLL */

useEffect(()=>{

let triggered=false

const handleWheel=()=>{

if(!triggered){

triggered=true

window.scrollTo({
top: window.innerHeight,
behavior:"smooth"
})

}

}

window.addEventListener("wheel",handleWheel)

return ()=>window.removeEventListener("wheel",handleWheel)

},[])


const styles={

page:{
background:"#000",
color:"#fff",
width:"100vw",
height:"100vh",
overflowY:"scroll",
overflowX:"hidden",
scrollSnapType:"y mandatory",
fontFamily:"Inter, system-ui",
position:"relative"
},

background:{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
zIndex:0
},

content:{
position:"relative",
zIndex:2
},

section:{
height:"100vh",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
scrollSnapAlign:"start",
position:"relative"
},

title:{
fontSize:"56px",
marginBottom:"120px",
letterSpacing:"1px"
},

scrollBox:{
position:"absolute",
bottom:"90px",
display:"flex",
flexDirection:"column",
alignItems:"center",
gap:"10px",
fontSize:"15px",
opacity:"0.8"
},

arrow:{
fontSize:"26px"
},

teamSection:{
minHeight:"100vh",
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(220px, 240px))",
justifyContent:"center",
alignContent:"center",
columnGap:"clamp(24px, 8vw, 160px)",
rowGap:"48px",
padding:"80px 24px",
boxSizing:"border-box",
scrollSnapAlign:"start"
},

person:{
display:"flex",
flexDirection:"column",
alignItems:"center",
gap:"18px"
},

portraitFrame:{
width:"240px",
height:"360px",
display:"flex",
alignItems:"flex-end",
justifyContent:"center",
cursor:"pointer"
},

portraitImage:{
width:"100%",
height:"100%",
objectFit:"contain",
objectPosition:"center bottom"
},

portraitMe:{
transform:"scale(0.91)",
transformOrigin:"center bottom"
},

description:{
width:"100%",
fontSize:"14px",
opacity:"0.7",
textAlign:"center",
lineHeight:"1.6"
}

}

return(

<div style={styles.page} onMouseMove={handleMouseMove}>

{/* FLOATING PARTICLES BACKGROUND */}

<motion.div
style={{
...styles.background,
x:springX,
y:springY
}}
>

<FloatingElements/>

</motion.div>


<div style={styles.content}>

<BackButton/>

{/* HERO SECTION */}

<section style={styles.section}>

<div style={styles.title}>
About Us
</div>

<div style={styles.scrollBox}>

<div>
Scroll Down
</div>

<motion.div
style={styles.arrow}
animate={{ y:[0,10,0] }}
transition={{
duration:1.8,
repeat:Infinity,
ease:"easeInOut"
}}
>
↓
</motion.div>

</div>

</section>


{/* TEAM SECTION */}

<section style={styles.teamSection}>

<motion.div
style={styles.person}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<motion.div style={styles.portraitFrame} whileHover={{scale:1.06}}>
<img src={abhideep} alt="Abhideep Sahni" style={styles.portraitImage}/>
</motion.div>

<div style={styles.description}>
Abhideep Sahni
</div>

</motion.div>


<motion.div
style={styles.person}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<motion.div style={styles.portraitFrame} whileHover={{scale:1.06}}>
<img src={me} alt="Mannarsh Singh Bali" style={{...styles.portraitImage, ...styles.portraitMe}}/>
</motion.div>

<div style={styles.description}>
Mannarsh Singh Bali
</div>

</motion.div>

</section>

</div>

</div>

)

}

export default About
