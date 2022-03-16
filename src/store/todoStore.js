import { makeAutoObservable } from 'mobx';
import { STATUS_CONTENT } from '../config/constants';

class Todo {
  constructor() {
    makeAutoObservable(this);
  }

  todoArray = [
    {
      content: 'Dùng create-react-app tạo app',
      status: STATUS_CONTENT.NEW,
    },
    {
      content: 'Tạo Home Page, import vào App.js',
      status: STATUS_CONTENT.DOING,
    },
    {
      content: 'Tạo UI như design trong cái link figma',
      status: STATUS_CONTENT.DONE,
    },
  ];

  get TodoArray() {
    return this.todoArray;
  }

  addNewTodo = ({ content, status }) => {
    this.todoArray.push({ content, status });
  };

  changeStatus = (indexItem) => {
    this.todoArray.splice(indexItem, 1, {
      content: this.todoArray[indexItem].content,
      status:
        this.todoArray[indexItem].status === STATUS_CONTENT.NEW
          ? STATUS_CONTENT.DOING
          : STATUS_CONTENT.DONE,
    });
  };

  deleteItem = (indexItem) => {
    this.todoArray.splice(indexItem, 1);
  };

  saveContent = (indexItem, content) => {
    console.log('content', content);
    this.todoArray.splice(indexItem, 1, {
      content: content,
      status: this.todoArray[indexItem].status,
    });
  };
}

const todoStore = new Todo();
export default todoStore;
