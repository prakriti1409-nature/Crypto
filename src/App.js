import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCryptos, updateCrypto } from './redux/slices/cryptoSlice';
import { simulateCryptoUpdates } from './utils/fakeWebSocket';
import sampleCryptos from './data/sampleCryptos';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();
  const cryptos = useSelector(state => state.crypto.cryptos);

  useEffect(() => {
    dispatch(setCryptos(sampleCryptos));
  }, [dispatch]);

  useEffect(() => {
    if (cryptos.length) {
      simulateCryptoUpdates(cryptos, dispatch, updateCrypto);
    }
  }, [cryptos, dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
