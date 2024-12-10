import React from 'react';
import { speakerData } from '../data/speaker'

const Speaker = () => {
    const fistFiveImages = speakerData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h1>Speaker</h1>
            </div>
            <div className='prosection'>
                {
                    fistFiveImages.map((item, index) => {
                        return (
                            <div key={index} className='imgBox'>
                                <img className='proImage' src={item.image} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Speaker;