import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'; 
import axios from 'axios';


export default function ShowStudent() {

  const [studentsList, setStudentList] = React.useState([])

  const deleteStudent = (id) =>{
    axios.delete(`http://localhost:5000/students/${id}`).then( () => {
      window.location.reload(false);
    })
  }

  React.useEffect( () => {
    axios.get('http://localhost:5000/students').then((allStudents) => {
      setStudentList(allStudents.data);
    })
  }, [])

  return (
    <>
    <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Registration Number</TableCell>
            <TableCell align="center">Grade</TableCell>
            <TableCell align="center">Section</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="center">{student.regNo}</TableCell>
              <TableCell align="center">{student.grade}</TableCell>
              <TableCell align="center">{student.section}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" size="small" onClick= { () => deleteStudent(student._id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
