import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            images = {pet.images}
            location = {`${pet.city}, ${pet.state}`}
            animal={pet.animal}
            breed={pet.breed}
          />
        ))
      )}
    </div>
  );
};

export default Result;
