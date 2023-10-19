import React from "react";
import css from "../css/Helps.css";
import { Notes } from "../data files/HelpNotes";

const Helps = () => {
  return (
    <>
      <div className="container mt-2 pb-2 pt-4">
        <div className="accordion" id="accordionExample">
          {Notes.map((note, index) => (
            <div className="accordion-item mb-2" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  aria-expanded="true" aria-controls="collapseOne"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                >
                  {note.ques}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{note.ans}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Helps;