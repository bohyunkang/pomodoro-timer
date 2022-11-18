import styled from 'styled-components';
import useQuoteStore from '../hooks/useQuoteStore';

export default function TodayQuote({ close }) {
  const quoteStore = useQuoteStore();

  const { quote } = quoteStore;

  const handleClickReload = () => {
    quoteStore.fetchQuote();
  };

  return (
    <article>
      <Quote>{quote.advice}</Quote>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={handleClickReload}
          color="blue"
        >
          다른 명언 보기
        </Button>
        <Button
          type="button"
          onClick={close}
          color="red"
        >
          돌아가기
        </Button>
      </ButtonWrapper>
    </article>
  );
}

const Quote = styled.h3`
  text-align: center;
  font-size: 1.3em;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 3em;
  right: 5em;
`;

const Button = styled.button`
  padding: 1em 1.5em;
  border-radius: 1em;
  background: linear-gradient(145deg, #cccfd4, #f3f6fb);
  box-shadow: 6px 6px 11px #c1c4c8, -6px -6px 11px #ffffff;
  
  color: ${({ color }) => (color === 'blue' ? '#5081CB' : '#AC445B')};
  font-weight: 600;

  & + & {
    margin-left: 1em;
  }
`;
