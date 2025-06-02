import ListItem from "./ListItem";
import "../styles/newList.css";

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
  const handleArrowClick = (direction, newItem) => {
    if (!showNewList) return;
    const updatedList = list.filter((item) => item.id !== newItem.id);
    setNewList(updatedList);
    if (direction === "left") {
      setList1((prev) => [newItem, ...prev]);
    } else if (direction === "right") {
      setList2((prev) => [newItem, ...prev]);
    }
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
          <ListItem
            key={item.id}
            item={item}
            title={title}
            showNewList={showNewList}
            onArrowClick={handleArrowClick}
            isNewList={true}
          />
        ))}
      </ul>
      {showNewList && (
        <div className='buttons-container fixed-bottom'>
          <button className='cancel-button' onClick={handleCancel}>
            Cancel
          </button>
          <button
            className='update-button'
            onClick={handleUpdate}
            disabled={list.length === 0}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}
