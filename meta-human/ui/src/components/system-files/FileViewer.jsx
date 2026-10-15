import { motion, AnimatePresence } from "framer-motion"

function FileViewer({ file, onClose }){

if(!file) return null

/* FEATURE DESCRIPTIONS */

const featureDescriptions = {

"3D MetaHuman":
"The original experience used a 3D MetaHuman as the visible character for the conversation. This is the interface layer, not a separate service.",

"Drag Interaction":
"The character could be repositioned by dragging it in the original interactive build.",

"Spoken Input":
"A person started an interaction by speaking to the MetaHuman rather than typing a prompt.",

"Speech to Text":
"The spoken turn was converted into text so it could be used by the language-model conversation flow.",

"Conversation History":
"Earlier parts of the exchange were kept available so the next answer could respond to what had already been discussed.",

"Context Handoff":
"The relevant conversation context was passed together with the latest user turn to the language model.",

"LLM Input":
"The voice-derived user request and prior context formed the input for the LLM. This is a stage of the same conversation pipeline.",

"Answer Generation":
"The LLM generated a response to the user's request using the supplied context.",

"Reply Text":
"The generated answer existed as text before it was converted into audio for the user.",

"Voice Synthesis":
"The answer text was converted into a spoken voice response.",

"Audio Reply":
"The response was played back so the user could hear the answer from the MetaHuman experience.",

"Conversation Loop":
"Input, context, answer generation, and spoken output worked together as a turn-by-turn voice conversation.",

"Visual Recognition":
"A future concept for face, gaze, or scene understanding. It was not part of the final recorded MetaHuman prototype.",

"Motion Triggers":
"A future concept for motion or gesture-triggered responses. Notifications and motion detection were not part of the final recorded prototype."

}

const description = featureDescriptions[file.title] || "No additional details are available for this feature."


const styles = {

overlay:{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.65)",
display:"flex",
justifyContent:"center",
alignItems:"center",
zIndex:2000
},

viewer:{
width:"700px",
maxWidth:"90%",
height:"420px",
borderRadius:"18px",

background:"rgba(20,20,20,0.9)",
border:"1px solid rgba(255,255,255,0.1)",

backdropFilter:"blur(20px)",

padding:"30px",

display:"flex",
flexDirection:"column",
gap:"20px",

boxShadow:"0 20px 80px rgba(0,0,0,0.6)"
},

header:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
fontSize:"20px",
fontWeight:"500"
},

closeButton:{
cursor:"pointer",
fontSize:"16px",
opacity:0.7
},

content:{
flex:1,
fontSize:"15px",
lineHeight:"1.6",
opacity:0.85
}

}

return(

<AnimatePresence>

<motion.div
style={styles.overlay}
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
onClick={onClose}
>

<motion.div

style={styles.viewer}

initial={{
scale:0.6,
opacity:0,
y:80
}}

animate={{
scale:1,
opacity:1,
y:0
}}

exit={{
scale:0.6,
opacity:0,
y:60
}}

transition={{
type:"spring",
stiffness:180,
damping:20
}}

onClick={(e)=>e.stopPropagation()}

>

<div style={styles.header}>

<div>
{file.title}
</div>

<div
style={styles.closeButton}
onClick={onClose}
>
✕
</div>

</div>

<div style={styles.content}>
{description}
</div>

</motion.div>

</motion.div>

</AnimatePresence>

)

}

export default FileViewer
