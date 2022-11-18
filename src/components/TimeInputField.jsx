import styled from 'styled-components';

export default function TimeInputField({
  title, name, minute, second, onChange,
}) {
  const handleChangeMinute = (event) => {
    const { value } = event.target;

    if (value < 0 || value > 1440) {
      return;
    }

    onChange({ name, minute: Number(value), second });
  };

  const handleChangeSecond = (event) => {
    const { value } = event.target;

    if (value < 0 || value > 59) {
      return;
    }

    onChange({ name, minute, second: Number(value) });
  };

  return (
    <>
      <Title>{title}</Title>
      <Field>
        <Label htmlFor={`input-${name}-minute`}>
          분
        </Label>
        <Input
          id={`input-${name}-minute`}
          type="number"
          name="minute"
          value={minute}
          onChange={handleChangeMinute}
        />
      </Field>
      <Field>
        <Label htmlFor={`input-${name}-second`}>
          초
        </Label>
        <Input
          id={`input-${name}-second`}
          type="number"
          name="second"
          value={second}
          onChange={handleChangeSecond}
        />
      </Field>
    </>
  );
}

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0.3em 0 0.1em 0;
`;

const Field = styled.div`
  font-size: 1.2em;
`;

const Label = styled.label`
  margin-right: 0.3em;
`;

const Input = styled.input`
  border: none;
  border-radius: 0.5em;
  background: #E3E6EB;
  box-shadow: inset 4px 4px 9px #c1c4c8, inset -4px -4px 9px #ffffff;

  padding: 0.3em;
  text-align: center;
  font-size: 0.8em;

  margin-top: 0.5em;
`;
