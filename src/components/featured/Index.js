import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

 const Featured = () => {
    return (
      <div style={{position:'relative'}}>
        <Carrousel />
        <div className="artist_name">
           <div className="wrapper">
             Aum Srivastava
           </div>
        </div>
        <Countdown />
      </div>
    )
}

export default Featured;
