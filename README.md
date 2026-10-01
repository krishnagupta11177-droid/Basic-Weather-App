# 🌦️ Basic Weather App

A simple weather app built with React. Search any city to see its current weather along with a matching background photo.

**Live demo:** _add your Vercel/Netlify link here_

![Weather App Screenshot](./screenshot.png)

## Features

- Search weather by city name
- Shows temperature, feels-like, humidity, min and max temperature, and a weather description
- Displays a weather-related image fetched from Unsplash
- Error message for cities that can't be found

## Tech Stack

- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [Material UI](https://mui.com/)
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data
- [Unsplash API](https://unsplash.com/developers) for images

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/krishnagupta11177-droid/Basic-Weather-App.git
cd Basic-Weather-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API keys

Create a `.env` file in the project root:

```
VITE_WEATHER_KEY=your_openweathermap_key
VITE_UNSPLASH_KEY=your_unsplash_access_key
```

You can get free keys from:

- OpenWeatherMap: https://openweathermap.org/api
- Unsplash: https://unsplash.com/developers

### 4. Run the app

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── App.jsx          # Root component
├── WeatherApp.jsx   # Combines search box and info card
├── SearchBox.jsx    # City input and weather API call
├── InfoBox.jsx      # Weather card with Unsplash image
└── main.jsx         # Entry point
```

## What I Learned

- Fetching data from APIs with `fetch` and `async/await`
- Managing state and side effects with `useState` and `useEffect`
- Passing data between components using props
- Keeping API keys out of the code with environment variables

## Future Improvements

- 5-day forecast
- Use current location
- Dark mode

## Author

**Krishna** — B.Tech CSE student

GitHub: [@krishnagupta11177-droid](https://github.com/krishnagupta11177-droid)
