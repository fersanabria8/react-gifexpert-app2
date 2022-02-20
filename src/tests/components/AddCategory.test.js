import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn(); // jest.fs() es igual que ()=> {}
  // let wrapper; Esta es la opcion correcta pero lo inicializamos de la otra forma, para que funcione el autocompletado find
  let wrapper = shallow( <AddCategory setCategories={ setCategories }/>)

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories }/>)
  });


  test('Debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de cambiar la caja de text', () => {

    const input = wrapper.find('input');// aca defino y busco el input
    const value = 'Hola mundo'

    input.simulate('change', { target: { value } });

    expect( wrapper.find('p').text().trim() ).toBe( value )
  });


  test('No debe de postear la informacion con submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} })
  
    expect( setCategories ).not.toHaveBeenCalled()

  })

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

    const value = 'onChange'

    // 1. Simular el inputChange
    wrapper.find('input').simulate('change', { target: {value }})
    
    // 2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    // 3. setCategories se debe de haber llamado
    expect( setCategories ).toHaveBeenCalled();
    // expect( setCategories ).toHaveBeenCalledTimes(2); // time (2) se espera que se llame 2 veces, pero se llamo 1 por eso el error
    // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); // toHaveBeenCalledWith( expect.any(Function) ) se espera si o si que llame una funcion osea que si en el setCategiries('1231321') llamamos numeros ahi es donde podemos filtar para que si o si sea una funcion y de error.

    // 4. El valor de input debe de estar '' (vacio)
    expect(wrapper.find('input').prop('value') ).toBe('')// llamamos prop al alternativo 'value'

  });

});