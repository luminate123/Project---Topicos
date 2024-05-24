import { useState, useEffect } from 'react';

function UsersPage() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/users')
            .then(response => response.text())
            .then(data => setData(data));
    }, []);
    return (
        <div>
            <h1>Bienvenido Cliente</h1>
            <p>{!data ? 'Cargando...' : data}</p>
            <a className='enlace' href='/api/users'>Enlace del backend-Usuarios</a>
        </div>
    )
}

export default UsersPage