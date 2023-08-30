function DiplomesDisplay({ title, ecole, image, date }) {
  return (
    <div className="diplomeC">
      <img className="diplomeC__img" src={image} alt="logo de l'école" />
      <div className="diplomeC__infos">
        <h3 className="diplomeC__infos__title">{title}</h3>
        <p className="diplomeC__infos__text1">{ecole}</p>
        <p className="diplomeC__infos__text2">{date}</p>
      </div>
    </div>
  );
}
export default DiplomesDisplay;
