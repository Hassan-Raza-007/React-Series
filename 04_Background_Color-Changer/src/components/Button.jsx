

const Button = ({color,txtColor}) => {


const buttonStyle = {
    backgroundColor:color,
    color:txtColor,
    padding:"5px 15px",
    margin:"6px",
    borderRadius:"5px"
};


const clickHandle = ()=>{
    document.body.style.backgroundColor = color;
};
  return (
    <>
    
    <button style={buttonStyle} onClick={clickHandle}>{color}</button>
    </>
  )
}

export default Button