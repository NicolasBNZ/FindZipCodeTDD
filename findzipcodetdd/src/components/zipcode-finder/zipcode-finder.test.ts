// what are / is the test expected? 
// If we think of the user behavior, th test could be:
// when the user submit, a city name displays 

import { ZipcodeFinder } from ".";
import { fireEvent, render, screen } from '@testing-library/react';



describe('ZipcodeFinder', () => {
     const onSubmit = (jest.fn());
     const r = render(<ZipcodeFinder
         cityName="Paris"
         onSubmit={onSubmit}
         />);
         
    it('should display a city name when submit a zipcode', async () => {
               // the user submit
        const submitButton = await r.queryByText('Submit')
        fireEvent.click(submitButton);
        // the city name displays
        expect(screen )

    });

    it('should call onSubmit function when submited properly', async () => {
        const onSubmit = jest.fn().mockImplementation((_zipCode: number) => { Promise.resolve('ok') });
        render(<ZipcodeFinder
            cityName: ""
            zipcodeLabel="zipcodeLabel"
            onSubmit={onSubmit}
          />
        );
        const zipcodeField = screen.queryByText ('zipcodeLabel');
        fireEvent.change(zipcodeField, { target: { value: '91120' } });
        const submitButton = screen.queryByText('Submit')
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual('91120');


});

