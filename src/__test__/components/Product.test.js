import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('Testing de <Product />', () => {
    test('Render de <Product />', () => {
        const product = shallow(
            <ProviderMock>
                <Product product={Product} />
            </ProviderMock>
        );

        expect(product.length).toEqual(1);
    });
    test('Click sobre el botón de comprar', () => {
        const handleAddToCart = jest.fn();
        const wrapper = mount(
            <ProviderMock>
                <Product 
                    product={ProductMock} 
                    handleAddToCart={handleAddToCart} />
            </ProviderMock>
        );

        wrapper.find('button').simulate('click');
        expect(handleAddToCart).toHaveBeenCalledTimes(1);
    });
})
