const books = [
  {
    id: "1",
    title: "Thinking, Fast and Slow",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/71m+kC4vOxL.jpg",
    currentStatus: "currently_reading",
  },
  {
    id: "2",
    title: "The Body Keeps the Score",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/71-OnTj8N8L.jpg",
    currentStatus: "currently_reading",
  },
  {
    id: "3",
    title: "Guns, Germs, and Steel",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/81RdveuYXWL.jpg",
    currentStatus: "read",
  },
  {
    id: "4",
    title: "Steve Jobs",
    category: "Biography",
    imgUrl: "https://m.media-amazon.com/images/I/51ovTzIeV1L.jpg",
    currentStatus: "read",
  },
  {
    id: "5",
    title: "The Name of the Wind",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/51UBY8uTacS.jpg",
    currentStatus: "read",
  },
  {
    id: "6",
    title: "The Tipping Point",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/6173QRIGTtL.jpg",
    currentStatus: "read",
  },
  {
    id: "7",
    title: "Macbeth",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/81HPJGIketL.jpg",
    currentStatus: "currently_reading",
  },
  {
    id: "8",
    title: "The Exorcist",
    category: "Horror",
    imgUrl: "https://m.media-amazon.com/images/I/81q-n+f7cKL.jpg",
    currentStatus: "currently_reading",
  },
  {
    id: "9",
    title: "The Silence of the Lambs",
    category: "Horror",
    imgUrl: "https://m.media-amazon.com/images/I/814fRILnbnL.jpg",
    currentStatus: "currently_reading",
  },
  {
    id: "10",
    title: "A Raisin in the Sun",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/71n3U+vh6FL.jpg",
    currentStatus: "read",
  },
  {
    id: "11",
    title: "Outliers",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/71hq+FB1jJL.jpg",
    currentStatus: "read",
  },
  {
    id: "12",
    title: "A Game of Thrones",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/71JsMvAcmmL.jpg",
    currentStatus: "currently_reading",
  },
  {
    id: "13",
    title: "Martin Luther King, Jr.: A Biography",
    category: "Biography",
    imgUrl: "https://m.media-amazon.com/images/I/61Ik6mL7ZtL.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "14",
    title: "Death of a Salesman",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/51i+ZHlnt4L.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "15",
    title: "The Crucible",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/81-tbD97VRL.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "16",
    title: "Power of Habit",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/71ONWR6eXDL.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "17",
    title: "The Shining",
    category: "Horror",
    imgUrl: "https://m.media-amazon.com/images/I/71tekF9GOkL.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "18",
    title: "The Wright Brothers",
    category: "Biography",
    imgUrl: "https://m.media-amazon.com/images/I/81+O-3L5rYL.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "19",
    title: "Dracula",
    category: "Horror",
    imgUrl: "https://m.media-amazon.com/images/I/61vljH0K3gL.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "20",
    title: "Hamlet",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/51cJqvkcdlL.jpg",
    currentStatus: "want_to_read",
  },
  {
    id: "21",
    title: "The Hitchhiker's Guide to the Galaxy",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/61p2GtNZ0tL.jpg",
    currentStatus: "none",
  },
  {
    id: "22",
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/61AiYw92f+L.jpg",
    currentStatus: "none",
  },
  {
    id: "23",
    title: "Einstein: His Life and Universe",
    category: "Biography",
    imgUrl: "https://m.media-amazon.com/images/I/81aYAGAlP7L.jpg",
    currentStatus: "none",
  },
  {
    id: "24",
    title: "Freakonomics",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/51L4dDH0fOL.jpg",
    currentStatus: "none",
  },
  {
    id: "25",
    title: "It",
    category: "Horror",
    imgUrl: "https://m.media-amazon.com/images/I/71BIM1n25FL.jpg",
    currentStatus: "none",
  },
  {
    id: "26",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/81YyraOaX1L.jpg",
    currentStatus: "none",
  },
  {
    id: "27",
    title: "Malcolm X: A Life of Reinvention",
    category: "Biography",
    imgUrl: "https://m.media-amazon.com/images/I/81cJV9U1VRL.jpg",
    currentStatus: "none",
  },
  {
    id: "28",
    title: "Harry Potter and the Chamber of Secrets",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/81S0LnPGGUL.jpg",
    currentStatus: "none",
  },
  {
    id: "29",
    title: "The Hobbit",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/6196+-JPf0L.jpg",
    currentStatus: "none",
  },
  {
    id: "30",
    title: "Pet Sematary",
    category: "Horror",
    imgUrl: "https://m.media-amazon.com/images/I/71XaPSTmUyL.jpg",
    currentStatus: "none",
  },
  {
    id: "31",
    title: "Romeo and Juliet",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/711TxX8cdlL.jpg",
    currentStatus: "none",
  },
  {
    id: "33",
    title: "Harry Potter and the Philosopher's Stone",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
    currentStatus: "none",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/91uix57X+jL.jpg",
    currentStatus: "none",
  },
  {
    id: "34",
    title: "Harry Potter and the Goblet of Fire",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/810jKiNChxL.jpg",
    currentStatus: "none",
  },
  {
    id: "35",
    title: "Harry Potter and the Order of the Phoenix",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/81a4yXpXjnL.jpg",
    currentStatus: "none",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/81p2+4nYtkL.jpg",
    currentStatus: "none",
  },
  {
    id: "36",
    title: "Harry Potter and the Deathly Hallows",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/81Whkax7IGL.jpg",
    currentStatus: "none",
  },
  {
    id: "37",
    title: "Harry Potter and the Prisoner of Azkaban",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/91uix57X+jL.jpg",
    currentStatus: "none",
  },
  {
    id: "38",
    title: "Harry Potter and the Half-Blood Prince",
    category: "Fantasy",
    imgUrl: "https://m.media-amazon.com/images/I/81p2+4nYtkL.jpg",
    currentStatus: "none",
  },
  {
    id: "39",
    title: "To Kill a Mockingbird",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
    currentStatus: "none",
  },
  {
    id: "40",
    title: "The Great Gatsby",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/516qPs6NcqL.jpg",
    currentStatus: "none",
  },
  {
    id: "41",
    title: "Pride and Prejudice",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/61J8NJB9dTL.jpg",
    currentStatus: "none",
  },
  {
    id: "42",
    title: "A Streetcar Named Desire",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/91ctMEKnWEL.jpg",
    currentStatus: "none",
  },
  {
    id: "43",
    title: "Cat on a Hot Tin Roof",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/3173NyVIkzL.jpg",
    currentStatus: "none",
  },
  {
    id: "44",
    title: "Equus",
    category: "Drama",
    imgUrl: "https://m.media-amazon.com/images/I/81i3FidfTHL.jpg",
    currentStatus: "none",
  },
  {
    id: "45",
    title: "Sapiens: A Brief History of Humankind",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    currentStatus: "none",
  },
  {
    id: "46",
    title: "Becoming",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/819YLKVUOhL.jpg",
    currentStatus: "none",
  },
  {
    id: "47",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/81rTrhtGDvL.jpg",
    currentStatus: "none",
  },
  {
    id: "48",
    title: "The Immortal Life of Henrietta Lacks",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/91Xsy7U27RL.jpg",
    currentStatus: "none",
  },
  {
    id: "49",
    title: "Educated: A Memoir",
    category: "Non-Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/71i+U0qfKQL.jpg",
    currentStatus: "none",
  },
  {
    id: "50",
    title: "House of Leaves",
    category: "Horror",
    imgUrl: "https://m.media-amazon.com/images/I/61J5D3kxAwL.jpg",
    currentStatus: "none",
  },
  {
    id: "51",
    title: "The Alchemist",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/31Jo+vKgwEL.jpg",
    currentStatus: "none",
  },
  {
    id: "52",
    title: "The Kite Runner",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg",
    currentStatus: "none",
  },
  {
    id: "53",
    title: "Rich Dad Poor Dad",
    category: "Non-Fiction",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Rich_Dad_Poor_Dad.jpg",
    currentStatus: "none",
  },
  {
    id: "54",
    title: "The Diary of a Young Girl",
    category: "Biography",
    imgUrl: "https://m.media-amazon.com/images/I/61pekVSBRhL.jpg",
    currentStatus: "none",
  },
  {
    id: "55",
    title: "The Catcher in the Rye",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
    currentStatus: "none",
  },
  {
    id: "56",
    title: "The Girl on the Train",
    category: "Thriller",
    imgUrl: "https://m.media-amazon.com/images/I/41dScwmqYJS.jpg",
    currentStatus: "none",
  },
  {
    id: "57",
    title: "The Da Vinci Code",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/71DAQuN7jhL.jpg",
    currentStatus: "none",
  },
  {
    id: "58",
    title: "The Hunger Games",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/71yD5q10AaL.jpg",
    currentStatus: "none",
  },
  {
    id: "59",
    title: "The Handmaid's Tale",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/91HYSx+bP5L.jpg",
    currentStatus: "none",
  },
  {
    id: "61",
    title: "The Fault in Our Stars",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/817tHNcyAgL.jpg",
    currentStatus: "none",
  },
  {
    id: "62",
    title: "Gone Girl",
    category: "Thriller",
    imgUrl: "https://m.media-amazon.com/images/I/41aEQgTFPoL.jpg",
    currentStatus: "none",
  },
  {
    id: "63",
    title: "The Girl with the Dragon Tattoo",
    category: "Thriller",
    imgUrl: "https://m.media-amazon.com/images/I/81NzFbZMpNL.jpg",
    currentStatus: "none",
  },
  {
    id: "64",
    title: "The Silent Patient",
    category: "Thriller",
    imgUrl: "https://m.media-amazon.com/images/I/51oVTRsjcqL.jpg",
    currentStatus: "none",
  },
  {
    id: "65",
    title: "The Bourne Identity",
    category: "Thriller",
    imgUrl: "https://m.media-amazon.com/images/I/51e5lIz7sFL.jpg",
    currentStatus: "none",
  },
  {
    id: "66",
    title: "1984",
    category: "Classic",
    imgUrl: "https://m.media-amazon.com/images/I/91sKUE5wwOL.jpg",
    currentStatus: "none",
  },
  {
    id: "67",
    title: "Moby-Dick",
    category: "Classic",
    imgUrl: "https://m.media-amazon.com/images/I/61+KbxkEhJL.jpg",
    currentStatus: "none",
  },
  {
    id: "68",
    title: "Jane Eyre",
    category: "Classic",
    imgUrl: "https://m.media-amazon.com/images/I/41FFyJrLslL.jpg",
    currentStatus: "none",
  },
  {
    id: "69",
    title: "The Picture of Dorian Gray",
    category: "Classic",
    imgUrl: "https://m.media-amazon.com/images/I/51tSAJoRYZL.jpg",
    currentStatus: "none",
  },
  {
    id: "70",
    title: "Mansfield Park",
    category: "Classic",
    imgUrl: "https://m.media-amazon.com/images/I/71nOda5kFNL.jpg",
    currentStatus: "none",
  },
  {
    id: "71",
    title: "Wuthering Heights",
    category: "Classic",
    imgUrl: "https://m.media-amazon.com/images/I/51xXBhcPX9L.jpg",
    currentStatus: "none",
  },
  {
    id: "72",
    title: "Catching Fire",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/51HurzyBBOL.jpg",
    currentStatus: "none",
  },
  {
    id: "73",
    title: "Mockingjay",
    category: "Fiction",
    imgUrl: "https://m.media-amazon.com/images/I/81TJJR6+cIL.jpg",
    currentStatus: "none",
  },
];

export default books;
