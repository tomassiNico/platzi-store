import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Testing de reducers', () => {
    test('Retornar initState vacio', () => {
        expect(reducer({}, '')).toEqual({});
    });
    test('ADD_TO_CART', () => {
        const initState = {
            cart: []
        };
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload
        };
        const expected = {
            cart: [
                ProductMock
            ]
        }
        expect(reducer(initState, action)).toEqual(expected);
    });
    test('REMOVE_FROM_CART', () => {
        const initState = {
            cart: [ProductMock]
        };
        const payload = ProductMock;
        const action = {
            type: 'REMOVE_FROM_CART',
            payload
        };
        const expected = {
            cart: []
        }
        expect(reducer(initState, action)).toEqual(expected);
    });
     
});