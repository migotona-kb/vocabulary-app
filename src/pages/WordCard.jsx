import { Link, useParams } from "react-router-dom";
import vocabulary from "../data/vocabulary.json";
import { useEffect, useState } from "react";

function WordCard() {
  const [wordVisible, setWordVisible] = useState(false);
  const [inputWord, setInputWord] = useState("");
  const [correct, setCorrect] = useState("");
  const [correctCol, setCorrectCol] = useState(null);
  const { id } = useParams();
  const index = vocabulary.findIndex((word) => word.id === Number(id));
  const word = vocabulary[index];
  let nextWord = vocabulary[index + 1];
  let previousWord = vocabulary[index - 1];

  useEffect(() => {
    setWordVisible(false);
    setInputWord("");
    setCorrect("");
  }, [id]);

  function handleWordShow(event) {
    event.preventDefault();
    if (inputWord.trim() === "") {
      alert("단어를 입력해주세요");
      return;
    }

    setWordVisible(!wordVisible);

    if (inputWord.trim() === word.kor) {
      setCorrect("정답입니다");
      setCorrectCol(true);
      const audio = new Audio("/sounds/mixkit-sweet-kitty-meow-93.wav");
      audio.play();
    } else {
      setCorrect("오답입니다");
      setCorrectCol(false);
      const audio = new Audio("/sounds/mixkit-dog-barking-1.wav");
      audio.play();
    }
  }

  if (previousWord === undefined) {
    previousWord = vocabulary[0];
  }

  if (nextWord === undefined) {
    nextWord = vocabulary[vocabulary.length - 1];
  }

  return (
    <main>
      <h1>단어</h1>
      <p>
        <Link to={`/words/${previousWord.id}`}>＜＜이전단어</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={`/`}>리스트화면으로</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={`/words/${nextWord.id}`}>다음단어＞＞</Link>
      </p>
      <p>{word.jpn}</p>
      <form onSubmit={handleWordShow}>
        <input
          type="text"
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
        />
        &nbsp;
        <button type="submit" disabled={wordVisible}>
          단어보이기
        </button>
      </form>
      <p
        style={{
          color: correctCol ? "blue" : "pink",
        }}
      >
        {correct}
      </p>
      {wordVisible && <p>{word.kor}</p>}
    </main>
  );
}

export default WordCard;
