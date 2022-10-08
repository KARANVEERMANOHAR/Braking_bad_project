import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./component/ui/Header";
import CharacterGrid from "./component/characters/CharacterGrid";
import Search from "./component/ui/Search";
import Pagination from "./component/ui/Pagination";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1) 
  const [postPerPage] = useState(12)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const getQuery = (value) => {
    setQuery(value);
  };

  const paginate = (data) =>{
    setCurrentPage(data)
  }

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      <CharacterGrid items={currentPost} isLoading={isLoading} />
      <Pagination postPerPage={postPerPage}  totalPosts={items.length} paginate={paginate}/>
    </div>
  );
}

export default App;
