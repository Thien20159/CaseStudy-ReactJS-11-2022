import React from 'react'
import studentAPI from '../API/StudentAPI'
import StudentList from './StudentList'
import AddStudent from './AddStudent'
/* eslint-disable prettier/prettier */
export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {},
      studentList: [],
      visible: true,
      getStudentById: [],
      code: true,
      searchStudentList: [],
    }
  }

  fetchStudent = async () => {
    const response = await studentAPI.getAll()
    this.setState({
      studentList: [...response.data],
    })
  }
  componentDidMount() {
    this.fetchStudent()
  }
  deleteStudent = async (id) => {
    await studentAPI.delete(id).then(async () => this.fetchStudent())
  }
  handleChangePageAdd = () => {
    this.setState({ visible: !this.state.visible })
  }
  editStudent = async (id) => {
    // debugger
    const res = await studentAPI.getById(id)
    this.setState({
      getStudentById: res.data,
    })
    // this.handleChangePageAdd()
    console.log(this.state.getStudentById);
  }
  saveStudent = async (student) => {
    let count = 0
    for (let index = 0; index < this.state.studentList.length; index++) {
      if (this.state.studentList[index].id === student.id || student.id === "") {
        count += 1
      }
    }
    if (count >= 1) {
      alert(
        "Can't add students because of duplicate student code or have not entered student code!!",
      )
    } else {
      if (student.stt) {
        await studentAPI.update(student).then(async () => this.fetchStudent())
      } else {
        await studentAPI.create(student).then(async () => this.fetchStudent())
      }
    }
  }
  handleSearch = async (id) => {
    // debugger
    if (id === '' || id === '') {
      alert('Value not found')
    } else {
      const res = await studentAPI.getByName(id)
      // console.log(res.data[0].id);
      const res1 = await studentAPI.getById(res.data[0].stt)
      this.setState({
        studentList: [res1.data],
      })
    }
  }
  render() {
    if (this.state.visible === false) {
      return (
        <>
          <AddStudent
            editStudentToAddPage={this.state.getStudentById}
            studentInfo={this.state.student}
            handleChangePageAdd={this.handleChangePageAdd}
            saveStudent={this.saveStudent}
          />
        </>
      )
    } else {
      return (
        <>
          <StudentList
            code={this.state.code}
            handleSearch={this.handleSearch}
            editStudent={this.editStudent}
            studentList={this.state.studentList}
            deleteStudent={this.deleteStudent}
            handleChangePageAdd={this.handleChangePageAdd}
          />
        </>
      )
    }
  }
}
