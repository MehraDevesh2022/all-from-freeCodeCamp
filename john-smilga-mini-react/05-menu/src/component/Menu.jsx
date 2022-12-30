export default function Menu(props) {
console.log(props);
  return (
    <div className="section-center">
      {props.menuData.map((obj) => {
        return (
          <article key={obj.id} className="menu-item">
            <img
              src={obj.img}
              alt={obj.title}
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>{obj.title}</h4>
                <h4 className="price">${obj.price}</h4>
              </header>
              <p className="item-text">{obj.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
