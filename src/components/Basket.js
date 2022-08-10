import Item from './Item'

const Basket = ({ basket }) => {


    const basketList = basket.map((item, index) => {
        return (
            <li key={index}>
                    <Item product={item}/>
            </li>
            
        )
    })
    return (
        <ul>
            <p>Basket</p>
            {basketList}
        </ul>  
    )
}


export default Basket

