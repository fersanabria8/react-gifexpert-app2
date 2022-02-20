import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  

  // INICIALIZAMOS CUSTOM HOOK 
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // DISPARAMOS UN EFECTO useEffect
  useEffect( () => {

    // ESPERAMOS QUE SE DISPARE ALGUNA TAREA ASINCRONA
    getGifs( category )
      .then( imgs => {
        // PARA CAMBIAR NUEVAMENTE EL ESTADO Y CUANDO CAMBIA LOS ESTADOS... HACEMOS NUESTRAS PRUEBAS TEST
          setState({
            data: imgs,
            loading: false
          });
      })
  },[ category ])

  return state; // {data:[], loading: true};
}