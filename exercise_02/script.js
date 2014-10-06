var favBooks = [
	{
		title: "The Design of Everyday Things",
		author: "Don Norman"
	},
	{
		title: "I Don't Really Have 'Favorite' Books",
		author: "Notta Big Reader"
	},
	{
		title: "Do Books On Tape Count?",
		author: "Audible.com"
	},
	{
		title: "Cool, Nothing Really of Note On Tape Either",
		author: "Idunno Wasrong Withme"
	}
];

function listBooksArray(booksArray){
  var list = "<ul>";
  for (i = 0; i < booksArray.length; i++) {
   var listItem = "<li>" + booksArray[i].title + " by " + booksArray[i].author + "</li>";
    list += listItem;
  }
  list += "</ul>";
  return list;
}

console.log(listBooksArray(favBooks));