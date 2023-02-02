import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { clearSelectedProduct, fetchProductById, selectProduct } from '../../redux/action-creators/product-action-creators';


function ProductselectProduct() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state) => state.selectProductReducer.selectedProduct);


    

    useEffect(() => {
        dispatch(fetchProductById(productId));
        return ()=>dispatch(clearSelectedProduct())

    }, [productId]);

    return (
        <Container >
            <Row >
                <Col lg={6} className='row justify-content-end'>
                    <Card style={{ width: '24rem', height: "600px", border: "2px solid black" }} >
                        <Card.Img  style={{ height: "500px" }} variant="top" src={selectedProduct.image} />
                    </Card>
                </Col>
                <Col lg={6} className='row justify-content-start'>
                    <Card style={{ width: '24rem', height: "600px", border: "2px solid black" }} >
                        <Card.Body>
                            <Card.Title>{selectedProduct.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Rs.{selectedProduct.price}</Card.Subtitle>
                            <Card.Text>
                                {selectedProduct.category}
                            </Card.Text>
                            <Card.Text>{selectedProduct.description} </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default ProductselectProduct