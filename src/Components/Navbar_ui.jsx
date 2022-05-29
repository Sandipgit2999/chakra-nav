import React from "react";
import { Box, StylesProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from './Navbar_ui.module.css'
import { Divider } from '@chakra-ui/react'

const Navbar_ui = () => {
  return (
    <div>
      <div className={styles.main}>
        <Box
          className={styles.box}
          bg="white"
          
          p={4}
          color="white"
          display="flex"
        >
          <h2>Logo</h2>
          <p>Inspiration</p>
          <p>Find Work </p>
          <p>Learn Design</p>
          <p>Hire Designers</p>
          
        </Box>
        <div className={styles.end}> <p>Sign In</p>
        <Button className={styles.btn} padding="7px" borderRadius="5px" bg='hotpink' colorScheme="white" color="white">Sign Up</Button>
        </div>
        
      </div>
     <div className={styles.line}></div>
    </div>
    
  );
};

export default Navbar_ui;
