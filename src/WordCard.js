import CharacterCard from './CharacterCard';
import React from 'react';

export default function WordCard(props){

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 
    }
    return (
        <div> 
            { 
                Array.from(props.value).map((c, i) => 
                    <CharacterCard value={c} key={i}  activationHandler={activationHandler}/>
                ) 
            }
    
        </div>
    );
   }
   