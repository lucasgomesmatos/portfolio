import * as C from './index';
import { NavLink } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { VscListSelection } from 'react-icons/vsc';
import { CgMenuMotion } from 'react-icons/cg';
import { useState } from 'react';

export const Header = () => {
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(true);

  return (
    <C.Container>
      <C.NavBar>
        <C.Logo aria-label="logo">
          <NavLink to="/">
            Lucas <span>Gomes Matos</span>
          </NavLink>
        </C.Logo>
        <C.Menu active={active}>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/works">Works</NavLink>
          </li>
          <li>
            <NavLink to="/notes">Notes</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <C.Social>
              <a target="_blank" href="https://github.com/lucasgomesmatos">
                <BsGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lucas-gomes-matos/"
              >
                <AiFillLinkedin />
              </a>
            </C.Social>
          </li>
        </C.Menu>
        <C.Mobile onClick={() => setIcon(!icon)}>
          {icon ? (
            <VscListSelection size={24} onClick={() => setActive(!active)} />
          ) : (
            <CgMenuMotion size={24} onClick={() => setActive(!active)} />
          )}
        </C.Mobile>
      </C.NavBar>
    </C.Container>
  );
};
