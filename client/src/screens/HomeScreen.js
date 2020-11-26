import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

export default function HomeScreen() {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product, index) => {
					return (
						<Col sm={12} md={6} lg={4} xl={3} key={index}>
							<Product product={product} key={product.id} />
						</Col>
					);
				})}
			</Row>
		</>
	);
}
