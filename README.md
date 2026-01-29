# usePopcorn 🍿

A small React app for searching movies via the OMDb API and managing a **watched** list with your own rating.

---

## Features

- 🔎 Search movies by title (OMDb API)
- 📃 Display search results
- 🎬 Movie details view (OMDb API by `imdbID`)
- ⭐ Rate a movie (via `StarRating` component)
- ✅ Add a movie to “Watched”
- 🗑 Remove a movie from the watched list
- 💾 Persist “Watched” in `localStorage` (custom hook `useLocaleStorage`)
- ⌨️ Keyboard shortcuts:
  - `Enter` — focus the search input and clear it (via `useKey`)
  - `Escape` — close movie details (via `useKey`)
- 🧠 Counts “how many times you changed the rating” while viewing details (via `useRef`)

---

## Tech Stack

- React (Hooks)
  - `useState`, `useEffect`, `useRef`
- Custom hooks:
  - `useMovies(query)` — fetch movies list based on the search query
  - `useLocaleStorage(initial, key)` — sync state with `localStorage`
  - `useKey(key, handler)` — subscribe to keyboard events
- OMDb API

## Running the project

```bash
npm install
npm start
```
