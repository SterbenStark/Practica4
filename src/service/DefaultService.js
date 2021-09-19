'use strict';

const fs = require('fs');

let books = [];
let authors = [];
let publishers = [];

const loadBooks = () => {
    fs.readFile(__dirname + '/' + 'books.json', 'utf8', (err, data) => {
        books = JSON.parse(data)
    });
}

loadBooks();

const loadAuthors = () => {
    fs.readFile(__dirname + '/' + 'authors.json', 'utf8', (err, data) => {
        authors = JSON.parse(data)
    });
}

loadAuthors();

const loadPublishers = () => {
    fs.readFile(__dirname + '/' + 'publishers.json', 'utf8', (err, data) => {
        publishers = JSON.parse(data)
    });
}

loadPublishers();

const saveBooks = () => {
    let data = JSON.stringify(books)
    fs.writeFileSync(__dirname + '/' + 'books.json', data)
};

const saveAuthors = () => {
    let data = JSON.stringify(authors)
    fs.writeFileSync(__dirname + '/' + 'authors.json', data)
};

const savePublishers = () => {
    let data = JSON.stringify(publishers)
    fs.writeFileSync(__dirname + '/' + 'publishers.json', data)
};

/**
 * Delete a book by ID.
 *
 * bookId String 
 * no response value expected for this operation
 **/
exports.booksBookIdDELETE = function (bookId) {
    return new Promise(function (resolve, reject) {
        let index = books.findIndex(i => i.id == bookId);
        if (index == -1)
            return resolve();
        else {
            books = books.filter(i => i.id != bookId);
            saveBooks();
        }
    });
}

/**
 * Delete a author by ID.
 *
 * authorId String 
 * no response value expected for this operation
 **/
exports.authorsAuthorIdDELETE = function (authorId) {
    return new Promise(function (resolve, reject) {
        let index = authors.findIndex(i => i.id == authorId);
        if (index == -1)
            return resolve();
        else {
            authors = authors.filter(i => i.id != bookId);
            saveAuthors();
        }
    });
}

/**
 * Delete a publisher by ID.
 *
 * publisherId String 
 * no response value expected for this operation
 **/
exports.publishersPublisherIdDELETE = function (publisherId) {
    return new Promise(function (resolve, reject) {
        let index = publishers.findIndex(i => i.id == publisherId);
        if (index == -1)
            return resolve();
        else {
            publishers = publishers.filter(i => i.id != publisherId);
            savePublishers();
        }
    });
}

/**
 * Returns a book by ID.
 *
 * bookId String 
 * returns Book
 **/
exports.booksBookIdGET = function (bookId) {
    return new Promise(function (resolve, reject) {
        let book = books.find(i => i.id == bookId);
        if (book == undefined)
            return resolve();
        else
            resolve(book);
    });
}

/**
 * Return author of books by ID.
 *
 * authorId String 
 * returns Book
 **/
 exports.booksAuthorIdGET = function (authorId) {
    return new Promise(function (resolve, reject) {
        let book = books.find(i => i.id == authorId);
        if (book == undefined)
            return resolve();
        else
            resolve(book);
    });
}

/**
 * Returns a author by ID.
 *
 * authorId String 
 * returns Author
 **/
exports.authorsAuthorIdGET = function (authorId) {
    return new Promise(function (resolve, reject) {
        let author = authors.find(i => i.id == authorId);
        if (author == undefined)
            return resolve();
        else
            resolve(author);
    });
}

/**
 * Returns a publisher by ID.
 *
 * publisherId String 
 * returns Publisher
 **/
exports.publishersPublisherIdGET = function (publisherId) {
    return new Promise(function (resolve, reject) {
        let publisher = publishers.find(i => i.id == publisherId);
        if (publisher == undefined)
            return resolve();
        else
            resolve(publisher);
    });
}


/**
 * Update book information
 *
 * body Book Book data
 * bookId String 
 * no response value expected for this operation
 **/
exports.booksBookIdPUT = function (body, bookId) {
    return new Promise(function (resolve, reject) {
        let index = books.findIndex(i => i.id == bookId);
        if (index == -1)
            return resolve();
        else {
            books[index] = body;
            saveBooks();
        }
    });
}

/**
 * Update author information
 *
 * body Author Author data
 * authorId String 
 * no response value expected for this operation
 **/
 exports.authorsAuthorIdPUT = function (body, authorId) {
    return new Promise(function (resolve, reject) {
        let index = authors.findIndex(i => i.id == authorId);
        if (index == -1)
            return resolve();
        else {
            authors[index] = body;
            saveAuthors();
        }
    });
}

/**
 * Update publisher information
 *
 * body Publisher Publisher data
 * publisherId String 
 * no response value expected for this operation
 **/
 exports.publishersPublisherIdPUT = function (body, publisherId) {
    return new Promise(function (resolve, reject) {
        let index = publishers.findIndex(i => i.id == publisherId);
        if (index == -1)
            return resolve();
        else {
            publishers[index] = body;
            savePublishers();
        }
    });
}


/**
 * Create a new book
 *
 * body Book Book data
 * no response value expected for this operation
 **/
exports.booksPOST = function (body) {
    return new Promise(function (resolve, reject) {
        let index = books.findIndex(i => i.id == bookId);
        if (index != -1)
            return resolve();
        else {
            books.push(body);
            saveBooks();
        }
    });
}

/**
 * Create a new Author
 *
 * body Author Book data
 * no response value expected for this operation
 **/
 exports.authorsPOST = function (body) {
    return new Promise(function (resolve, reject) {
        let index = authors.findIndex(i => i.id == authorId);
        if (index != -1)
            return resolve();
        else {
            authors.push(body);
            saveAuthors();
        }
    });
}

/**
 * Create a new Publisher
 *
 * body Publisher Book data
 * no response value expected for this operation
 **/
 exports.publishersPOST = function (body) {
    return new Promise(function (resolve, reject) {
        let index = publishers.findIndex(i => i.id == publisherId);
        if (index != -1)
            return resolve();
        else {
            publishers.push(body);
            savePublishers();
        }
    });
}

