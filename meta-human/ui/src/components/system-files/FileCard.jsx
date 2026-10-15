import { motion } from "framer-motion"

function FileCard({ file, index, type, totalCards, onClick }) {

const isCurrent = type === "current"

const styles = {

card:{
position:"absolute",
width:"300px",
height:"200px",
borderRadius:"16px",

background: isCurrent
? "rgba(160,160,160,0.05)"
: "rgba(210,120,255,0.05)",

border: isCurrent
? "1px solid rgba(160,160,160,0.22)"
: "1px solid rgba(210,120,255,0.28)",

color:"white",
backdropFilter:"blur(10px)",
cursor:"pointer",
transformStyle:"preserve-3d"
},

title:{
position:"absolute",
top:"14px",
left:"18px",
fontSize:"14px",
opacity:0.85,
letterSpacing:"0.5px"
}

}

const spacing = 20
const middleIndex = (totalCards - 1) / 2

const offset = (index - middleIndex) * spacing
const yOffset = index * 5
const floatAmount = 4

return(

<motion.div

onClick={onClick}
onKeyDown={(event)=>{
if(event.key === "Enter" || event.key === " "){
event.preventDefault()
onClick?.()
}
}}
role="button"
tabIndex={0}
aria-label={file.code + " " + file.title + (isCurrent ? ", prototype stage" : ", future concept")}

style={{
position:"absolute",
left:"calc(50% - 150px)",
top:"120px",
transform:"translate(-50%, -50%)",
zIndex:index
}}

initial={{
x: offset,
y: yOffset,
rotateY:18
}}

animate={{
x: offset,
y: yOffset,
rotateY:18
}}

whileHover={{
y: yOffset - 40,
scale:1.03
}}

transition={{
type:"spring",
stiffness:260,
damping:18
}}

>

<motion.div

style={styles.card}

animate={{
y:[-floatAmount,floatAmount]
}}

transition={{
duration:3,
repeat:Infinity,
repeatType:"mirror",
ease:"easeInOut",
delay:index*0.2
}}

>

<div style={styles.title}>
{file.title}
</div>

</motion.div>

</motion.div>

)

}

export default FileCard
