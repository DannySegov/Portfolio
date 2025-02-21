import { useEffect, useRef } from "react";
import { MotionTransitionProps } from "./MotionTransition.types";
import { useInView, useAnimation, motion} from "framer-motion";
import { fadeIn } from "../../utils/transition";

export function MotionTransition(props: MotionTransitionProps) {

    const { children, className } = props;      // Destructuración de las propiedades

    const ref = useRef(null);    // Referencia para el div
    const isInView = useInView(ref, { once: false});    // Hook para detectar si el div está en el viewport
    const mainControls = useAnimation();   // Hook para controlar la animación
    const slideControls = useAnimation();   // Hook para controlar la animación

    useEffect(() => {  // Hook para detectar si el div está en el viewport

        if(isInView){  // Si el div está en el viewport
            mainControls.start("visible"); // Iniciar la animación
            slideControls.start("visible"); // Iniciar la animación
        }

    }, [isInView]) // Aqui se pasa la dependencia

    return (
        <div ref={ref}>
            <motion.div variants={fadeIn()} initial="hidden" animate={mainControls} exit="hidden" className={className}> {/* Se agrega la clase al div */}
                {children}
            </motion.div>
        </div>
    );
}