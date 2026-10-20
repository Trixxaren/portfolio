import { FiCheck, FiMessageSquare } from "react-icons/fi";

export default function ProjectCover({ project, language, detail = false }) {
  const sv = language === "sv";
  if (project.cover === "sales" && !project.screenshots?.length)
    return (
      <div
        className={
          "project-cover cover-sales" + (detail ? " cover-detail" : "")
        }
        aria-label={
          sv
            ? "Illustration av Sales-OS arbetsflöde"
            : "Illustration of the Sales-OS workflow"
        }
      >
        <div className="mini-app">
          <div className="mini-app-bar">
            <span className="mini-logo">S</span>
            <strong>Sales-OS</strong>
            <span className="mini-app-label">CRM + BUSINESS OS</span>
          </div>
          <div className="mini-app-body">
            <div className="mini-app-heading">
              <div>
                <small>{sv ? "DIN ARBETSDAG" : "YOUR WORKDAY"}</small>
                <strong>
                  {sv ? "Nästa steg, samlat." : "Your next steps, together."}
                </strong>
              </div>
              <span className="mini-avatar">RV</span>
            </div>
            <div className="mini-columns">
              <div>
                <span>
                  <FiCheck /> {sv ? "Att granska" : "To review"}
                </span>
                <div className="mini-task">
                  <i>2</i>
                  <strong>
                    {sv ? "Ett nytt mejlförslag" : "A new email draft"}
                  </strong>
                  <p>
                    {sv
                      ? "Agent 2 har förberett ett utkast."
                      : "Agent 2 prepared a draft."}
                  </p>
                  <b>{sv ? "Väntar på dig" : "Waiting for you"}</b>
                </div>
              </div>
              <div>
                <span>
                  <FiMessageSquare /> {sv ? "Dialoger" : "Conversations"}
                </span>
                <div className="mini-task">
                  <i>3</i>
                  <strong>
                    {sv ? "Ett positivt svar" : "A positive reply"}
                  </strong>
                  <p>
                    {sv
                      ? "Dags att ta nästa samtal."
                      : "Time for the next conversation."}
                  </p>
                  <b className="green-tag">{sv ? "Nytt svar" : "New reply"}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="cover-caption">
          {sv ? "Illustration · exempeldata" : "Illustration · sample data"}
        </span>
      </div>
    );
  const screenshot = project.screenshots?.[0];
  return (
    <div
      className={
        "project-cover cover-" +
        (project.cover || "placeholder") +
        (detail ? " cover-detail" : "")
      }
    >
      {screenshot ? (
        <img src={screenshot.src} alt={screenshot[language]} loading="lazy" />
      ) : (
        <span className="placeholder-title">{project.title}</span>
      )}
    </div>
  );
}
