import { Requerimiento } from "./Requerimiento"


// import React from 'react';

export const ListadoRequerimientos = ({ requerimientos, eliminarRequerimiento }) => {
    return (
        <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Listado de Requerimientos</h2>
            {requerimientos.length === 0 ? (
                <p>No hay requerimientos disponibles</p>
            ) : (
                requerimientos.map((req, index) => (
                    <div key={index} className="mb-5 p-5 border border-gray-300 rounded">
                        <h3 className="font-bold">{req.proyecto}</h3>
                        <p>Tipo de tarea: {req.tipoTarea}</p>
                        <p>Persona asignada: {req.personaAsignada}</p>
                        <p>Story Points: {req.storyPoints}</p>
                        <p>Prioridad: {req.prioridad}</p>
                        <p>Fecha de creación: {req.fechaCreacion}</p>
                        <p>Resumen: {req.resumen}</p>
                        <button
                            className="bg-red-600 text-white p-2 mt-2 rounded"
                            onClick={() => eliminarRequerimiento(index)} 
                        >
                            Eliminar
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};


