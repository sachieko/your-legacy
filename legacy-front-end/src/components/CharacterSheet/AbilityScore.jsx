
const AbilityScore = (props) => {

  return (
    <div className='ability-score'>
      {props.value}
      <div className='ability-btn'>
        <button onClick={props.subtract}></button>
        <button onClick={props.add}></button>
      </div>
    </div>
  );
};

export default AbilityScore;