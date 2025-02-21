import { delay } from "framer-motion"

export const fadeIn = () => { // Función para la animación de entrada
    return { // Objeto con las propiedades de la animación
        hidden: {  // Estado inicial
            y: 80,
            opacity: 0,
            x: 0,
            transitions: {
                type: "tween",
                duration: 0.5,
                delay: 0.5,
                ease: [0.25,0.6,0.3,0.8]
            }
        },
        visible: { // Estado final
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25,0.6,0.3,0.8]    
            }
        }
    }

}