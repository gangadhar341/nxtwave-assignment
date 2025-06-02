import ListItem from "./ListItem";

export default function ListView({
  list = [],
  setList,
  isChecked,
  setIsChecked,
  title,
  setNewList,
  showNewList,
}) {
  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleArrowClick = (direction, item) => {
    if (!showNewList) return;
    const updatedList = list.filter((i) => i.id !== item.id);
    setList && setList(updatedList);
    setNewList((prev) => [...prev, item]);
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
          <ListItem
            key={item.id}
            item={item}
            title={title}
            showNewList={showNewList}
            onArrowClick={handleArrowClick}
          />
        ))}
      </ul>
    </div>
  );
}
