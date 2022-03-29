import React from "react";

export interface ZipcodeFinderData {
    zipCode: number;
}

export interface ZipcodeFinderProps {
    cityName: string;
    onSubmit: (saved: ZipcodeFinderData) => void;
    zipcodeLabel: string;
}

export function ZipcodeFinder (props:ZipcodeFinderProps) {
return (
<div>
zipcodeFinder c'est ici
</div>
);

};