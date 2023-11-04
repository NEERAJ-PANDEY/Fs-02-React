import React from 'react';

const Card = ({ name, color, code }) => {
  const cardStyle = {
    backgroundColor: color,
    width: '140px',
    height: '180px',
    margin: '10px',
    padding: '20px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'end', // This should be 'flex-end'
    alignItems: 'center',
    flexDirection: 'column',
    gap: '5px'
  };

  return (
    <div style={cardStyle}>
      <p>{name}</p>
      <p>{code}</p>
    </div>
  );
};

export default Card;
