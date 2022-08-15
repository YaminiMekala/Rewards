import React from "react";
import Table from 'react-bootstrap/Table';

const caliculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points = 2 * (amount - 100) + 50;
  } else if (amount > 50 && amount <= 100) {
    points = amount - 50;
  } else {
    points = 0;
  }
  return points;
}
export const totalEarnedPoints = (transactions) => {
  let points = 0;
  transactions.forEach(element => {
    points += caliculatePoints(element.amount)
  });
  return points;
}
const CustomerTable = ({data}) => {
  return (
    <>
      <div data-testid="customer-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>customerId</th>
              <th>Full Name</th>
              <th>June</th>
              <th>July</th>
              <th>August</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {data?.length &&
              data?.map((item) => (
                <tr key={item.customerId}>
                  <td key={item.customerId}>{item.customerId}</td>
                  <td key={item.fullName}>{item.fullName}</td>
                  {item.transactions.map((item) => (
                    <td key={item.amount}>{item.amount}</td>
                  ))}
                  <td>{totalEarnedPoints(item.transactions)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default CustomerTable;
