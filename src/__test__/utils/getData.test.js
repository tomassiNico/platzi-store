import getData from '../../utils/getData';
import { TestScheduler } from 'jest';


describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Llamando API para obtener datos', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

        getData('http://mockapi.com')
            .then(response => {
                expect(response.data).toEqual('12345');
            });

        expect(fetch.mock.calls[0][0]).toEqual('http://mockapi.com');
    })
});