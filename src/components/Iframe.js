import React from 'react';
import { useState, useEffect } from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source; 
    
    const { innerWidth: swidth, innerHeight: sheight } = window; 
    var nwidth = swidth * .75;
    var nheight = sheight * .75;
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="container">
            
                <iframe height={sheight} width={swidth - 20}  src={src}></iframe>
        
        </div>
    );
};

export default Iframe;