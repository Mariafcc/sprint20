import React from "react"
import { ListItem } from "../List"
import { Row, Col } from "../Grid"

const Books = ({ title, subtitle, authors, link, description, image, Button }) => {
    return (
        <ListItem>
            <Row>
                <Col>
                    <h3>
                        {title}
                    </h3>
                    {subtitle}
                </Col>
                <Col>
                    <div className="container">
                        <a href={link}>View Book</a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Written By:
                    {authors}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={image} alt={title}>
                    </img>
                </Col>
                <Col>
                    <p>
                        {description}
                    </p>
                </Col>
            </Row>
        </ListItem>
    )
}

export default Books;