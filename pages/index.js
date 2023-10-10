import { Footer, Navbar } from '../components';
import { Feedback, GetStarted, Insights, WhatsNew } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    {/* <Hero /> */}
    {/* <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div> */}
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <Insights />
      {/* <GetStarted /> */}
    </div>
    {/* <World /> */}
    <div className="relative">
      <Feedback />
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      <GetStarted />
    </div>
    <Footer />
  </div>
);

export default Page;
