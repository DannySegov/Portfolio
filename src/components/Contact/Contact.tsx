'use client';

export default function Contact() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            subject: formData.get('subject'),
            to_name: formData.get('to_name'),
            to_email: formData.get('to_email'),
            message: formData.get('message')
        };

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const response = await res.json();
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h3 className="text-4xl font-bold my-10 text-center">Contacto</h3>
            <div className="flex flex-col lg:items-center">
                <div className="relative w-full max-w-4xl rounded-[20px] sm:rounded-[30px] px-2 py-2 overflow-visible shadow-xl bg-blueCard border border-blueCardLight">
                    <form className="p-7" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Completo</label>
                            <input type="name" name="to_name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Nombre" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
                            <input type="email" name="to_email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asunto</label>
                            <input type="text" name="subject" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
                            <textarea name="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        </div>

                        <button type="submit" className="w-full border-secondary hover:border-secondary/90  dark:focus:ring-secondary/80  hover:bg-secondary hover:text-white hover:shadow-lg  dark:hover:shadow-lg dark:hover:shadow-secondary/80 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 border-2">
                            Enviar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}