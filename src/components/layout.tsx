import React, { FC, PropsWithChildren } from 'react';

import {
  ButtonGroup,
  Container,
  Flex,
  Spacer,
  Stack,
  Heading,
} from '@chakra-ui/react';
import useIsClient from '../hooks/use-is-client';
import ToggleColorMode from './toggle-mode';

import { Link as GatsbyLink } from 'gatsby';

import CyberButton from './cyber-button';

import CyberpunkLogo from './cyberpunk-logo';

import Nav, {
  NavItem,
  NavLink,
  NavSub,
  NavSubList,
  NavSubListCols,
  NavSubListItem,
  NavSubListLink,
} from './nav';

import HeaderTop from './header-top';
import { MDXProvider } from '@mdx-js/react';

const shortcodes = { Heading };

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isClient, key } = useIsClient();

  return (
    <MDXProvider components={shortcodes}>
      <HeaderTop>
        <CyberpunkLogo to='/' />

        <Spacer />

        <Stack direction='row' spacing={3.5} marginTop={9} position='relative'>
          {isClient && <ToggleColorMode key={key} />}
          {/* <ButtonGroup>
            <CyberButton as={GatsbyLink} to='/gallery' partiallyActive>
              Галерея
            </CyberButton>
          </ButtonGroup> */}
          <Nav>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/gallery/'>Галерея</NavLink>
            <NavLink to='/attractions/'>Достопримечательности</NavLink>
            <NavItem>
              <NavSub>SubList</NavSub>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListLink to='/'>Home Page</NavSubListLink>
                </NavSubListItem>

                <NavSubListItem>
                  <NavSubListLink to='#'>Other link 1</NavSubListLink>
                </NavSubListItem>

                <NavSubListItem>
                  <NavSubListLink to='#'>Other link 2</NavSubListLink>
                </NavSubListItem>
              </NavSubList>
            </NavItem>

            <NavItem>
              <NavSub>SubList</NavSub>
              <NavSubListCols>
                <NavSubListItem>
                  <NavSubListLink to='/'>Home Page</NavSubListLink>
                </NavSubListItem>

                <NavSubListItem>
                  <NavSubListLink to='#'>Other link 1</NavSubListLink>
                </NavSubListItem>

                <NavSubListItem>
                  <NavSubListLink to='#'>Other link 2</NavSubListLink>
                </NavSubListItem>

                <NavSubListItem>
                  <NavSubListLink to='#'>Other link 3</NavSubListLink>
                </NavSubListItem>
              </NavSubListCols>
            </NavItem>
          </Nav>
        </Stack>
      </HeaderTop>

      <Container>{children}</Container>
    </MDXProvider>
  );
};

export default Layout;
