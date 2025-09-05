import Header from "./components/header"
import Card from "./components/productCard"
import data from "/public/data.js"

function App() {
 const productElements = data.map((x)=>{
    return (
    <Card
      key = {x.id}
      {...x}
    />)
 })

 return (
    <>
    <Header/>   
    <div className="main-content">{productElements}</div>
    </>
  )
}
export default App