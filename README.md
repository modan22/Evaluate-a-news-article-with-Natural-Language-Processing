# Evaluate-a-news-article-with-Natural-Language-Processing


This project evaluates news articles using Natural Language Processing (NLP) with the MeaningCloud Sentiment Analysis API.

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/danadarneh/news-nlp.git
    cd news-nlp
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root of the project directory.
    - Add your MeaningCloud API key to the `.env` file:
        ```plaintext
        API_KEY=your_meaningcloud_api_key
        ```

4. Run the development server:
    ```bash
    npm run build-dev
    ```

## Dependencies

- Express
- CORS
- Body-parser
- Node-fetch
- Webpack
- MeaningCloud Sentiment Analysis API

## Usage

- Enter the text of a news article into the input field.
- Click the "Analyze" button to receive sentiment analysis results.
