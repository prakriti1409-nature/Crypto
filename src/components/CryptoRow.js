export default function CryptoRow({ crypto, idx }) {
    const formatNumber = (num) => Intl.NumberFormat().format(num);
  
    const getColor = (value) => value >= 0 ? 'text-green-500' : 'text-red-500';
  
    return (
      <tr>
        <td>{idx}</td>
        <td><img src={crypto.logo} alt={crypto.name} className="w-6 h-6 mx-auto" /></td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>${crypto.price.toFixed(2)}</td>
        <td className={getColor(crypto.change1h)}>{crypto.change1h.toFixed(2)}%</td>
        <td className={getColor(crypto.change24h)}>{crypto.change24h.toFixed(2)}%</td>
        <td className={getColor(crypto.change7d)}>{crypto.change7d.toFixed(2)}%</td>
        <td>${formatNumber(crypto.marketCap)}</td>
        <td>${formatNumber(crypto.volume24h)}</td>
        <td>{crypto.circulatingSupply}M</td>
        <td>{crypto.maxSupply ? `${crypto.maxSupply}M` : '∞'}</td>
        <td><img src={crypto.chart} alt="7d Chart" className="w-20 h-10 mx-auto" /></td>
      </tr>
    );
  }
  