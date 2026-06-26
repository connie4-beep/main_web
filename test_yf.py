import yfinance as yf
tickers = ['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'META', 'AMD', 'JPM', 'V', 'MA', 'BAC', 'WFC', 'GS', 'JNJ', 'UNH', 'LLY', 'ABBV', 'MRK', 'PFE', 'AMZN', 'TSLA', 'WMT', 'HD', 'COST', 'MCD']
for t in tickers:
    try:
        df = yf.Ticker(t).history(period='1d', interval='5m')
        if not df.empty:
            print(f"{t}: {df.index[-1]}")
        else:
            print(f"{t}: EMPTY")
    except Exception as e:
        print(f"{t}: ERROR {e}")
