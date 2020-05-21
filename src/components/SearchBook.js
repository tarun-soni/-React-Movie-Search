import React from "react";
import ReactDOM from "react-dom";


function useAsyncHook(searchBook) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState("false");

  React.useEffect(() => {
    async function fetchBookList() {
      try {
        setLoading("true");
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
        );

        const json = await response.json();
        // console.log(json);
        setResult(
          json.items.map(item => {
            console.log(item.volumeInfo.title);
            return item.volumeInfo.title;
          })
        );
      } catch (error) {
        setLoading("null");
      }
    }

    if (searchBook !== "") {
      fetchBookList();
    }
  }, [searchBook]);

  return [result, loading];
}

function SearchBook() {
  //input from user search == hamlet
  const [search, setSearch] = React.useState("");
  //form submit par setQuery = search || basically hamlet but @form submit
  const [query, setQuery] = React.useState("");
  const [result, loading] = useAsyncHook(query);
  return (
    <div className="App">
      <h1>Search for Books on any Topic</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <label>Search : </label>
        <input type="text" onChange={e => setSearch(e.target.value)} />
        <input type="submit" value="search" />
      </form>

      {
      loading === "false" ? (
        <h1>Search for Books</h1>
      ) : loading === "null" ? (
        <h1>No Book Found</h1>
      ) : (
            result.map(item => {
              return <p>Book Title : {item}</p>;
            })
          )
          }
    </div>
  );
}

export default SearchBook;