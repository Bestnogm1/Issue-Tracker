import { useState, useEffect } from "react";
import * as profileService from "../../services/profileService";
import dayjs from "dayjs";
import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const Profiles = ({ user }) => {
  const [profiles, setProfiles] = useState([]);
  const [assignedTickets, setAssignedTickets] = useState([]);
  const [foundUser, setFoundUser] = useState("");
  useEffect(() => {
    profileService.getAllProfiles().then((profiles) => setProfiles(profiles));
  }, []);

  useEffect(() => {
    profileService
      .getOneProfile(user.profile)
      .then((profiles) => setAssignedTickets(profiles.ticketAssignedToMe));
  }, []);

  const findOwner = (ownerId) => {
    const foundOwner = profiles.find((owner) => owner._id === ownerId);
    setFoundUser(foundOwner.name);
  };
  // const correctName = getAllProfile.find((profile) => {
  //   return profile.name.toLowerCase() === profileName.toLowerCase();
  // });
  // return correctName._id;
  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {assignedTickets.length ? (
        <SimpleGrid
          // h="98vh"
          bg="gray.100"
          // columns={{ sm: 1, md: 4 }}
          columns={[2, null, 3]}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.400"
          gap={70}
        >
          <>
            {assignedTickets.map((ticket, k) => (
              <div key={k}>
                <GridItem
                  w="550px"
                  h="200px"
                  borderWidth="2px"
                  boxShadow="base"
                  p="6px"
                  // ml="px"
                  rounded="md"
                  bg="white"
                >
                  <Heading fontSize="20px">
                    {ticket.owner === user.profile ? (
                      <h1>Ticket Assigned To Myself</h1>
                    ) : (
                      <h1>{findOwner(ticket.owner)}</h1>
                    )}
                  </Heading>
                  <h1> {dayjs().to(dayjs(ticket.createdAt))}</h1>
                  <h1>{ticket.problems}</h1>
                  <h1>{ticket.subject}</h1>
                  <Text>
                    <h1>{ticket.details}</h1>
                  </Text>
                </GridItem>
              </div>
            ))}
          </>
        </SimpleGrid>
      ) : (
        <p>No profiles yet</p>
      )}
    </>
  );
};

export default Profiles;
