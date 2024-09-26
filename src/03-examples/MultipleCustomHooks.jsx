import React from 'react';
import { useFetch } from '../hooks'; // Asegúrate de que la ruta sea correcta

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/3');

  return (
    <>
      <h1>Información de Pokemon</h1>
      <hr />

      {isLoading && <p>Cargando...</p>}
      
      <h2>{data?.name}</h2>
    </>
  );
};
