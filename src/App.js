import { useState, useEffect } from "react";
import "./App.css";
import ListView from "./components/ListView";
import FailedView from "./components/FailedView";
import NewList from "./components/NewList";
import ToastComponent from "./components/ToastComponent";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list1Checked, setList1Checked] = useState(false);
  const [list2Checked, setList2Checked] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showNewList, setShowNewList] = useState(false);
  const [newList, setNewList] = useState([]);
  const [list1Backup, setList1Backup] = useState([]);
  const [list2Backup, setList2Backup] = useState([]);
  const [newLists, setNewLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        setLoading(true);
        const response = await fetch(process.env.REACT_APP_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const newList1 = data.lists?.filter((item) => item.list_number === 1);
        const newList2 = data.lists?.filter((item) => item.list_number === 2);

        setList1(newList1);
        setList2(newList2);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLists();
  }, []);

  const allLists = [list1, list2, ...newLists];

  const handleCreateList = () => {
    if (!list1Checked || !list2Checked) {
      setToastMessage("You should select exactly 2 lists to create a new list");
      setTimeout(() => {
        setToastMessage("");
      }, 5000);
      return;
    }
    setList1Backup(list1);
    setList2Backup(list2);
    setShowNewList(true);
  };

  if (loading) {
    return <div className='loading'></div>;
  }
  if (error) {
    return (
      <div className='error'>
        <FailedView error={error} />
      </div>
    );
  }

  return (
    <div className='App'>
      {toastMessage && (
        <ToastComponent
          toastMessage={toastMessage}
          setToastMessage={setToastMessage}
        />
      )}
      <div className='container'>
        <h1>List Creation</h1>
        <button
          className='createNew-list-button'
          onClick={handleCreateList}
          disabled={showNewList}
        >
          Create a new List
        </button>
      </div>
      <div className='lists-container'>
        {!showNewList &&
          allLists.map((list, idx) => (
            <ListView
              key={idx}
              list={list}
              setList={idx === 0 ? setList1 : idx === 1 ? setList2 : undefined}
              isChecked={
                idx === 0 ? list1Checked : idx === 1 ? list2Checked : false
              }
              setIsChecked={
                idx === 0
                  ? setList1Checked
                  : idx === 1
                  ? setList2Checked
                  : () => {}
              }
              title={`List ${idx + 1}`}
              setNewList={setNewList}
              showNewList={showNewList}
            />
          ))}

        {showNewList && (
          <>
            <ListView
              list={list1}
              setList={setList1}
              isChecked={list1Checked}
              setIsChecked={setList1Checked}
              title='List 1'
              setNewList={setNewList}
              showNewList={showNewList}
            />
            <NewList
              list={newList}
              setList1={setList1}
              setList2={setList2}
              setNewList={setNewList}
              showNewList={showNewList}
              setShowNewList={setShowNewList}
              list1Backup={list1Backup}
              list2Backup={list2Backup}
              setNewLists={setNewLists}
              title={`List ${allLists.length + 1}`}
            />
            <ListView
              list={list2}
              setList={setList2}
              isChecked={list2Checked}
              setIsChecked={setList2Checked}
              title='List 2'
              setNewList={setNewList}
              showNewList={showNewList}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
