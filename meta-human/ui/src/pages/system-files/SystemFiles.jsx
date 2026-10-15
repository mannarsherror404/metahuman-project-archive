import { useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

import BackButton from "../../components/BackButton"
import FileStack from "../../components/system-files/FileStack"
import FileViewer from "../../components/system-files/FileViewer"
import FloatingElements from "../../components/FloatingElements"
import "./SystemFiles.css"

function SystemFiles(){

const [activeFile,setActiveFile] = useState(null)

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

const styles = {

page:{
background:"#000",
color:"#fff",
height:"100vh",
width:"100vw",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"flex-start",
boxSizing:"border-box",
fontFamily:"Inter, system-ui",
position:"relative",
overflow:"hidden"
},

header:{
fontSize:"34px",
marginBottom:"16px",
letterSpacing:"1px",
zIndex:5
},

subheader:{
zIndex:5,
margin:"0 0 26px",
color:"rgba(255,255,255,0.55)",
fontSize:"13px",
letterSpacing:"1px",
textAlign:"center"
},

hint:{
position:"absolute",
fontSize:"13px",
letterSpacing:"1px",
background:"linear-gradient(90deg,#aaa,#fff,#aaa)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent",
opacity:0.7,
zIndex:5
}

}

return(

<div className="system-files-page" style={styles.page} onMouseMove={handleMouseMove}>

{/* FLOATING BACKGROUND */}

<motion.div
style={{
position:"absolute",
top:0,
left:0,
width:"100%",
height:"100%",
x:springX,
y:springY,
zIndex:0
}}
>
<FloatingElements/>
</motion.div>

{/* TITLE */}

<div style={styles.header}>
Feature Files
</div>

<p style={styles.subheader}>
12 stages of the original voice prototype · 2 future concepts
</p>

{/* FILE STACK */}

<FileStack
onFileClick={(file)=>setActiveFile(file)}
/>

{/* HINT */}

<div className="system-files-hint" style={styles.hint}>
Click on a file to reveal the feature
</div>

{/* VIEWER */}

<FileViewer
file={activeFile}
onClose={()=>setActiveFile(null)}
/>

{/* BOTTOM BACK BUTTON */}

<BackButton/>

</div>

)

}

export default SystemFiles
