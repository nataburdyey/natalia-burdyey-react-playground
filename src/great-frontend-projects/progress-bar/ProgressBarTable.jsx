import { ProgressBar } from "./ProgressBar";
import "./progressBar.css";
import { Footer } from "../Footer";

const testData = [0, -10, 25, 50, 75, 100, 200];

export const ProgressBarTable = () => {
  return (
    <>
      <main className="progress-bar-table-container">
        <h2>Progress Bar</h2>
        <div className="progress-bar-table">
          {testData.map((num, idx) => {
            return (
              <div key={idx} className="progress-item">
                <div>{num} out of 100</div>
                <ProgressBar value={num} />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};
