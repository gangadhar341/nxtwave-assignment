import React from "react";
import "../App.css";
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
  title,
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
      <label className='header-container'>{`${title} (${list.length})`}</label>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className='new-list-buttons'>
              <button
                className='material-symbols-outlined'
                onClick={() => leftArrowClicked(item)}
              >
                west
              </button>
              <button
                className='material-symbols-outlined'
                onClick={() => rightArrowClicked(item)}
              >
                east
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showNewList && (
        <div className='buttons-container fixed-bottom'>
          <button className='cancel-button' onClick={handleCancel}>
            Cancel
          </button>
          <button className='update-button' onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}
    </div>
  );
}
