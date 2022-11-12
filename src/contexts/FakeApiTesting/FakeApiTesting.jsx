import React, { createContext, useContext, useEffect, useState } from "react";

const FakeApiTesting = createContext(null);
export const useFakeApiTesting = () => useContext(FakeApiTesting);

const ApiTesting = ({ children }) => {
  let count = 0;
  let todo = [
    { value: "jobs", id: 2, label: "OpenTickets" },
    { value: "water", id: 3, label: "InProgressTickets" },
    { value: "testing", id: 4, label: "OpenTickets" },
    { value: "best", id: 52, label: "OpenTickets" },
  ];
  const [fakeTickets, setFakeTickets] = useState([]);
  useEffect(() => {
    setFakeTickets(todo);
  }, [count]);

  return (
    <FakeApiTesting.Provider value={{ fakeTickets, setFakeTickets }}>
      {children}
    </FakeApiTesting.Provider>
  );
};
export default ApiTesting;
