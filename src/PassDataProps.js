import React from "react";

import PassDataPropsCar from "./passDataPropsCare";

const PassDataProps = () =>{
    return (
            <div style={{marginLeft: '100px', fontSize: '40px'}}> 
                - I have a car called <PassDataPropsCar name="Venza" />; 
                It is <PassDataPropsCar color="blue"/> in color; 
                produced in <PassDataPropsCar year_production="2024"/>; 
                made by <PassDataPropsCar model= "Cardillac Society"/>.
            </div>
    );
}

export default PassDataProps;