import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow( <GifGridItem title={title} url={url}/>)



  test('Debe mostrar el componente correcto', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de tener un parrafo con el title', () => {

    const p = wrapper.find('p');  // armo una constate que envuelva (wrapper)y busque .find('p') el parrafo
    expect( p.text().trim() ).toBe( title );
  });

  test('Debe de tener la imagen igual al url y alt de los props', () => {

    const img =  wrapper.find('img');
    // console.log(img.html()) // img.html() => esto hace que vea las etiquetas(property = src="" y alt="")
    // console.log( img.props()) // busca todas las props (src="" alt="")
    // console.log( img.prop('src')) // busca todas las props (src="")
    expect( img.prop('src') ).toBe(url);
    expect( img.prop('alt') ).toBe(title);
  });

  test('Debe de tener animate_fadeIn', () => {

    const div = wrapper.find('div');
    const className = div.prop('className');

    expect( className.includes('animate__bounce') ).toBe( true );
    // expect( className.includes('animate__bounce') ).toBe( false ); // tiene que ser falso positivo para pasar la prueba

  })


});
