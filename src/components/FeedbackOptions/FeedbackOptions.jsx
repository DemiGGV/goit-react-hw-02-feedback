import { ContainerCSS, Button } from '../MainContainer';

export function FeedbackOptions({ options, incrementField }) {
  return (
    <ContainerCSS>
      {Object.keys(options).map((option, index) => (
        <Button
          key={index}
          type="button"
          name={option}
          onClick={event => incrementField(event)}
        >
          {option}
        </Button>
      ))}
    </ContainerCSS>
  );
}
