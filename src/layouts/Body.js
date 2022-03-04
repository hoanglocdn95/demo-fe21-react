import TodoItem from '../components/TodoItem';

function Body({ todoArray, changeStatus, deleteItem }) {
  const renderItem = () => {
    return todoArray.map((item, index) => {
      return (
        <TodoItem
          key={index}
          {...item}
          changeStatus={() => changeStatus(index)}
          deleteItem={() => deleteItem(index)}
        />
      );
    });
  };

  return <div className="body">{renderItem()}</div>;
}

export default Body;
