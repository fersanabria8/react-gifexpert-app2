import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from "../GifExpertApp"
import '@testing-library/jest-dom'

describe('Pruebas con <GifExpertApp/>', () => {

  test('Debe de tener un snapshot del componente', () => {

    const wrapper = shallow( <GifExpertApp/> )
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de mostrar una lista de categorias', () => {


    const categories = ['One Punch', 'Dragon Ball Z'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length )

  })


});