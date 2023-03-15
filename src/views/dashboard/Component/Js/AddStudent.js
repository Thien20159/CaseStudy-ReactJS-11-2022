/* eslint-disable react/prop-types */
import React from 'react'
import '../Css/styleAddStudent.css'
export default class AddStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      Name: '',
      Class: '',
      Address: '',
      PhoneNumber: '',
      Email: '',
      changeByInput: false,
      emailError: '',
      phoneNumberError: '',
      idError: '',
      testArray: [],
    }
  }
  handleChangeId = (e) => {
    if (!this.isValidId(e.target.value)) {
      this.setState({
        idError: 'ID is invalid',
      })
    } else {
      this.setState({
        idError: null,
      })
    }
    this.setState({
      [e.target.name]: e.target.value,
      // changeByInput: true,
    })
  }
  handleChangePhoneNumber = (e) => {
    if (!this.isValidPhoneNumber(e.target.value)) {
      this.setState({
        phoneNumberError: 'Phone Number is invalid',
      })
    } else {
      this.setState({
        phoneNumberError: null,
      })
    }
    this.setState({
      [e.target.name]: e.target.value,
      // changeByInput: true,
    })
  }
  handleChangeEmail = (e) => {
    if (!this.isValidEmail(e.target.value)) {
      this.setState({
        emailError: 'Email is invalid',
      })
    } else {
      this.setState({
        emailError: null,
      })
    }
    this.setState({
      [e.target.name]: e.target.value,
      // changeByInput: true,
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      // changeByInput: true,
    })
  }
  handleChangePageAdd = () => {
    this.props.handleChangePageAdd()
    this.props.saveStudent(this.state)
  }
  // editStudentToAddPage = () => {
  // console.log(this.props.editStudentToAddPage.id)
  // this.setState({
  //   testArray: this.props.editStudentToAddPage.id,
  // })
  // console.log(this.state.testArray)
  // console.log(typeof this.props.editStudentToAddPage)
  // console.log(this.props.editStudentToAddPage)
  // }
  isValidPhoneNumber = (phoneNumber) => {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phoneNumber)
  }
  isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
    // return /^DTH/.test(email)
  }
  isValidId = (id) => {
    return /^DTH\d\d\d\d\d\d/.test(id)
  }
  render() {
    return (
      <form id="formAddStudent" action="/AddStudent.php">
        <h1>{this.props.editStudentToAddPage}</h1>
        <h1>Student Information</h1>
        <div className="form-group d-flex flex-row">
          <div className="w-25">
            <label form="studentCode" className="fs-5">
              Student Code
            </label>
            <input
              name="id"
              value={this.state.id}
              onChange={this.handleChangeId}
              type="text"
              className="form-control"
              id="studentCode"
              placeholder="Enter Student Code"
              required
              maxLength="9"
            />
            {
              // eslint-disable-next-line no-undef
              this.state.idError && <p className="text-danger">{this.state.idError}</p>
            }
          </div>
          <div className="mx-5 w-50">
            <label form="name" className="fs-5">
              Full Name
            </label>
            <input
              name="Name"
              value={this.state.Name}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="w-25">
            <label form="class" className="fs-5">
              Class
            </label>
            <input
              name="Class"
              value={this.state.Class}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="class"
              placeholder="Enter class"
              required
            />
          </div>
        </div>
        {/* Address */}
        <div className="my-4">
          <label form="address" className="fs-5">
            Address
          </label>
          <input
            name="Address"
            value={this.state.Address}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            required
          />
        </div>
        {/* Phone Number & Email */}
        <div className="my-4">
          <div className="phoneNumber">
            <label form="phoneNumber" className="fs-5">
              Phone Number
            </label>
            <input
              name="PhoneNumber"
              value={this.state.PhoneNumber}
              onChange={this.handleChangePhoneNumber}
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              aria-label="phoneNumber"
              required
            />
            {
              // eslint-disable-next-line no-undef
              this.state.phoneNumberError && (
                <p className="text-danger">{this.state.phoneNumberError}</p>
              )
            }
          </div>
          <div className="email">
            <label form="email" className="fs-5">
              Email
            </label>
            <input
              name="Email"
              value={this.state.Email}
              onChange={this.handleChangeEmail}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              required
            />
            {
              // eslint-disable-next-line no-undef
              this.state.emailError && <p className="text-danger">{this.state.emailError}</p>
            }
          </div>
          <button
            type="submit"
            className="submitButton fs-5 my-4 btn btn-primary"
            onClick={this.handleChangePageAdd}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}
