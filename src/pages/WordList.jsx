import vocabulary from "../data/vocabulary.json";
import WordListItem from "../components/WordListItem";

function WordList() {
  return (
    <main>
      <h1>일/한 단어장</h1>
      {vocabulary.map((word) => (
        <WordListItem key={word.id} word={word} />
      ))}
    </main>
  );
}

export default WordList;
