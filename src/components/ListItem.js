import "../styles/listItem.css";

export default function ListItem({
  item,
  title,
  showNewList,
  onArrowClick,
  isNewList,
}) {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {showNewList && (
        <div className='arrow-buttons'>
          {(isNewList || title === "List 2") && (
            <button
              className='material-symbols-outlined'
              onClick={() => onArrowClick("left", item)}
            >
              west
            </button>
          )}
          {(isNewList || title === "List 1") && (
            <button
              className='material-symbols-outlined'
              onClick={() => onArrowClick("right", item)}
            >
              east
            </button>
          )}
        </div>
      )}
    </li>
  );
}
