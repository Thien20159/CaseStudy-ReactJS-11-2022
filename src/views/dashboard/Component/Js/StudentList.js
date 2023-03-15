import React from 'react'
import '../Css/styleStudentList.css'
export default class StudentList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }
  editStudent = (stt) => {
    // eslint-disable-next-line react/prop-types
    this.props.editStudent(stt)
    // eslint-disable-next-line react/prop-types
  }
  deleteStudent = (stt) => {
    // eslint-disable-next-line react/prop-types
    this.props.deleteStudent(stt)
  }
  handleChangePageAdd = () => {
    // eslint-disable-next-line react/prop-types
    this.props.handleChangePageAdd()
  }
  handleSearch = () => {
    // eslint-disable-next-line react/prop-types
    this.props.handleSearch(this.state.search)
  }
  handleChangeSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <>
        <div>
          <div>
            <p id="pStudentList" className="fw-bold fs-1 ">
              STUDENT LIST
            </p>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter student code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="search"
              value={this.state.search}
              onChange={this.handleChangeSearch}
              maxLength="9"
            />
            <button
              className="btn btn-outline-secondary text-primary"
              type="button"
              onClick={this.handleSearch}
            >
              Search
            </button>
            <button
              onClick={this.handleChangePageAdd}
              id="btnAdd"
              className="btn btn-outline-success"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr className="bg-info text-light">
                <th scope="col" className="border">
                  Student Code
                </th>
                <th scope="col" className="border ">
                  Name
                </th>
                <th scope="col" className="border ">
                  Class
                </th>
                <th scope="col" className="border ">
                  Address
                </th>
                <th scope="col" className="border ">
                  Phone Number
                </th>
                <th scope="col" className="border ">
                  Email
                </th>
                <th scope="col" className="border ">
                  Customize
                </th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line react/prop-types
                this.props.studentList.map((item) => {
                  // eslint-disable-next-line react/prop-types
                  return (
                    <tr key={item.stt}>
                      <td className="border col-sm">{item.id}</td>
                      <th className="border col-sm">{item.Name}</th>
                      <th className="border col-sm">{item.Class}</th>
                      <th className="border col-sm">{item.Address}</th>
                      <th className="border col-sm">{item.PhoneNumber}</th>
                      <th className="border col-sm">{item.Email}</th>
                      <td className="border d-flex p-2">
                        <button
                          className="btn btn-outline-primary "
                          onClick={() => this.editStudent(item.stt)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => this.deleteStudent(item.stt)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
