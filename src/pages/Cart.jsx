import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${ props => props.type === "filled" && "none" };
    background-color: ${ props => props.type === "filled" ? "black" : "transparent" };
    color: ${ props => props.type === "filled" && "white" };
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor= styled.div``;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
    flex: 1;
`;


const Summary = styled.div`
flex: 1;
`;



const Cart = () => {
  return (
    <Container>
        <Announcement />
        <NavBar />

        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>

                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Shopping Bag(0)</TopText>
                </TopTexts>

                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Buttom> 
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="../../../assets/images/p2.png" />
                            <Details>
                                <ProductName> <b>Product:</b> JESSIE THUNDER SHOES </ProductName>
                                <ProductId> <b>ID:</b> 78863302 </ProductId>
                                <ProductColor />
                                <ProductSize> <b>SIZE:</b> 37.5 </ProductSize>
                            </Details>

                        </ProductDetail>
                        <PriceDetail>
                            Price
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Buttom>
        </Wrapper>
        
        <Newsletter />
        <Footer />

    </Container>
  )
}

export default Cart