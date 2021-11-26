import {FormGroup,FormControl,Input, InputLabel,Button,makeStyles, Typography } from "@material-ui/core";
import react,{useState} from "react";
import {addUser} from '../Service/api';
import {useHistory} from 'react-router-dom';
const useStyle=makeStyles({
    container: {
        width:'50%', 
        margin:'5% 0 0 25%', 
        '& > *':{
            marginTop:20
        }
    }
})

const initialValues={
    name:'',
    id:'',
    section:'',
    batch:'',
    course:''
}
const AddUsers=()=>{
    const [user,setUser]=useState(initialValues);
    const {name,id,section,batch,course}=user;
    const classes =useStyle();
    const history=useHistory();

    const onValueChange =(e)=>{
       console.log(e.target.value);
       setUser({...user,[e.target.name]:e.target.value });
       
    }

    const addUserDetails = async()=>{
        await addUser(user)
        history.push('./all');
    }

    return(
        <FormGroup className={classes.container}>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input  onChange={(e)=>onValueChange(e)} name='id'  value={id} />
            </FormControl>
            <FormControl>
                <InputLabel>Section</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='section'  value={section} />
            </FormControl>
            <FormControl>
                <InputLabel>Batch</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='batch'  value={batch} />
            </FormControl>
            <FormControl>
                <InputLabel>Course</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='course'  value={course} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}color="primary">Add User</Button>
            </FormControl>
        </FormGroup>
    )
}
export default AddUsers;