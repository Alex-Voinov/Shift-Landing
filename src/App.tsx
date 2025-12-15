import "@/assets/styles/reset.css"
import "@/assets/styles/variables.css"
import "@/assets/styles/global.css"
import Header from "@/components/Header"
import Preview from "./sections/Preview"
import Problems from "./sections/Problems"
import useActiveSection from "@/hooks/useActiveSection"
import Workflow from "./sections/Workflow"
import Marquee from "./components/Marquee/Marquee"
import Footer from "./components/Footer"
import Benefits from "./sections/Benefits"
import Tariffs from "./sections/Tariffs"
import TrustedBy from "./sections/TrustedBy"
import Promo from "./sections/Promo"
import Feedback from "./sections/Feedback"
import Form from "./sections/Form"
import Cases from "./sections/Cases"
import { forwardRef } from "react"


const AboutUs = forwardRef<HTMLDivElement>(
  (_, ref) => (
    <div ref={ref}>
      <Problems />
      <Workflow />
      <Benefits />
      <Marquee />
    </div >
  )
)

const Special = forwardRef<HTMLDivElement>(
  (_, ref) => <div ref={ref}>
    <Promo />
    <Form />
  </div>)

const sections = [
  AboutUs,
  TrustedBy,
  Cases,
  Feedback,
  Special,
  Tariffs
];

const App = () => {
  const { active, refs } = useActiveSection(sections.length);

  const handleMenuClick = (idx: number) => {
    const el = refs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header activeSection={active} onClickSection={handleMenuClick} />
      <Preview />

      {sections.map((Section, idx) => (
        <Section
          key={idx}
          ref={(el: HTMLDivElement | null) => {
            refs.current[idx] = el!;
          }}
        />
      ))}

      <Footer />
    </>
  );
};

export default App
