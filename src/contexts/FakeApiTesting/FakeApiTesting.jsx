import React, { createContext, useContext, useEffect, useState } from "react";

const FakeApiTesting = createContext(null);
export const useFakeApiTesting = () => useContext(FakeApiTesting);

const ApiTesting = ({ children }) => {
  let count = 0;
  let todo = [
    { context: "jobs", id: 2, status: "OpenTickets" },
    { context: "water", id: 3, status: "InProgressTickets" },
    { context: "testing", id: 4, status: "OpenTickets" },
    { context: "best", id: 52, status: "OpenTickets" },
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
