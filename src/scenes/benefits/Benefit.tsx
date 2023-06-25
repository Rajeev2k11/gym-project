import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant={
    hidden:{opacity:0,scale:0.9},
    visible:{opacity:1,scale:1},
}
type Props = {
    icon:JSX.Element;
    title:string;
    description:string;
    setSelectedPage:(value:SelectedPage)=>void
}

export default function Benefit({icon,title,description,setSelectedPage}: Props) {
  return (
    <motion.div
    variants={childVariant}
    className="mt-5 rounded-md border-2 border-gray-100px-5 py-16 text-center ">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <AnchorLink
        onClick={()=>setSelectedPage(SelectedPage.Contact)}>
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}