import React, { FC } from 'react';
import TermList from './components/term-list/term-list';
import Background from '../../components/design/background/background';
import TopBar from './components/top-bar/top-bar';
import Container from '../../components/design/container/container';

const TermsAndConditions: FC = () => {
  return (
    <Background>
      <TopBar />
      <Container padding marginTop>
        <TermList />
      </Container>
    </Background>
  );
};

export default TermsAndConditions;
