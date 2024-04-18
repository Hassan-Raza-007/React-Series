
import './index.css'
import Button from './components/Button'

const App = () => {

  const headingStyle = {
    textAlign:"center"
  }

  
  return (<>
 <h1 style={headingStyle}>BackGround Color Changer</h1>
    <div style={{border:"2px solid black", padding:"2px", width:"70%", margin:"auto", borderRadius:"5px", backgroundColor:"whitesmoke"}}>
      <Button color="Red" txtColor="White"/>
      <Button color="Green" txtColor="White" />
      <Button color="Blue" txtColor="White" />
      <Button color="Olive" txtColor="White"/>
      <Button color="Grey" txtColor="Black"/>
      <Button color="Yellow" txtColor="Black"/>
      <Button color="Pink" txtColor="Black"/>
      <Button color="Purple" txtColor="White"/>
      <Button color="Lavender" txtColor="Black"/>
      <Button color="White" txtColor="Black"/>
      <Button color="Black" txtColor="White"/>
    </div>
    </>
  )
};

export default App