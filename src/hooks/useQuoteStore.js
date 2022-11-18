import { quoteStore } from '../stores/QuoteStore';
import useStore from './useStore';

export default function useQuoteStore() {
  return useStore(quoteStore);
}
