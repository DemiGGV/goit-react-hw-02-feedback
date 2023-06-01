import { Title } from '../MainContainer';

export function Section({ title, children }) {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
}
