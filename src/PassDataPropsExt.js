import React from "react";

import Car from "./PassDataProps";


export default function PassDataProps(){
    return (
        <>
            <div style={{marginLeft: '100px', fontSize: '40px'}}> 
                - I have a car called <Car name="Venza"/>; 
                It is <Car color="blue"/> in color; 
                produced in <Car year_production="2024"/>; 
                made by <Car model= "Cardillac Society"/>.
            </div>
        </>
    );
}
