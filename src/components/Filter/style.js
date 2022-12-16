import styled from "styled-components";
import { ReactComponent as hauses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  // justify-content:space-between;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const Icons = styled.div``;
Icons.Hauses = styled(hauses)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 3px solid #e6e9ec;
`;
const Section = styled.div`
display:flex;
justify-content: start;
gap:20px;
margin-bottom:20px;
`;

export { Container, Icons, MenuWrapper, Section };
