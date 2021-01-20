import React, { Component } from "react";
import UserList from "./components/UserList.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser, deleteUser, updateUser } from "./actions/userActions";
import Popup from "./components/Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.state = { username: "" };
    this.state = { emp_dob: "" };
    this.state = { emp_city: "" };
    this.state = { emp_phone: null };
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addNewUser();
    this.togglePopup();
    this.resetState();
  };

  resetState = () => {
    this.setState(() => ({
      username: "",
      emp_city: "",
      emp_dob: "",
      emp_phone: null,
    }));
  };

  handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };

  addNewUser = () => {
    this.props.addUser({
      id:
        Math.max(
          ...this.props.userList.map((user) => {
            return user.id;
          })
        ) + 1,
      name: this.state.username,
      Dob: this.state.emp_dob,
      city: this.state.emp_city,
      phone: this.state.emp_phone,
    });
  };

  deleteUser = (id) => {
    let r = window.confirm("Are you sure you want to delete this Employee?");
    if (r === true) {
      this.props.deleteUser(id);
    }
  };
  editUserSubmit = (id, name, Dob, city, phone) => {
    this.props.updateUser({
      id: id,
      name: name,
      Dob: Dob,
      city: city,
      phone: phone,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">User Directory</div>
              <div className="card-body">
                <div className="text-right">
                  <button
                    className="btn btn-primary"
                    onClick={this.togglePopup}
                  >
                    + Add User
                  </button>
                </div>
                <hr />
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "rgb(43 184 215)" }}>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Dob</th>
                      <th>Phone No</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <UserList
                    deleteUser={this.deleteUser}
                    userList={this.props.userList}
                    editUserSubmit={this.editUserSubmit}
                  />
                </table>
                {this.state.isOpen === true ? (
                  <div>
                    {this.state.isOpen === true && (
                      <Popup
                        content={
                          <>
                            <div className="wrapper">
                              <h1>Create user</h1>
                              <hr />
                              <form onSubmit={this.handleSubmit}>
                                <fieldset>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>Name</label>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        className="form-control"
                                        name="username"
                                        type="text"
                                        required
                                        value={this.state.username || ""}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>DOB</label>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        className="form-control"
                                        name="emp_dob"
                                        required
                                        type="date"
                                        value={this.state.emp_dob || ""}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>City</label>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        className="form-control"
                                        name="emp_city"
                                        required
                                        type="text"
                                        value={this.state.emp_city || ""}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>Phone No.</label>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        className="form-control"
                                        name="emp_phone"
                                        type="number"
                                        required
                                        value={this.state.emp_phone || ""}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <hr />
                                <div className="text-right">
                                  <button
                                    className="btn btn-primary"
                                    type="submit"
                                  >
                                    Save Changes
                                  </button>
                                  <button
                                    className="btn btn-secondary"
                                    onClick={this.togglePopup}
                                  >
                                    Close
                                  </button>
                                </div>
                              </form>
                            </div>
                          </>
                        }
                        handleClose={this.togglePopup}
                      />
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser: addUser,
      deleteUser: deleteUser,
      updateUser: updateUser,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
