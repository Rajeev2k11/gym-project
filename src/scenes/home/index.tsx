import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
            <motion.div className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}
            >
                <div className="relative">
            <div className="before:absolute before:top-20 before:left-20 ">
              <img alt="homepagetext" src={HomePageText} />
            </div>
          </div>
        
        <p className="mt-8 text-sm">
          {" "}
          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
          Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
          Now.
        </p>
        </motion.div>
        </div>
     
      <motion.div className="mt-8 flex items-center gap-8"
         initial="hidden"
         whileInView="visible"
         viewport={{once:true,amount:0.5}}
         transition={{duration:0.5}}
         variants={{
             hidden:{opacity:0,x:-50},
             visible:{opacity:1,x:0}
         }}
      >
        <ActionButton setSelectedPage={setSelectedPage}>Join Us</ActionButton>
        <AnchorLink className="text-sm font-bold text-purple-500 underline hover:text-secondary-500"
            onClick={()=>setSelectedPage(SelectedPage.Contact)}
            href={`#${SelectedPage.Contact}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;


const person={
    name:"Bojan"
}