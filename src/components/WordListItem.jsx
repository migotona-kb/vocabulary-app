import { useNavigate } from "react-router-dom";

function WordListItem({ word }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/words/${word.id}`);
  }

  return (
    <main>
      <div onClick={handleClick}>
        {word.jpn} ---- {word.kor} &nbsp;&nbsp;&nbsp; ＞
      </div>
    </main>
  );
}

export default WordListItem;
