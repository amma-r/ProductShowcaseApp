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
    {productElements}
    </>
  )
}
export default App