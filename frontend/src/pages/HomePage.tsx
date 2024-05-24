import { useState, useEffect } from 'react';


export default function HomePage() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api')
      .then(response => response.text())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Bienvenido al VideoClub</h1>
      <p>{!data ? 'Cargando...' : data}</p>
      <a className='enlace' href='/api'>Enlace de la pagina principal</a>
    </div>
  );
}
