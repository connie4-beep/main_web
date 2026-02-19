# stock_dashboard
1. Download the Code: Pull the code onto your local machine.
    git clone https://github.com/connie4-beep/stock_dashboard.git
    cd stock_dashboard

2. Create a Virtual Environment: Create an isolated environment so dependencies don't conflict with other projects.
    python -m venv venv

3. Activate the Environment: "Turn on" the environment.
    Mac/Linux: source venv/bin/activate
    Windows: venv\Scripts\activate

4. Install the Requirements: Safely run the installation command inside the isolated environment.
    pip install -r requirements.txt

5. Set up the Environment Variables: Create a `.env` file in the main folder and add your API key:
    GEMINI_API_KEY="your_api_key_here"

6. Run the App: Launch the dashboard!
    python app.py