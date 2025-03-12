
# Number Facts API

This API provides interesting facts, stories, or statements about numbers. It uses Google’s Gemini API to generate content dynamically.

## Features

- Retrieve a fun fact, story, or statement about a specific number.
- Returns a concise and informative response based on the provided number.

## Endpoints

### 1. Get a Fact by Number
- **Endpoint:** `/fact/:number`
- **Method:** `GET`
- **Description:** Returns a fun fact, story, or statement about the specified number.

#### Example Request:
```bash
GET http://localhost:3000/fact/42
```

#### Example Response:
```json
{
  "number": "42",
  "fact": "42 is known as the 'Answer to the Ultimate Question of Life, the Universe, and Everything' in Douglas Adams' book series."
}
```

#### Error Responses:

- **400: Invalid number parameter**
```json
{
  "error": "Invalid number parameter"
}
```

- **500: Failed to fetch fact**
```json
{
  "error": "Failed to fetch fact"
}
```

## Setup and Installation

### Prerequisites

- **Node.js** (v14 or above)
- **NPM** (v6 or above)
- Google API key for accessing the Gemini model (set as `GOOGLE_API_KEY` in the `.env` file).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/abdelhakim-sahifa/numbersFunFactApi.git
   ```

2. Navigate into the project directory:
   ```bash
   cd number-facts-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up your Google API Key:
   - Create a `.env` file in the root directory and add your `GOOGLE_API_KEY`:
     ```env
     GOOGLE_API_KEY=your-google-api-key
     ```

5. Start the server:
   ```bash
   npm start
   ```

   The server will be running on [http://localhost:3000](http://localhost:3000).

## Usage

Once the server is running, you can send requests to the `/fact/:number` endpoint. Replace `:number` with the number you want a fact about.

#### Example Request:
```bash
GET http://localhost:3000/fact/7
```

#### Example Response:
```json
{
  "number": "7",
  "fact": "7 is a popular number in many cultures and is often considered lucky."
}
```

## Troubleshooting

- **Invalid number parameter**: Ensure you are passing a valid number in the request URL.
- **Failed to fetch fact**: Check your API key and network connectivity.


