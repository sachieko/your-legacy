
const TextField = ({ onChange, placeholder, value, field }) => {

  return (
    <>
    <input type="text" value={value} placeholder={placeholder} onChange={(event) => onChange(field, event.target.value)}></input>
    </>
  );
};

export default TextField;