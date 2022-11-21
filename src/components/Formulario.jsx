import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes,setPacientes, paciente, setPaciente}) => {

  const[nombre, setNombre]= useState('');
  const[propietario, setPropietario]= useState('');
  const[email, setEmail]= useState('');
  const[fecha, setFecha]= useState('');
  const[sintomas, setSintomas]= useState('');
  
  const[error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay almenos un campo vacio');

      setError(true);
      return;
    }

    setError(false)

    //Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

if(paciente.id) {
  // Editando el Registro
  objetoPaciente.id = paciente.id
  const pacientesActualizados =  paciente.map(pacienteState =>  pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
 
  setPacientes(pacientesActualizados)
  setPaciente({})
  
}else{
  // Nuevo Paciente
  objetoPaciente.id = generarId();
  setPacientes([...pacientes, objetoPaciente]);
}

    // console.log(objetoPaciente)

    

    //Reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }



  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      
      <p className='text-lg mt-5 text-center mb-10 font-bold'>
        Anade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className='bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10'
      >
        {error && 
          <Error> Todos los campos son obligatorios</Error>
          }

        <div className='mb-5'>
          <label htmlFor='nMscta' className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          
          <input 
            id='nMscta'
            type="text" 
            placeholder='Nombre Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='nPrt' className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          
          <input 
            id='nPrt'
            type="text" 
            placeholder='Nombre Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />

        </div>

        <div className='mb-5'>
          <label htmlFor='nMail' className='block text-gray-700 uppercase font-bold'>
            E-mail de Contacto
          </label>
          
          <input 
            id='nMail'
            type="email" 
            placeholder='Direccion de e-mail'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />

        </div>

        <div className='mb-5'>
          <label htmlFor='nAlta' className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          
          <input 
            id='nAlta'
            type="date" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
          />

        </div>

        <div className='mb-5'>
          <label htmlFor='nSintomas' className='block text-gray-700 uppercase font-bold'>
            Sintomas
          </label>
          <textarea
            id='nSintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>

        <input 
        type="submit" 
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md'
        value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

      </form>

    </div>
  )
}

export default Formulario