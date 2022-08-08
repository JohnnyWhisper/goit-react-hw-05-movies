import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkItem = styled.li`
  padding: 20px;
`;

export const LinkStyled = styled(Link)`
  color: royalBlue;
  :hover {
    color: red;
  }

  color: dodgerBlue;

  text-align: left;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
  }
  @media (min-width: 1280px) {
    font-size: 34px;
  }
`;
