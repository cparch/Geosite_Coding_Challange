import React from 'react';

const LocationList = (props) => {
  const items = props.locationNames.map(name => {
    return(
      <div 
        onClick={props.locationClickHandler}
        value = "chad"
      >{name}</div>
    )
  })
  return(
    <div>{items}</div>
  )
}

export default LocationList;