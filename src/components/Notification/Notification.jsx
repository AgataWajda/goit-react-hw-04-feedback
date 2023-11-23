import css from './Notification.module.css';
export const Notfication = ({ message }) => {
  return (
    <div>
      <h2>Statistic:</h2>
      <span className={css.noFeedback}>{message}</span>
    </div>
  );
};
