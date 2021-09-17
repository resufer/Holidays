import styled from 'styled-components';

const HolidaysList = styled.div`
  width: 80vw;
  margin-left: 10vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  aling-items: center;
`;

const HolidayItem = styled.div`
  border: 2px solid black;
`;

export {
  HolidaysList,
  HolidayItem,
};
