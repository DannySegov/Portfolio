import { dataExperience } from "./Experience.data";

export function Experience() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="-my-6">
                {dataExperience.map(({ id, title, date, description }) => (
                    <div key={id} className="py-6">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="text-sm text-gray-500">{date}</p>
                        <p className="mt-4">{description}</p>

                        <div className="flex flex-col sm:flex-row items-start mb-1
                        group-last:before:hidden before:absolute
                        before:left-2 sm:before:left-0 before:h-full">

                        </div>
                    </div>
                ))}
            </div>
            <p>Contenido de prueba</p>
        </div>

    )
}