import * as C from './style';

export const Footer = () => {
  return (
    <C.Container>
      <p>
        Todos os direitos reservados a Lucas Gomes Matos{' '}
        {new Date().getFullYear()}
      </p>
    </C.Container>
  );
};
