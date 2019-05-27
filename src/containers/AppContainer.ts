import App, { IAppStateProps, IAppDispatchProps } from '../components/App';
import { IState } from '../reducers';
import { addTodo, loadTodos } from '../actions/todosActions';
import { connect } from 'react-redux';

function mapStateToDispatch(state: IState): IAppStateProps {
  return {
    todos: state.todos.todos,
    loadingStatus: state.todos.loadingStatus
  }
}

const mapDispatchToProps: IAppDispatchProps = {
  addTodo,
  loadTodos
}

export default connect(mapStateToDispatch, mapDispatchToProps)(App);