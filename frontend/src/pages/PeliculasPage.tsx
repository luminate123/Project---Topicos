import { useState, useEffect } from 'react';

function PeliculasPage() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/peliculas')
            .then(response => response.text())
            .then(data => setData(data));
    }, []);
    return (
        <div>
            <p>{!data ? 'Cargando...' : data}</p>
            <a className="enlace" href='/api/peliculas'>Enlace del Backend-Peliculas</a>
        </div>
    );
}

export default PeliculasPage