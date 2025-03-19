import "./progressBar.css";

export const ProgressBar = ({ value }) => {
  const MIN = 0;
  const MAX = 100;
  const normalizedValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${normalizedValue}%` }}
        aria-valuemax={MAX}
        aria-valuemin={MIN}
        aria-valuenow={normalizedValue}
      >
        {normalizedValue}%
      </div>
    </div>
  );
};
