export const Requerimiento = ({ requerimiento, setRequerimiento }) => {
    const { proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen } = requerimiento;

    return (
        <div className="mx-5 my-10 bg-gray-100 shadow-md px-5 py-10 rounded-xl"> {/* Fondo más claro */}
            <p className="font-bold mb-3 text-blue-800 uppercase">Proyecto: {''}
                <span className="font-normal normal-case text-gray-800">{proyecto}</span>
            </p>

            <p className="font-bold mb-3 text-blue-800 uppercase">Tipo de Tarea: {''}
                <span className="font-normal normal-case text-gray-800">{tipoTarea}</span>
            </p>

            <p className="font-bold mb-3 text-blue-800 uppercase">Persona Asignada: {''}
                <span className="font-normal normal-case text-gray-800">{personaAsignada}</span>
            </p>

            <p className="font-bold mb-3 text-blue-800 uppercase">Story Points: {''}
                <span className="font-normal normal-case text-gray-800">{storyPoints}</span>
            </p>

            <p className="font-bold mb-3 text-blue-800 uppercase">Prioridad: {''}
                <span className="font-normal normal-case text-gray-800">{prioridad}</span>
            </p>

            <p className="font-bold mb-3 text-blue-800 uppercase">Fecha de Creación: {''}
                <span className="font-normal normal-case text-gray-800">{fechaCreacion}</span>
            </p>

            <p className="font-bold mb-3 text-blue-800 uppercase">Resumen: {''}
                <span className="font-normal normal-case text-gray-800">{resumen}</span>
            </p>
        </div>
    );
};

