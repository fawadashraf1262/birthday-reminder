import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person, id) => {
        return (
          <article key={id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} Years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
