import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

import AnimatedTitle from "../components/AnimatedTitle"
import FloatingElements from "../components/FloatingElements"
import WaterCursorEffect from "../components/WaterCursorEffect"
import "./Home.css"

const recordings = [
  {
    number: "01",
    title: "Character setup",
    description: "A look at the MetaHuman character taking shape.",
    duration: "00:12",
    video: "/progress/1.mp4",
    poster: "/progress/1-poster.jpg",
  },
  {
    number: "02",
    title: "Interaction blueprint",
    description: "The visual Blueprint work behind the interaction concept.",
    duration: "00:33",
    video: "/progress/2.mp4",
    poster: "/progress/2-poster.jpg",
  },
  {
    number: "03",
    title: "Scene preview",
    description: "The character placed inside the exhibition environment.",
    duration: "00:30",
    video: "/progress/3.mp4",
    poster: "/progress/3-poster.jpg",
  },
]

function Home() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })
  const videoRefs = useRef([])

  const handleMouseMove = (event) => {
    mouseX.set((event.clientX / window.innerWidth - 0.5) * -80)
    mouseY.set((event.clientY / window.innerHeight - 0.5) * -80)
  }

  const pauseOtherRecordings = (activeIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== activeIndex) video?.pause()
    })
  }

  return (
    <main className="home-page" onMouseMove={handleMouseMove}>
      <motion.div className="home-particles" style={{ x: springX, y: springY }}>
        <FloatingElements />
      </motion.div>

      <div className="home-cursor" aria-hidden="true">
        <WaterCursorEffect />
      </div>

      <div className="home-content">
        <section className="home-hero" aria-label="MetaHuman introduction">
          <p className="home-eyebrow">META HUMAN / PROJECT ARCHIVE</p>
          <div className="home-title"><AnimatedTitle /></div>
          <p className="home-tagline"><i>— into the future —</i></p>
          <p className="home-intro">
            An idea explored through character, interaction, and environment.
          </p>
          <div className="home-scroll-cue" aria-hidden="true">
            <span>THE BUILD, IN THREE RECORDINGS</span>
            <span className="home-scroll-line" />
          </div>
        </section>

        <section className="progress-section" id="progress" aria-labelledby="progress-title">
          <div className="progress-heading">
            <div>
              <p className="progress-kicker">THE PROCESS / 01—03</p>
              <h1 id="progress-title">A project in progress.</h1>
            </div>
            <p className="progress-summary">
              The original live build is no longer available. These three recordings
              are the surviving record of its development—not a simulated demo.
            </p>
          </div>

          <div className="progress-grid">
            {recordings.map((recording, index) => (
              <article
                className={`progress-card${index === 2 ? " progress-card--wide" : ""}`}
                key={recording.number}
              >
                <div className="progress-card-meta">
                  <span>RECORDING {recording.number} / 03</span>
                  <span>{recording.duration}</span>
                </div>
                <div className="progress-media">
                  <video
                    ref={(element) => { videoRefs.current[index] = element }}
                    aria-label={`${recording.title} video`}
                    controls
                    playsInline
                    preload="metadata"
                    poster={recording.poster}
                    onPlay={() => pauseOtherRecordings(index)}
                  >
                    <source src={recording.video} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </div>
                <div className="progress-card-copy">
                  <span className="progress-card-index">{recording.number}</span>
                  <div>
                    <h2>{recording.title}</h2>
                    <p>{recording.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="progress-footer">Captured during development. Presented here as the project record.</p>
        </section>
      </div>
    </main>
  )
}

export default Home
