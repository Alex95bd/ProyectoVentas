import React, { useState } from 'react';
import RowCliente from './RowCliente';

const TableCliente = () => {
    
    const { clientesList } = useState

    return ( 
        <div className="table-container">
              <table className="table is-hoverable is fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Dirección</th>
                        <th>Telefono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      clientesList.map(cliente => (
                        <RowCliente cliente={cliente} key={cliente.idCliente}  />
                      ))
                    }
                </tbody>
              </table> 
              </div>
     );
}
 
export default TableCliente;