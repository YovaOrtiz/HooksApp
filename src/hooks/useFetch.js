import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  // useEffect para hacer la llamada a la API cuando el componente se monta
  useEffect(() => {
    getFetch();
  }, [url]); // Dependencia para que se ejecute al cambiar la URL
  
  const setLoadingState = () => {
    setState({
      data: null, // Aquí debe ser `null`, ya que no tienes datos en este punto
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    setLoadingState(); // Poner el estado en "cargando" antes de la petición

    try {
      const resp = await fetch(url);

      // Simular una espera de 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (!resp.ok) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: resp.status,
            message: resp.statusText,
          },
        });
        return;
      }

      const data = await resp.json();
      setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
      });

      console.log({ data });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: 500,
          message: 'Error fetching data',
        },
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
