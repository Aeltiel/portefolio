import { useState } from "react";

function ProjectItems({ language }) {
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
          <p>Titre</p>
          <p>date</p>
        </div>
      </div>
      {open && <div>{language}</div>}
    </div>
  );
}
export default ProjectItems;
