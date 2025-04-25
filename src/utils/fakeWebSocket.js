const randomize = (value, variance = 0.05) => {
    const factor = 1 + (Math.random() * variance * 2 - variance);
    return parseFloat((value * factor).toFixed(2));
  };
  
  export const simulateCryptoUpdates = (cryptos, dispatch, updateCrypto) => {
    setInterval(() => {
      const randomCrypto = cryptos[Math.floor(Math.random() * cryptos.length)];
      const updated = {
        ...randomCrypto,
        price: randomize(randomCrypto.price),
        change1h: randomize(randomCrypto.change1h),
        change24h: randomize(randomCrypto.change24h),
        change7d: randomize(randomCrypto.change7d),
        volume24h: randomize(randomCrypto.volume24h, 0.1),
      };
      dispatch(updateCrypto(updated));
    }, 1500); // every 1.5 sec
  };
  