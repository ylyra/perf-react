import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";
import { api } from "../services/api";

type ResultsData = {
  id: number;
  price: number;
  title: string;
};

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ResultsData[]>([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) return;

    try {
      const response = await api.get<ResultsData[]>("products", {
        params: {
          q: search.trim(),
        },
      });

      setResults(response.data);
    } catch {}
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Search</h1>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Buscar</button>
        </form>

        <SearchResults results={results} />
      </main>
    </div>
  );
};

export default Home;
