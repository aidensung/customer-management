import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import DeleteCustomer from "./delete-customer.component";

class Customer extends React.Component {
  render() {
    const { id, image, name, birthday, gender, job } = this.props;
    return (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} alt="profile" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
        <TableCell>
          <DeleteCustomer
            stateRefresh={this.props.stateRefresh}
            id={this.props.id}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default Customer;
