import { useState } from "react";

function ProjectItems({ title, date, img, description, langage, lien }) {
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
          <p>
            {title}{" "}
            <a href={lien} target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
          <p>{date}</p>
        </div>
      </div>
      {open && (
        <div className="items__details">
          <img src={img} alt="project screen" className="items__details--img" />
          <div className="items__details--icon">
            {langage.map((icon) => {
              return (
                <span key={icon.id}>
                  <i className={icon.icon}></i>
                  {icon.iconimg && (
                    <img
                      src={icon.iconimg}
                      alt="language icon"
                      className="items__details--iconimg"
                    />
                  )}
                </span>
              );
            })}
          </div>
          <p className="items__details--text">{description}</p>
        </div>
      )}
    </div>
  );
}
export default ProjectItems;
