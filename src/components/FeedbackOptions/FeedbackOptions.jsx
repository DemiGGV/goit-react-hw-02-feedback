import { ContainerCSS } from '../MainContainer';

export function FeedbackOptions({ incrementField }) {
  return (
    <ContainerCSS>
      <button type="button" onClick={() => incrementField('good')}>
        Good
      </button>
      <button type="button" onClick={() => incrementField('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => incrementField('bad')}>
        Bad
      </button>
    </ContainerCSS>
  );
}
