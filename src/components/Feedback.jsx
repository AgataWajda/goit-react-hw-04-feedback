export const Freedback = ({ goodCounter, neutralCounter, badCounter }) => {
  return (
    <div>
      <button onClick={goodCounter}>Good</button>
      <button onClick={neutralCounter}>Neutral</button>
      <button onClick={badCounter}>Bad</button>
    </div>
  );
};
