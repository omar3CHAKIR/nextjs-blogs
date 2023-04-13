function limit(paragraph, maxWords) {
    let words = paragraph.split(" ");
    if (words.length > maxWords) {
      words = words.slice(0, maxWords);
      paragraph = words.join(" ") + " ...";
    }
    return paragraph;
  }

  export default limit;