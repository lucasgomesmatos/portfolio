import * as C from './style';

export const Footer = () => {
  return (
    <C.Container>
      <p>
        &copy; Todos os direitos reservados | feito com 💚 por Lucas Gomes Matos{' '}
        {new Date().getFullYear()}.
      </p>
    </C.Container>
  );
};
