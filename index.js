 let author1 = document.querySelector("#author")
 let text1 = document.querySelector("#text")
 let newquote = document.querySelector("#new-quote")
 let statements = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.", 
    author: "Thomas Edison"},
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer"
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu"
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    text: "Life is learning experience, only if you learn.",
    author: "Yogi Berra"
  }
 ]
 let i = 0;
 updateStatements();
 function updateStatements() {
  const { text, author,} = statements[i];
  text1.innerHTML = text;
  author1.innerHTML = author;
  i++;
  if (i === statements.length) {
    i = 0;
  }
 } 
 newquote.addEventListener("click", () => {
  updateStatements()
});
