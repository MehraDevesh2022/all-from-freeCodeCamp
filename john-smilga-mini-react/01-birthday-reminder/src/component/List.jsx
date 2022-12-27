export default  function List(props){
   const {name , img , age} = props
    return (
      <article className="person">
        <img src={img} alt="person-img" className="person img" />
        <div>
          <h4>{name}</h4>
          <p>{age} year</p>
        </div>
      </article>
    );
}