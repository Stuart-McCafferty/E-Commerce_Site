import Item from './Item';


const StockCard = ({items, onItemSelected }) => {

    

    const stock = items.map((item, index) => {
        return (
            <li key={index}>
                    <Item product={item} onItemSelected={onItemSelected}/>
            </li>
            
        )
    })
    return (
        <ul>
            {stock}
        </ul>  
    )
}


export default StockCard