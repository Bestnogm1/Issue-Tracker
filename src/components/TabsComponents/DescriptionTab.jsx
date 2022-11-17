import React from "react";
import * as Chakra from "@chakra-ui/react";
import styles from "./Styles/DescriptionTab.module.css";

const DescriptionTab = ({ ticketDescription }) => {
  return (
    <div>
      <Chakra.Box className={styles.DescriptionTabDetail}>
        <Chakra.Flex>
          <Chakra.Text className={styles.DescriptionTabText}>
            {ticketDescription}
          </Chakra.Text>
        </Chakra.Flex>
      </Chakra.Box>
    </div>
  );
};

export default DescriptionTab;
