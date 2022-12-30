import Category from "./component/Category";
import data from "./component/Data";
import Menu from "./component/Menu";
import "./component/style.css"
import React ,{useState} from "react";
function App() {
  // set used for storing unique value : in this case here breakfast comes 2 time but stores 1 time only in array
  let allCategory = ["all", ...new Set(data.map((newCat) => newCat.category))];
  const [menuData, setMenuData] = useState(data);
  const [category, setCateogry] = useState(allCategory);

 function filterMenu(cate){
  if(cate ==="all"){
    setMenuData(data)
    return;
  }
  let filterData = data.filter(item =>{
    return item.category === cate;
  })
  setMenuData([...filterData])
 }

  console.log(category);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Category category={category} filterMenu={filterMenu} />
      <Menu key={menuData.id} 
       menuData ={menuData} />
    </main>
  );
}

export default App;
