const key="recent_movies";

export function loadRecentMovies() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
export function saveRecentMovies(movies) {
  try {
    const raw = JSON.stringify(movies);
    localStorage.setItem(KEY, raw);
    } catch {
 
    }
}