//A function to get the book titles from an array of objects
const getTheTitles = function(array) {

    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ];
      return array.map(book => book.title);
};
   


// Do not edit below this line
module.exports = getTheTitles;
