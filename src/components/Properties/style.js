import styled from "styled-components";

const Container = styled.div`
  // display: flex;
  // justify-content:space-between;
  // flex-wrap: wrap;
  // gap:20px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  padding: var(--padding);
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

export { Container };
