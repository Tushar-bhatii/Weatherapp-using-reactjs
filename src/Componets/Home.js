import React from 'react';
import ChooseStateComponents from './ChooseState';
import WeekInfoCardComponents from './WeekInfoCard';
import HUMIDITYComponents from './HUMIDITY';
import LeftComponents from './Left';
const HomeComponets = ()=>{
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                      <LeftComponents/>
                    <div className='rightSide'>
                        <ChooseStateComponents/>
                        <WeekInfoCardComponents/>
                        <HUMIDITYComponents />
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeComponets;