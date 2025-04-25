import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';

export default function CryptoTable() {
  const cryptos = useSelector(state => state.crypto.cryptos);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, idx) => (
            <CryptoRow key={crypto.symbol} crypto={crypto} idx={idx + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
