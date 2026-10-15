import FileCard from "./FileCard"

function FileStack({ onFileClick }){

const files = [

/* Stages of the original voice-first prototype, not separate shipped products. */
{ id:1, code:"A1", title:"3D MetaHuman", type:"current" },
{ id:2, code:"A2", title:"Drag Interaction", type:"current" },
{ id:3, code:"B1", title:"Spoken Input", type:"current" },
{ id:4, code:"B2", title:"Speech to Text", type:"current" },
{ id:5, code:"C1", title:"Conversation History", type:"current" },
{ id:6, code:"C2", title:"Context Handoff", type:"current" },
{ id:7, code:"D1", title:"LLM Input", type:"current" },
{ id:8, code:"D2", title:"Answer Generation", type:"current" },
{ id:9, code:"E1", title:"Reply Text", type:"current" },
{ id:10, code:"E2", title:"Voice Synthesis", type:"current" },
{ id:11, code:"F1", title:"Audio Reply", type:"current" },
{ id:12, code:"F2", title:"Conversation Loop", type:"current" },

/* Concepts only: not present in the final prototype. */
{ id:13, code:"NEXT 01", title:"Visual Recognition", type:"future" },
{ id:14, code:"NEXT 02", title:"Motion Triggers", type:"future" }

]

const styles = {

container:{
position:"relative",
height:"55vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
perspective:"1400px"
}

}

return(

<div className="system-files-stack" style={styles.container}>

{files.map((file,index)=>(

<FileCard
key={file.id}
file={file}
index={index}
type={file.type}
totalCards={files.length}
onClick={()=>onFileClick && onFileClick(file)}
/>

))}

</div>

)

}

export default FileStack
