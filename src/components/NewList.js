import React from "react";

export default function NewList({
  list = [],
  setList1,
  setList2,
  setNewList,
  showNewList,
  setShowNewList,
  list1Backup,
  list2Backup,
  setNewLists,
}) {
  const leftArrowClicked = (newItem) => {
    if (!showNewList) return;
    const updatedList = list.filter((item) => item.id !== newItem.id);
    setNewList(updatedList);
    setList1((prev) => [newItem, ...prev]);
    return;
  };
  const rightArrowClicked = (newItem) => {
    if (!showNewList) return;
    const updatedList = list.filter((item) => item.id !== newItem.id);
    setNewList(updatedList);
    setList2((prev) => [newItem, ...prev]);
    return;
  };

  const handleUpdate = () => {
    if (list.length > 0) {
      setNewLists((prev) => [...prev, list]);
    }
    setNewList([]);
    setShowNewList(false);
  };
  const handleCancel = () => {
    setNewList([]);
    setList1(list1Backup);
    setList2(list2Backup);
    setShowNewList(false);
  };
  return (
    <div className='list-view'>
      {showNewList && (
        <div className='buttons-container'>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <div>
              <button onClick={() => leftArrowClicked(item)}>{"<"}</button>
              <button onClick={() => rightArrowClicked(item)}>{">"}</button>
            </div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
