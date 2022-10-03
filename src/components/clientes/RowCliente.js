import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';

const RowCliente = ({cliente}) => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);
    
    const abrirModalModificarCliente = () => {
        setModalTitle('Modificar cliente');
        setShowModal(true);
    }

    const eliminarcarCliente = () => {
        console.log('Eliminando...');
    }


    return (  
        <tr>
          <td>
             <button 
             className="button is-small is-info mr-1" 
             title="Modificar"
             onClick={ () => abrirModalModificarCliente() }
             >
                    <span className="icon is-small">
                     <i className="fas fa-edit"></i>
                    </span>
                  </button>
                <button 
                className="button is-small is-danger" 
                title="Eliminar"
                onClick={ () => eliminarcarCliente() }
                >
                      <span className="icon is-small">
                       <i className="fas fa-trash-alt"></i>
                      </span>
               </button>
                    </td>  
                        <td>{cliente.nombres}</td>
                        <td>{cliente.apellidos}</td>
                        <td>{cliente.direccion}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.email}</td>
                    </tr>
    );
}
 
export default RowCliente;