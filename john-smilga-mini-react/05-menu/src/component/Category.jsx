export default function Category( props) {
let category = props.category;
  return (
    <div className="btn-container">
        {category.map(val =>{
            return (
              <button className="filter-btn" onClick={()=>props.filterMenu(val)}>
                {val}
              </button>
            );
        })}
    </div>
  );
}