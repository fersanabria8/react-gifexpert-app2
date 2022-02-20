

import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe de retornar el estado inical', async() => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch') );
    const { data, loading } = result.current;
    // const { data:images, loading }= useFetchGifs( 'One Punch' );
    console.log( data, loading )

    await waitForNextUpdate();
    expect( data ).toEqual([ ]);
    expect( loading ).toBe(true);

  });


  test('Debe de retornar un arreglo de imgs y el loading en false', async() => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch') );
    await waitForNextUpdate();
    const { data, loading } = result.current;


    expect( data.length  ).toEqual( 10 );
    expect( loading ).toBe( false );

  })


});