import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "./App.css";

function App() {
  const [gong9List, setGong9List] = useState([]);
  const [search, setSearch] = useState("");

  const { data: gong9s, isLoading } = useQuery("gong9s", () =>
    fetch("/api/users").then((res) => res.json())
  );

  useEffect(() => {
    if (gong9s) {
      setGong9List(gong9s);
    }
  }, [gong9s]);

  useEffect(() => {
    if (search) {
      const filtered = gong9List.filter((gong9: any) => {
        return gong9.link.includes(search);
      });
      setGong9List(filtered);
    } else {
      setGong9List(gong9s);
    }
  }, [search]);

  if(isLoading) return (<div>loading...</div>)

  return (
    <>
      <h1>2023. 05. 28 공동구매</h1>
      {/* search input */}
      <div className="search_box">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="링크를 입력하세요!"
        />
      </div>
      {gong9List?.map((gong9: any, index:number) => {
        const end_count = gong9.start_count + gong9.quantity;
        const remains = end_count - gong9.currentCount;
        return (
        <div className="list_box" key={index}>
          {gong9.link}
          <div className="list_box_info">
            <p>시작수량 {gong9.start_count.toLocaleString()}</p>
            <p>남은수량 {remains}</p>
          </div>
        </div>
        )
      }
      )}
    </>
  );
}

export default App;
