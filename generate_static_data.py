import yfinance as yf
import json

MARKET_SECTORS = {
    'Technology': ['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'META', 'AMD'],
    'Finance': ['JPM', 'V', 'MA', 'BAC', 'WFC', 'GS'],
    'Healthcare': ['JNJ', 'UNH', 'LLY', 'ABBV', 'MRK', 'PFE'],
    'Consumer': ['AMZN', 'TSLA', 'WMT', 'HD', 'COST', 'MCD'],
}

# Each timeframe maps to a yfinance (period, interval) pair
TIMEFRAMES = {
    '1d':  ('1d',  '5m'),     # Intraday 5-min bars
    '1w':  ('5d',  '30m'),    # 5 days of 30-min bars
    '1m':  ('1mo', '1d'),     # 1 month daily
    '3m':  ('3mo', '1d'),     # 3 months daily
    '1y':  ('1y',  '1d'),     # 1 year daily
    '5y':  ('5y',  '1wk'),    # 5 years weekly
}

data_export = {}

all_tickers = []
for tickers in MARKET_SECTORS.values():
    all_tickers.extend(tickers)

total = len(all_tickers)
for idx, ticker in enumerate(all_tickers, 1):
    print(f"[{idx}/{total}] Fetching {ticker}...")
    try:
        stock = yf.Ticker(ticker)

        # --- Live quote ---
        info = stock.fast_info
        last_price = float(info.last_price)
        prev_close = float(info.previous_close)

        ticker_data = {
            'live': {
                'price': round(last_price, 2),
                'change': round(last_price - prev_close, 2) if prev_close else 0,
                'changePercent': round((last_price - prev_close) / prev_close * 100, 2) if prev_close else 0
            },
            'timeframes': {}
        }

        # --- Historical data for each timeframe ---
        for tf_key, (period, interval) in TIMEFRAMES.items():
            try:
                df = stock.history(period=period, interval=interval)
                if df.empty:
                    print(f"  ⚠ No data for {ticker} @ {tf_key}")
                    continue

                df.reset_index(inplace=True)
                date_col = 'Datetime' if 'Datetime' in df.columns else 'Date'

                # Format dates — use full ISO for intraday, date-only for daily+
                if interval in ('5m', '15m', '30m', '1h'):
                    x = [d.isoformat() for d in df[date_col].tolist()]
                else:
                    x = [d.isoformat().split('T')[0] for d in df[date_col].tolist()]

                ticker_data['timeframes'][tf_key] = {
                    'x': x,
                    'open': [round(v, 2) for v in df['Open'].tolist()],
                    'high': [round(v, 2) for v in df['High'].tolist()],
                    'low': [round(v, 2) for v in df['Low'].tolist()],
                    'close': [round(v, 2) for v in df['Close'].tolist()],
                }
                print(f"  ✓ {tf_key}: {len(x)} bars")
            except Exception as e:
                print(f"  ✗ {tf_key} failed: {e}")

        data_export[ticker] = ticker_data

    except Exception as e:
        print(f"  ✗ Failed entirely: {e}")

with open('stock_data.json', 'w') as f:
    json.dump(data_export, f)

print(f"\n✅ Saved {len(data_export)} tickers to stock_data.json")
