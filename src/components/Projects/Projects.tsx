export default function Projects({ id }: { id: string }) {
    return (
        <div id={id} className="container mx-auto py-8 px-4">
            <h3 className="text-4xl font-bold my-10 text-center">Proyectos</h3>
            <div className="max-w-prose mx-auto">
                <p>
                    Cada uno de estos proyectos representa el resultado de mi dedicación, aprendizaje constante y pasión por el desarrollo web. Desde la idea inicial hasta el producto final, he puesto el corazón en transformar conceptos en soluciones digitales funcionales y atractivas.
                    Te invito a explorarlos, inspirarte y descubrir cómo convierto líneas de código en experiencias reales. ¡Bienvenido a mi mundo de proyectos de software!
                </p>
            </div>
            <div className="flex flex-col items-center ">
                <div className="max-w-sm rounded-[30px] px-1 py-1 overflow-hidden shadow-xl bg-blueCard border border-blueCardLight transform transition-transform duration-300 hover:scale-105">
                    <img className="px-1 py-1 rounded-[30px] w-full p-50" src="/img/image.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-secondary mb-2">The Coldest Sunset</div>
                        <p className="text-white text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-blueTag rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#photography</span>
                    </div>
                </div>
            </div>
        </div>
    )
}