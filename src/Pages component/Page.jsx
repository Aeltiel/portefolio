function Page({ data }) {
  return (
    <div className="page__box1">
      <h3 className="page__content1--title1">{data.title}</h3>
      {data.formations.map((element) => {
        return (
          <div className="page__content1" key={element.id}>
            <img className="page__img1" src={element.image} alt="Logo" />
            <div className="page__content1__formation">
              <p className="page__content1__formation--title">
                {element.title}
              </p>
              <p>{element.ecole}</p>
              <p>{element.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Page;
