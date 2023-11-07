import styled from 'styled-components';
import useQuoteStore from '../hooks/useQuoteStore';

export default function TodayQuote({ close }) {
  const quoteStore = useQuoteStore();

  const { quote } = quoteStore;

  const handleClickReload = () => {
    quoteStore.fetchQuote();
  };

  return (
    <Article>
      <Quote>
        {quote.message}
      </Quote>
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
    </Article>
  );
}
const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Quote = styled.h3`
  font-size: 1.2em;
  line-height: 1.6;
  overflow-y: scroll;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
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
