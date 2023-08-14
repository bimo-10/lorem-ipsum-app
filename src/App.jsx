import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(1);
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ubah count yg string ke number
    let amount = parseInt(count);
    console.log(amount);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Tired Of Boring Lorem Ipsum?</h4>
      <form action="" onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="paragraph">Paragraphs</label>
        <input
          type="number"
          name="paragraph"
          id="paragraph"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
