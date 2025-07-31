import Header from "./components/Header";
import Hero from "./components/hero/hero";
import AboutSection from "./components/about";
import Timeline from "./components/Timeline";
import KeyFeatures from "./components/keyfeatures";
import FAQSection from "./components/FAQs";
import Footer from "./components/footer";

function Codestruct(){
  return(
    <div className="min-h-screen overflow-clip" >
      <Header />
      <Hero />
      <div
      className="bg-[url('/Star1.png')] bg-fixed bg-cover bg-center"
    >
        <AboutSection />
        <Timeline />
        <KeyFeatures />
        <FAQSection />
        <Footer />
      </div>
    </div>
  )
}
export default Codestruct;