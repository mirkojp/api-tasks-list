import { useState } from "react"

export const Formulario = ({ requerimientos, setRequerimientos }) => {

    const [proyecto, setProyecto] = useState('')
    const [tipoTarea, setTipoTarea] = useState('')
    const [personaAsignada, setPersonaAsignada] = useState('')
    const [storyPoints, setStoryPoints] = useState('')
    const [prioridad, setPrioridad] = useState('')
    const [fechaCreacion, setFechaCreacion] = useState('')
    const [resumen, setResumen] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validar que los campos estén llenos
        if ([proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen].includes('')) {
            console.log('Hay al menos un campo vacío')
            setError(true)
            return
        }

        setError(false)

        // Objeto con los datos del requerimiento
        const objetoRequerimiento = {
            proyecto,
            tipoTarea,
            personaAsignada,
            storyPoints,
            prioridad,
            fechaCreacion,
            resumen
        }

        console.log(objetoRequerimiento)

        // Agregar el requerimiento al state
        setRequerimientos([
            ...requerimientos,
            objetoRequerimiento
        ])

        // Reiniciar el formulario
        setProyecto('')
        setTipoTarea('')
        setPersonaAsignada('')
        setStoryPoints('')
        setPrioridad('')
        setFechaCreacion('')
        setResumen('')
    }

    return (
        <div className="w-1/2">
            <h2 className="text-3xl text-center">Seguimiento de Requerimientos</h2>

            <p className="font-black text-lg mt-5 text-center mb-10">Añade requerimientos y {''}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error ? <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">Todos los campos son obligatorios</p> : null}

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">Proyecto</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="proyecto"
                        type="text"
                        placeholder="Nombre del proyecto"
                        value={proyecto}
                        onChange={(e) => setProyecto(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoTarea">Tipo de Tarea</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tipoTarea"
                        type="text"
                        placeholder="Tipo de tarea"
                        value={tipoTarea}
                        onChange={(e) => setTipoTarea(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="personaAsignada">Persona Asignada</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="personaAsignada"
                        type="text"
                        placeholder="Nombre del desarrollador"
                        value={personaAsignada}
                        onChange={(e) => setPersonaAsignada(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">Story Points</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="storyPoints"
                        type="number"
                        placeholder="Puntos de historia"
                        value={storyPoints}
                        onChange={(e) => setStoryPoints(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">Prioridad</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="prioridad"
                        type="text"
                        placeholder="Nivel de prioridad"
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaCreacion">Fecha de Creación</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fechaCreacion"
                        type="date"
                        value={fechaCreacion}
                        onChange={(e) => setFechaCreacion(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="resumen"
                        placeholder="Describa el resumen"
                        value={resumen}
                        onChange={(e) => setResumen(e.target.value)}
                    />
                </div>

                <button
                    className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
                    type="submit"
                >
                    Agregar Requerimiento
                </button>
            </form>
        </div>
    )
}
