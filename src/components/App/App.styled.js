import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;

  text-align: left;
  margin-bottom: 20px;

  @media (min-width: 768) {
    font-size: 18px;

    margin-bottom: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;

    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 80px;
  }
`;
