import styled from 'styled-components';


const Item = ({product, onItemSelected}) => {

    const handleClick = () => {
        onItemSelected(product)
    }

    const basketButton = product.isBasket ? 'Remove from basket' : 'Add to basket'


    return (
        <Wrapper>
                <ItemImage src={product.image}>    
                </ItemImage>
                <ItemName>
                    {product.name}
                </ItemName>
                <ItemPrice>
                    £{product.price}
                </ItemPrice>
                <AddBasket>
                    <button onClick={handleClick}>{basketButton}</button>           
                </AddBasket>
            </Wrapper>
    )

}

export default Item

const Wrapper = styled.div`
    display: flex;
    margin: 10px auto;
    width: 500px;
    background-color: #efebebeb;
    padding: 10px;
    border-radius: 5px;
`;

const ItemImage = styled.img.attrs(props => ({ src: props.src }))`
    width: 100px;
    height: 100px;
    opacity: 0.8;
    border-radius: 50px;

`;


const ItemName = styled.div`
    margin: 10px 0;
    font-size: 1.1rem;
`;

const ItemPrice = styled.div`
    color: #5252f9; 
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    font-size: 0.8rem;
`;

const AddBasket = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;