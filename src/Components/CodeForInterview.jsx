import {Box,makeStyles, Typography} from '@material-ui/core';
import Youtube from '../Assets/Images/Student.jpg'
import InstaTele from '../Assets/Images/StudentGroup.jpg'
import Template from '../Assets/Images/0001.jpg'

const useStyle=makeStyles({
    image:{
        width:'90%',
        height:'600px',
    },
    component:{
        margin:'50px'
    }
})
const CodeForInterview=() => {
    const classes=useStyle();
    return(
       <Box className={classes.component}>
           {/* <Typography variant="h4" style={{marginBottom:50},{alignItems: 'center'}}>Students Profile Manager</Typography> */}
        <Box style={{display:'flex'}}>
            {/* <img className={classes.image} src={Youtube}/> */}
            <img className={classes.image} src={Template}/>
         </Box>
        </Box>  
    )
}
export default CodeForInterview;