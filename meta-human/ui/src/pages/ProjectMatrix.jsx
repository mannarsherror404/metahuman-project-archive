import { motion, useMotionValue, useSpring } from "framer-motion"
import BackButton from "../components/BackButton"
import FloatingElements from "../components/FloatingElements"
import "./ProjectMatrix.css"

const opportunities = [
  {
    number: "01",
    type: "ORDERING",
    title: "Voice cashier",
    summary: "A conversational front counter that can guide an order, confirm choices, and prepare the details for a bill.",
    value: "Shorter queues for simple orders",
    needs: "Menu, pricing, POS, and payment integration",
  },
  {
    number: "02",
    type: "FRONT DESK",
    title: "Receptionist",
    summary: "A welcoming character that answers routine questions, gives directions, and helps visitors reach the right person.",
    value: "Consistent first-contact guidance",
    needs: "Location information, schedules, and a staff handoff",
  },
  {
    number: "03",
    type: "SUPPORT",
    title: "Customer service",
    summary: "A voice-first help point for common questions, basic troubleshooting, and routing difficult cases to a human.",
    value: "Faster answers to repeated questions",
    needs: "Approved knowledge base, account safeguards, and escalation",
  },
  {
    number: "04",
    type: "EVERYDAY HELP",
    title: "Routine assistance",
    summary: "A patient guide for check-ins, simple instructions, and other repetitive interactions in public or workplace spaces.",
    value: "More available help for simple tasks",
    needs: "Task-specific rules, accessibility review, and human oversight",
  },
]

const prototypeFlow = [
  { number: "01", title: "Listen", detail: "Take a spoken question" },
  { number: "02", title: "Remember", detail: "Carry conversation context" },
  { number: "03", title: "Respond", detail: "Generate an LLM answer" },
  { number: "04", title: "Speak", detail: "Return the answer in voice" },
]

function ProjectMatrix() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  const handleMouseMove = (event) => {
    mouseX.set((event.clientX / window.innerWidth - 0.5) * -80)
    mouseY.set((event.clientY / window.innerHeight - 0.5) * -80)
  }

  return (
    <main className="matrix-page" onMouseMove={handleMouseMove}>
      <motion.div className="matrix-particles" style={{ x: springX, y: springY }} aria-hidden="true">
        <FloatingElements />
      </motion.div>

      <div className="matrix-shell">
        <header className="matrix-hero">
          <p className="matrix-eyebrow">PROJECT MATRIX / REAL-WORLD DIRECTIONS</p>
          <div className="matrix-hero-grid">
            <h1>One character.<br /><span>Many useful roles.</span></h1>
            <p>
              The original prototype joined a 3D MetaHuman with a contextual voice
              conversation. This page maps that core idea to practical settings.
              These are deployment concepts—not products already shipped.
            </p>
          </div>
        </header>

        <section className="matrix-flow" aria-labelledby="matrix-flow-title">
          <div className="matrix-section-label">
            <span>THE PROTOTYPE CORE</span>
            <h2 id="matrix-flow-title">A conversation people can have out loud.</h2>
          </div>
          <ol className="matrix-flow-list">
            {prototypeFlow.map((step) => (
              <li key={step.number}>
                <span className="matrix-step-number">{step.number}</span>
                <strong>{step.title}</strong>
                <span>{step.detail}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="matrix-applications" aria-labelledby="matrix-applications-title">
          <div className="matrix-section-heading">
            <div>
              <p className="matrix-eyebrow">WHERE IT COULD WORK</p>
              <h2 id="matrix-applications-title">Applications in the real world</h2>
            </div>
            <p>Four roles built from the same voice-first interaction pattern.</p>
          </div>

          <div className="matrix-grid">
            {opportunities.map((opportunity) => (
              <article className="matrix-card" key={opportunity.number}>
                <div className="matrix-card-top">
                  <span className="matrix-card-number">{opportunity.number}</span>
                  <span className="matrix-card-type">{opportunity.type}</span>
                </div>
                <h3>{opportunity.title}</h3>
                <p className="matrix-card-summary">{opportunity.summary}</p>
                <div className="matrix-card-details">
                  <div>
                    <span>VALUE</span>
                    <p>{opportunity.value}</p>
                  </div>
                  <div>
                    <span>TO DEPLOY</span>
                    <p>{opportunity.needs}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="matrix-footer">
          <span>FROM PROTOTYPE TO PRODUCT</span>
          <p>
            Each setting would need its own integrations, privacy checks, testing,
            and a clear path to a human when the request goes beyond routine help.
          </p>
        </footer>
      </div>

      <BackButton />
    </main>
  )
}

export default ProjectMatrix
