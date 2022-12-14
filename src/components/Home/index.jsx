import React from 'react'
import {Input, Button} from '../Generic'
import {Container} from "./style"
const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={200} placeholder={"TEST"} />
      <Button>Tes</Button>
    </Container>
  );
}

export default Home