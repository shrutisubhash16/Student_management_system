import './App.css';
import {Container, AppBar, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showStudent.js';
import CreateStudent from './components/createStudent/createStudent.js';
import useStyles from './styles.js';
import Head from './components/head/head.js';
import Middle from './components/middle/middle.js';
import Contact from './components/contactus/contactus.js';
import Footer from './components/footer/footer.js';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
       <Head/>
       <Middle/>
       <div className='r'>
         <h1 className='r'>Register</h1>

         <Grow in>
           <Container>
             <Grid container justify='space-between' alignItems='strect'>
               <Grid item xs={12} sm={7}>
                  <AppBar className={classes.appBar} position='static' color='inherit'>
                    <Student />
                  </AppBar>
               </Grid>
               <Grid item xs={12} sm={4}>
                  <AppBar className={classes.appBar} position='static' color='inherit'>
                    <CreateStudent />
                  </AppBar>
               </Grid>
             </Grid>
           </Container>
         </Grow>
       </div>
       <Contact/> 
       <Footer/>
    </div>
  );
}

export default App;
