import css from './Feedback.module.css';
export const Freedback = ({ goodCounter, neutralCounter, badCounter }) => {
  return (
    <div className={css.buttons}>
      <button onClick={goodCounter} className={css.button}>
        Good
      </button>
      <button onClick={neutralCounter} className={css.button}>
        Neutral
      </button>
      <button onClick={badCounter} className={css.button}>
        Bad
      </button>
    </div>
  );
};
