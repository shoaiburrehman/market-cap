
let socket: WebSocket | null = null;

export const subscribeToMarketData = (callback : (price: number) => void) => {
  socket = new WebSocket('wss://stream.binance.com:443/ws/btcusdt@aggTrade');

  socket.onopen = () => {
    console.log('WebSocket connected');
  };

  socket.onmessage = (event: any) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    callback(price);
  };

  socket.onclose = () => {
    console.log('WebSocket disconnected');
  };

  socket.onerror = (error: any) => {
    console.error('WebSocket error', error);
  };

  return () => {
    socket?.close();
  };
};
