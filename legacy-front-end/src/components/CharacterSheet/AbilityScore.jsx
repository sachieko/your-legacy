
const AbilityScore = (props) => {

  return (
    <div className='ability-score'>
      {props.value}
      <div className='ability-btn'>
        <button onClick={() => props.subtract(prev => prev -= 1)}></button>
        <button onClick={() => props.add(prev => prev += 1)}></button>
      </div>
      {props.name}
    </div>
  );
};

export default AbilityScore;