import React, { Component } from "react";

export default class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
  }
  deleteUser = () => {
    const { id } = this.props.user;
    this.props.deleteUser(id);
  };
  editUser = () => {
    this.setState((prevState) => ({
      isEdit: !prevState.isEdit,
    }));
  };
  editUserSubmit = () => {
    this.setState((prevState) => ({
      isEdit: !prevState.isEdit,
    }));
    this.props.editUserSubmit(
      this.props.user.id,
      this.nameInput.value,
      this.dobInput.value,
      this.cityInput.value,
      this.phoneInput.value
    );
  };
  render() {
    const { name, Dob, city, phone } = this.props.user;
    return this.state.isEdit === true ? (
      <tr className="bg-primary" key={this.props.index}>
        <td></td>
        <td>
          <input
            ref={(nameInput) => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            ref={(cityInput) => (this.cityInput = cityInput)}
            defaultValue={city}
          />
        </td>
        <td>
          <input
            type="date"
            defaultValue={Dob}
            ref={(dobInput) => (this.dobInput = dobInput)}
          />
        </td>
        <td>
          <input
            type="number"
            ref={(phoneInput) => (this.phoneInput = phoneInput)}
            defaultValue={phone}
          />
        </td>
        <td>
          <i className="fas fa-save" onClick={this.editUserSubmit} />
          <i className="fas fa-trash" style={{ paddingLeft: "15px" }} />
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{this.props.index + 1}</td>
        <td>{name}</td>
        <td>{city}</td>
        <td>{Dob}</td>
        <td>{phone}</td>
        <td>
          <i className="fas fa-edit" onClick={this.editUser} />
          <i
            className="fas fa-trash"
            onClick={this.deleteUser}
            style={{ paddingLeft: "15px" }}
          />
        </td>
      </tr>
    );
  }
}
