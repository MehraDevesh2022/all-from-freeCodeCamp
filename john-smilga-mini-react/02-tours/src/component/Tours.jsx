import Tour from "./Tour";
export default function Tours({ tours, deleteHandler }) {
  console.log(tours.length);
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <>
              <Tour key={tour.id} {...tour} deleteHandler={deleteHandler} />
            </>
          );
        })}
      </div>
    </section>
  );
}