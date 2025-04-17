import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = (url, headers) =>
    fetch(url, { headers }).then((res) => res.json());

  const {
    data: status,
    isLoading,
    error,
  } = useSWR(url, (url) => fetcher(url, headers));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;

  return <>{status && <p>Status : {status.description}</p>}</>;
}

export default App;
