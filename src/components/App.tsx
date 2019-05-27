import React, { ChangeEvent } from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { ITodoItem, ApiStatus } from '../models';
import Paper from '@material-ui/core/Paper';
import { CircularProgress, Typography } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  wrap: {
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    width: 500
  },
  addButton: {
    marginTop: theme.spacing.unit
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  todoItem: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20
  }
});

class App extends React.Component<AppProps, IAppOwnState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      description: ''
    }
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      description: e.target.value
    });
  }

  addTodo = () => {
    this.props.addTodo(this.state.description);
  }

  render() {
    const { classes, todos, loadingStatus } = this.props;
    
    return (
      <div className={classes.wrap}>
        <div className={classes.content}>

          <div>
            <TextField multiline placeholder="Enter todo message" rows="5" variant="outlined" onChange={this.onChange} value={this.state.description} fullWidth />
            <Button className={classes.addButton} color="primary" variant="contained" fullWidth onClick={this.addTodo}>Add Todo</Button>
          </div>
          
          <Divider className={classes.divider} />

          <div>
            {loadingStatus === ApiStatus.LOADING && <CircularProgress />}

            {loadingStatus === ApiStatus.FAILED && <Typography color="error">Failed to load todos</Typography>}

            {loadingStatus === ApiStatus.LOADED && todos.map(todo => (
              <Paper key={todo.id} className={classes.todoItem}>
                {todo.description}
              </Paper>
            ))}
          </div>
    
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);

export interface IAppStateProps {
  loadingStatus: ApiStatus;
  todos: ITodoItem[];
}

export interface IAppDispatchProps {
  loadTodos: () => void;
  addTodo: (description: string) => void;
}

export interface IAppOwnState {
  description: string;
}

type AppProps = IAppStateProps & IAppDispatchProps & WithStyles<typeof styles>
