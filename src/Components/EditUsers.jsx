import {FormGroup,FormControl,Input, InputLabel,Button,makeStyles, Typography } from "@material-ui/core";
import react,{useState,useEffect} from "react";
import {editUser,getUsers} from '../Service/api';
import {useHistory,useParams} from 'react-router-dom';
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
const EditUsers=()=>{
    const [user,setUser]=useState(initialValues);
    const {name,section,batch,course}=user;
    const { id }=useParams();
    const classes =useStyle();
    const history=useHistory();

    useEffect(()=>{
        loadUserData();
    }, []);

    const loadUserData = async() =>{
        const response= await getUsers(id);
        setUser(response.data);
    }

    const onValueChange =(e)=>{
       console.log(e.target.value);
       setUser({...user,[e.target.name]:e.target.value });
       
    }

    const editUserDetails = async()=>{
        await editUser(id,user)
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
                <Button variant="contained" onClick={()=>editUserDetails()}color="primary">Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}
export default EditUsers;