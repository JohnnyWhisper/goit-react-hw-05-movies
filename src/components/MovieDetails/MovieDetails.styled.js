import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const MovieInfo = styled.div`
  display: flex;
  padding-top: 20px;
`;

export const InfoBox = styled.ul`
  margin-left: 20px;
`;

export const MovieItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MovieLabel = styled.p`
  font-size: 26px;
`;

export const MoreInfo = styled.div`
  padding: 12px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const MoreLink = styled(Link)`
  display: inline-block;
  padding: 4px;
  font-size: 22px;
  color: blue;
  :hover {
    color: red;
  }
  font-size: 18px;
  font-weight: 700;
  color: blue;

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

export const GoBack = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  :hover {
    color: red;
  }
`;
