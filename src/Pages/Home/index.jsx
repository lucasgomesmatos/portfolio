import * as C from './style';
import { TypeAnimation } from 'react-type-animation';
import foto from '../../img/eu.png';
// import linguagens from '../../img/linguagens.png';

export const Home = () => {
  return (
    <C.Container>
      <C.Intro>
        <C.Stack>Front-End Developer</C.Stack>
        <C.Code>
          <TypeAnimation
            sequence={[
              '<h1> Hello Word! </h1>',
              2000,
              '<p> Welcome to my website! </p>',
            ]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: '1rem' }}
          />
          <p>Talk is cheap.</p>
          <p>Show me the code</p>
        </C.Code>
        <C.Description>
          I design and code beautifully simple things, and I love what I do
        </C.Description>
        <C.Chat>
          <a href="mailto:lucasgomesmatodev@gmail.com">LET´S CHAT !</a>
        </C.Chat>
      </C.Intro>
      <C.Photo>
        <img src={foto} alt="Lucas Gomes Matos" />
      </C.Photo>
    </C.Container>
  );
};
