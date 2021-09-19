"use strict";

/**
 * Delete a author by ID.
 *
 * authorId String
 * no response value expected for this operation
 **/
exports.authorsAuthorIdDELETE = function (authorId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Returns a author by ID.
 *
 * authorId String
 * returns Author
 **/
exports.authorsAuthorIdGET = function (authorId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      author: "SterbenStark",
      nationality: "American",
      birth_year: "1995",
      fields: "Distributed computing, Operating Systems",
      books: "5",
      authorId: "author3"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update author information
 *
 * body Author Author data
 * authorId String
 * no response value expected for this operation
 **/
exports.authorsAuthorIdPUT = function (body, authorId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Create a new author
 *
 * body Author Create a new Author
 * no response value expected for this operation
 **/
exports.authorsPOST = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Delete a book by ID.
 *
 * bookId String
 * no response value expected for this operation
 **/
exports.booksBookIdDELETE = function (bookId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Returns a book by ID.
 *
 * bookId String
 * returns Book
 **/
exports.booksBookIdGET = function (bookId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      copyright: "2015",
      pages: "1054",
      author: "Silbertzhz",
      edition: "4th",
      publisher: "Mc Graw Hill",
      language: "ENGLISH",
      title: "Database System",
      bookId: "book01"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Return author of books by ID.
 *
 * authorId String
 * returns Book
 **/
exports.booksBookIdGET_0 = function (authorId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      copyright: "2015",
      pages: "1054",
      author: "Silbertzhz",
      edition: "4th",
      publisher: "Mc Graw Hill",
      language: "ENGLISH",
      title: "Database System",
      bookId: "book01"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update book information
 *
 * body Book Book data
 * bookId String
 * no response value expected for this operation
 **/
exports.booksBookIdPUT = function (body, bookId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Create a new book
 *
 * body Book Create a new Book
 * no response value expected for this operation
 **/
exports.booksPOST = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Create a new publisher
 *
 * body Publisher Create a new Publisher
 * no response value expected for this operation
 **/
exports.publishersPOST = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Delete a publisher by ID.
 *
 * publisherId String
 * no response value expected for this operation
 **/
exports.publishersPublisherIdDELETE = function (publisherId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Returns a publisher by ID.
 *
 * publisherId String
 * returns Publisher
 **/
exports.publishersPublisherIdGET = function (publisherId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      publisher: "SterbenStark",
      country: "United States",
      founded: "1807",
      genere: "Academic",
      books: "1",
      publisherId: "publisher1"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update publisher information
 *
 * body Publisher Publisher data
 * publisherId String
 * no response value expected for this operation
 **/
exports.publishersPublisherIdPUT = function (body, publisherId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};
