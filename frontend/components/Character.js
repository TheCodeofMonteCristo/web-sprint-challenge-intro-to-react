import React, { useState } from 'react';

function Character(props) { // id, name, homeworld: {id, name}
  const [active, setActive] = useState(false);

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const handleClick = () => setActive(!active);

  //efective code

  return (
    <div className='character-card' onClick={handleClick}>
      <h3 className='character-name'>{props.name}</h3>
      {active ? <p>Planet: <span className='character-planet'>{props.homeworld.name}</span></p> : null}
    </div>
  )
}

export default Character;



// Alternative Solution, Commented Out





//Default Starting Point


//import React from 'react'

//function Character() { // ❗ Add the props
//  // ❗ Create a state to hold whether the homeworld is rendering or not
//  // ❗ Create a "toggle" click handler to show or remove the homeworld
//  return (
 //   <div>
 //     {/* Use the same markup with the same attributes as in the mock */}
 //   </div>
//  )
//}

//export default Character



