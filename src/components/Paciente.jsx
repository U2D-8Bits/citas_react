const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Desea Eliminar este Paciente?');
        if(respuesta){
            eliminarPaciente(id);
        }
    }
    
  return (
    <div className="bg-gray-100 shadow-md rounded-md px-5 py-10 mx-5 my-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            E-mail: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case text-justify">{sintomas}</span>
        </p>
        <div 
            className="flex justify-between mt-10">
            <button 
                type="button"
                className="text-white font-bold py-2 px-10 uppercase bg-indigo-600 rounded-md hover:bg-indigo-700"
                onClick={() => setPaciente(paciente) }
            >Editar</button>

            <button
                type="button"
                className="text-white font-bold py-2 px-10 uppercase bg-red-700 rounded-md hover:bg-red-800"
                onClick={handleEliminar }
           >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente