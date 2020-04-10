import React from "react";

import Customer from "./components/customer.component";

import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Aiden",
    birthday: "870822",
    gender: "Male",
    job: "Software Developer",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Sehee",
    birthday: "860000",
    gender: "Female",
    job: "Interior Decorator",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "Ian",
    birthday: "190201",
    gender: "Male",
    job: "Baby",
  },
];

function App() {
  return (
    <div>
      {customers.map((customer) => {
        return (
          <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
