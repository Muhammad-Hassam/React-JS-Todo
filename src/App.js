import './App.css';
import {useState} from "react"
import  React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

const App=()=>{

const [item, setItem]=useState("");
const [todos,setTodos]=useState([])

const handleInput=({target})=>{
  setItem(target.value);
};


const addTodo=()=>{
  if(item===""){
    alert("Kindly Enter Your Todo")
  }
  else{
  let newtodos=[...todos];
  newtodos.push(item);
  setTodos(newtodos);
  setItem("");
  }
};

const deleteItem=(index)=>{
  todos.splice(index,1);
  let newtodos=[...todos];
  setTodos(newtodos);
};

const editItem=(index)=>{
  let editdata=prompt("Enter your data")
  todos.splice(index,1,editdata);
  let newtodos=[...todos];
  setTodos(newtodos);
};

 return(
   <div>
      <Container maxWidth="sm" className='main-div'>

        <Grid container direction="row" justify="center" alignItems="center" item>
          <h1>Todo App</h1>
        </Grid>
        
        <Grid direction="row" container  justify="center" alignItems="center" item>
        <TextField
          placeholder="Hey! Enter Your Todo Here"
          fullWidth
          margin="normal"
          variant="filled"
          onChange={handleInput}
          value={item}
        />
          <Button variant="contained"  color="primary" onClick={addTodo} endIcon={<AddIcon/>}>Todo</Button>
        </Grid>

        <Grid direction="row" container  justify="center" alignItems="center" item>
       
        <List>
        {todos.map((todo,index)=>{
  return(
            <ListItem key={index} className='listItem'>
            <ListItemText primary={todo} className='lists'/>
            <IconButton edge="end" aria-label="delete" onClick={()=>deleteItem(index)}>
            <DeleteIcon />
           </IconButton>
           <IconButton edge="end" aria-label="edit" onClick={()=>editItem(index)}>
            <EditIcon />
           </IconButton>
          </ListItem>
           )
        
            })}

        </List>    
          


        </Grid>

      </Container>

   </div>
 )
 
}

export default App;
