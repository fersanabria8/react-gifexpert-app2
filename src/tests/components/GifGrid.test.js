import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');



describe('Pruebas en el <GifGrid />', () => {

  const category = 'One Punch'

  test('Debe de mostrar el componente correctamente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow( <GifGrid category= { category } /> )// ahora esta undefined
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      url: 'http://localhost/asdasdsad.jpg',
      title: 'Cualquier cosa'
    },
    
    {
      id: 'A123',
      url: 'http://localhost/asdasdsad.jpg',
      title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category={ category } /> );

    // expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe ( gifs.length );
  })


});