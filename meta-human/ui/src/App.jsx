import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router";

import logo from "./assets/logo/logo.png";

import Home from "./pages/Home";
import ProjectMatrix from "./pages/ProjectMatrix";
import About from "./pages/About";

/* NEW PAGE */
import SystemFiles from "./pages/system-files/SystemFiles";

/* NAVBAR */
import Navbar from "./components/Navbar";


function AnimatedRoutes(){

  const location = useLocation();

  return(

    <AnimatePresence mode="wait">

      <motion.div
        key={location.pathname}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:1.5}}
      >

        <Routes location={location}>

          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<ProjectMatrix/>} />
          <Route path="/about" element={<About/>} />

          {/* SYSTEM FILES PAGE */}
          <Route path="/system-files" element={<SystemFiles/>} />

          {/* OPTIONAL FEATURES ROUTE */}
          <Route path="/features" element={<SystemFiles/>} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>

      </motion.div>

    </AnimatePresence>

  );

}


function App(){

  const LOADER_DURATION = 3500;

  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    const timer = setTimeout(()=>{
      setLoading(false);
    },LOADER_DURATION);

    return ()=>clearTimeout(timer);

  },[]);

  const styles={

    container:{
      background:"black",
      height:"100vh",
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },

    logo:{
      width:"45px"
    }

  };

  if(loading){

    return(

      <div style={styles.container}>

        <motion.img
          src={logo}
          alt="MetaHuman"
          style={styles.logo}
          initial={{scale:0.9,opacity:0.8}}
          animate={{scale:1.1,opacity:1}}
          transition={{
            duration:1.6,
            ease:"easeInOut",
            repeat:Infinity,
            repeatType:"mirror"
          }}
        />

      </div>

    );

  }

  return(

    <Router>

      {/* GLOBAL NAVBAR */}
      <Navbar/>

      <AnimatedRoutes/>

    </Router>

  );

}

export default App;
