import { useNavigate } from "react-router"

function BackButton({ placement = "bottom" }){

const navigate = useNavigate()

const styles={

button:{
position:"fixed",
...(placement === "top" ? { top: "90px" } : { bottom: "30px" }),
left:"30px",
width:"48px",
height:"48px",
borderRadius:"50%",
border:"1px solid rgba(255,255,255,0.2)",
background:"rgba(0,0,0,0.5)",
color:"white",
fontSize:"18px",
cursor:"pointer",
display:"flex",
alignItems:"center",
justifyContent:"center",
backdropFilter:"blur(10px)",
transition:"all 0.25s ease",
zIndex:50
}

}

return(

<button
type="button"
aria-label="Back to home"
style={styles.button}
onClick={()=>navigate("/")}
onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
onMouseLeave={(e)=>e.target.style.transform="scale(1)"}
>

←

</button>

)

}

export default BackButton
