import yfinance as yf
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route('/api/quote')
def quote():
    ticker = request.args.get('ticker')
    if not ticker:
        return jsonify({'error': 'Missing ticker'}), 400
    
    try:
        stock = yf.Ticker(ticker)
        # Fast info gets current price details without downloading large histories
        info = stock.fast_info
        
        current_price = info.last_price
        prev_close = info.previous_close
        
        change = current_price - prev_close
        change_percent = (change / prev_close) * 100 if prev_close else 0
        
        return jsonify({
            'price': round(current_price, 2),
            'change': round(change, 2),
            'changePercent': round(change_percent, 2)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/history')
def history():
    ticker = request.args.get('ticker')
    timeframe = request.args.get('timeframe', '1d')
    if not ticker:
        return jsonify({'error': 'Missing ticker'}), 400
        
    try:
        stock = yf.Ticker(ticker)
        
        # Map timeframe to yfinance period/interval
        if timeframe == '1d':
            df = stock.history(period='1d', interval='5m')
        elif timeframe == '1w':
            df = stock.history(period='5d', interval='15m')
        elif timeframe == '1m':
            df = stock.history(period='1mo', interval='1d')
        elif timeframe == '3m':
            df = stock.history(period='3mo', interval='1d')
        elif timeframe == '1y':
            df = stock.history(period='1y', interval='1d')
        elif timeframe == '5y':
            df = stock.history(period='5y', interval='1d')
        else:
            df = stock.history(period='1d', interval='5m')
            
        df.reset_index(inplace=True)
        date_col = 'Datetime' if 'Datetime' in df.columns else 'Date'
        
        # Convert index to ISO strings for Plotly
        x = [d.isoformat() for d in df[date_col].tolist()]
        
        return jsonify({
            'x': x,
            'open': df['Open'].tolist(),
            'high': df['High'].tolist(),
            'low': df['Low'].tolist(),
            'close': df['Close'].tolist()
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Run on port 5000
    app.run(port=5000, debug=True)
