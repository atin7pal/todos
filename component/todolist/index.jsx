import React, { PureComponent } from "react";
import Loader from "../loaders";
import { GetTodoList } from "../../services/todolist";

export default class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: []
    };
  }

  componentDidMount() {
    GetTodoList()
      .then((res) => {
        console.log(res);
        this.setState({ data: res });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    const showList = !isLoading && data.length !== 0;
    return (
      <div className="todo-list">
        <h1>Todos</h1>
        {showList && (
          <ul>
            {data.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
