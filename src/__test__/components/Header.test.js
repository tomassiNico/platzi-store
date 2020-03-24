import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { TestScheduler } from 'jest';

describe('Testing sobre el <Header />', () => {
    
    test('Render del <Header />', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        
        expect(header.length).toEqual(1);
    });
    
    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
            <Header />
            </ProviderMock>
        );
        
        expect(header.find(".Header-title").text()).toEqual('Platzi Store');
    })
});