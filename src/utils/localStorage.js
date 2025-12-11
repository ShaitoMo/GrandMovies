const KEY = "recent_movies";

export function loadRecentMovies() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecentMovie(movie) {
  try {
  
    const list = loadRecentMovies();


    const filtered = list.filter((m) => m.imdbID !== movie.imdbID);


    const updated = [movie, ...filtered];


    const limited = updated.slice(0, 10);

 
    localStorage.setItem(KEY, JSON.stringify(limited));
  } catch {}
}
