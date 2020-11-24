const db = require("../models");
const axios = require("axios");

module.exports = {
    findAll: (req, res) => {
        const { query: params } = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", { params })
            .then((response) => {
                response.data.items.filter(results => results.volumeInfo.title && results.volumeInfo.infoLink && results.volumeInfo.authors && results.volumeInfo.description && results.volumeInfo.imageLinks && results.volumeInfo.imageLinks.thumbnail)
            }).then(books => {
                return (
                    db.Book.find()
                        .then(dbbooks => books.filter(book => dbbooks.every(dbbook => dbbook.googleId.toSting() !== book.id)))
                ).then(books => res.json(books))
                    .catch(err => res.json(err))
            })
    }
};

// &key=AIzaSyDLTTgiNvUwhlAZKEzfoqXaWMC-rKF75Ug