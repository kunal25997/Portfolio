import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { GiLotusFlower } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Image } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignment: "center", color: "white" }}>
          <Image src="/images/admin-ajax.png" width="100px" height="60px"/>
        </a>
      </Link>
    </Div1>
    <Div2>
        <li>
            <Link href="#projects">
                <NavLink>Projects</NavLink>
            </Link>
        </li>
        <li>
            <Link href="#tech">
                <NavLink>Technologies</NavLink>
            </Link>
        </li>
        <li>
            <Link href="#about">
                <NavLink>About</NavLink>
            </Link>
        </li>
    </Div2>
    <Div3>
        <SocialIcons href="https://github.com/kunal25997">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/kunal-sailor-3a7372170/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/kunal.sailor">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
