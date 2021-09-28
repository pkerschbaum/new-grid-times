import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainHeaderLeftColumn>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </MainHeaderLeftColumn>
        <Logo />
        <MainHeaderRightColumn>
          <Button>Subscribe</Button>
          <SubscriberQuestion href="">Already a subscriber?</SubscriberQuestion>
        </MainHeaderRightColumn>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const MainHeaderLeftColumn = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
  }
`;

const MainHeaderRightColumn = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    justify-self: end;
    align-self: end;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

const SubscriberQuestion = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-decoration: underline;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 80px;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: revert;
    justify-content: revert;
  }
`;

export default Header;
