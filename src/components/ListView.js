import React from "react";

export default function ListView({
  list = [],
  setList1,
  setList2,
  isChecked,
  setIsChecked,
  title,
  setNewList,
  showNewList,
}) {
  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const rightArrowClicked = (newItem) => {
    if (!showNewList) return;
    const updatedList = list.filter((item) => item.id !== newItem.id);
    setList1(updatedList);
    setNewList((prev) => [...prev, newItem]);
    return;
  };
  const leftArrowClicked = (newItem) => {
    if (!showNewList) return;
    const updatedList = list.filter((item) => item.id !== newItem.id);
    setList2(updatedList);
    setNewList((prev) => [...prev, newItem]);
    return;
  };

  return (
    <div className='list-view'>
      <div className='header-container'>
        {!showNewList && (
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckChange}
            id={title}
          />
        )}
        <label htmlFor={title}>
          {title}
          {showNewList && ` (${list.length})`}
        </label>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {showNewList && (
              <div className='arrow-buttons'>
                {title === "List 1" && (
                  <button
                    className='material-symbols-outlined'
                    onClick={() => rightArrowClicked(item)}
                  >
                    east
                  </button>
                )}
                {title === "List 2" && (
                  <button
                    className='material-symbols-outlined'
                    onClick={() => leftArrowClicked(item)}
                  >
                    west
                  </button>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
