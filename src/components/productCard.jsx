export default function Card(props)
{
    console.log("props from card")
    console.log(props)
    return(
        <>
        <div className="card-container">
            <img src={props.image} alt="shoe picture" />
            <div className="card-info">
                <h3>{props.brand}</h3>
                <h2>{props.name}</h2>
                <h4>{props.price}</h4>
                <h4>{props.color}</h4>
                <h4>{props.category}</h4>
                <p>{props.description}</p>
            </div>
        </div>
        </>
    )
}

// id: 1,
//     name: "Air Max 90",
//     brand: "Nike",
//     price: 120.99,
//     color: "White/Black/Red",
//     description: "A classic design with a modern twist, featuring responsive cushioning and a durable rubber outsole.",
//     image: "https://linktoimage.com/airmax90.jpg",
//     category: "Sneakers"