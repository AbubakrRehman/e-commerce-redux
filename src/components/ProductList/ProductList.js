import React, { useEffect } from 'react'
import { fetchProducts, setProducts } from '../../redux/action-creators/product-action-creators';
import { useDispatch, useSelector } from "react-redux"
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.setProductsReducer.products);


    
       

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <Container>
            <Row>
                {products.length>0?products.map((item, index) => {
                    return <Col  key={item.id} lg={3} >
                    <NavLink to={(item.id).toString()} style={{textDecoration:"none",color:"black"}}>
                        <Card  style={{ width: '18rem',height:"580px",padding:"10px"}} className="mb-2">
                            <Card.Img style={{height:"400px"}} variant="center" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Rs.{item.price}</Card.Subtitle>
                                <Card.Text>
                                    {item.category}
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </NavLink>

                    </Col>
                })
                :
                <div>Loading....</div>
                }

            </Row>
        </Container>
    )
}

export default ProductList