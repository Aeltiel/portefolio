import { useState } from "react";

function ProjectItems({ title, date, img, description }) {
  const [open, setOpen] = useState(false);

  function openItem() {
    setOpen(!open);
  }

  return (
    <div className="items__container">
      <div className="items__bar" onClick={openItem}>
        {open ? (
          <i className="fa-solid fa-folder-open"></i>
        ) : (
          <i className="fa-solid fa-folder"></i>
        )}
        <div className="items__bar--title">
          <p>{title}</p>
        </div>
      </div>
      {open && (
        <div className="items__details">
          <img src={img} alt="project screen" className="items__details--img" />
          <div className="items__details--date">{date}</div>
          <p className="items__details--text">{description}</p>
        </div>
      )}
    </div>
  );
}
export default ProjectItems;
