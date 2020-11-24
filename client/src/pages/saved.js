import React, { useEffect, useState, Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: [],
  }


  savedBooks = () => {
    API.getSavedBook()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));

  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(() => this.savedBooks())
  }

  componentDidMount() {
    this.savedBooks()
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {book.title} by {book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container >
    )
  }
}


export default Detail;
