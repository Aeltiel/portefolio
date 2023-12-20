import Quest from "../Data/quest.json";

function Parchemin() {
  const dataQuest = Quest;
  return (
    <div className="paper__container">
      <h3 className="paper__title">
        <i className="fa-solid fa-scroll"></i>
        Mes nouvelles quêtes !<i className="fa-solid fa-scroll"></i>
      </h3>

      <ul className="paper__list">
        {dataQuest.map((activity) => {
          return (
            <li className="paper__list__quest" key={activity.id}>
              <i className="fa-regular fa-square"></i>
              {activity.title}
              <p className="paper__list__quest--text">{activity.activity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Parchemin;
