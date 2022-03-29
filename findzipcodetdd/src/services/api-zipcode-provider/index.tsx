import React from 'react';
import axios from 'axios';

// export interface zipcodeData {
//     zipcodenumber: number;
// }

export const getZipcode = (props: number) => {
    axios.get(`https://geo.api.gouv.fr/communes?codePostal`)
    .then((response) => {
        const data = response.data;
        return data;
    })
    
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('c est un finally');;
    });
};