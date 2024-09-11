import About from "./components/About";
import Banner from "./components/Banner";
import ClientMetric from "./components/ClientMetrics";
import ClientReview from "./components/ClientReview";
import Copyrights from "./components/Copyrights";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Sample";
import Services from "./components/Services";
import Support from "./components/Support";

function App() {
  return (
    <>
    <Header />
    {/* <Hero /> */}
    <Banner />
    <Feature />
    <About />
    <ClientMetric />
    <Services />
    <Support />
    <ClientReview />
    <Footer />
    <Copyrights />
    </>
  )
}

export default App;