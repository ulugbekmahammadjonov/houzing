import styled from "styled-components";
import { ReactComponent as hauses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { Select } from "antd";
const Container = styled.div`
  margin: 0 auto;
  min-width: 1260px;
  // width: 100%;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
`;
const SelectAnt = styled(Select)`
  max-width: 200px;
  min-width: 200px;
  width: 100%;
  .ant-select-selector {
    height: 46px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

export { Container, SelectAnt, Icons, MenuWrapper, Section };
