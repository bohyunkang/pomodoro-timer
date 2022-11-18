import { useEffect } from 'react';
import useQuoteStore from '../hooks/useQuoteStore';

export default function useQuote() {
  const quoteStore = useQuoteStore();

  useEffect(() => {
    quoteStore.fetchQuote();
  }, []);

  return null;
}
