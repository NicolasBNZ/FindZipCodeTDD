  import axios from 'axios';
  import { getZipcode } from '.'; 

  jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe ('get zipcode', () => {
    afterEach(() => {
        mockedAxios.get.mockClear();
      });

      it('returns the data of fetch', async () => {
        mockedAxios.get.mockResolvedValue({ status: 200, data: {} });
        getZipcode(91120);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get.mock.calls[0][0]).toEqual('https://geo.api.gouv.fr/communes?codePostal');
      });

    
});