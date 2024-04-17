import Card from './components/Card'
import './App.css'

function App() {

// let Obj = {
//   name:"Hassan",
//   age:25,
//   city:"Karachi"
// }
// let desc = "ye kia horah hai bhae ye kia horah hai"
  return (
    <>
      <h1 className='bg-green-400 text-black font-bold rounded-lg p-5' >Tailwind CSS</h1>
      <br />
      {/* <Card desc={desc} myObj={Obj}/> */}
      <Card title="Helloworld" />
      <Card />
    </>
  )
}

export default App
