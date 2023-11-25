import { motion } from "framer-motion"

export default function App() {
    return (

    <div
        className="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
    >
        <motion.div
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{repeat: 0}}
        >
        <div
            className="z-30 opacity-95  p-5 rounded-2xl"
        >

         <img className={" h-36"} src={"/hm_logo_text.svg"} alt=""/>


        </div>
    </motion.div>



    </div>
    )
}