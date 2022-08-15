/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from '@testing-library/react';
import CustomerTable, { totalEarnedPoints } from './CustomerTable';

let container = null;
const data = [{
    customerId: 1,
    fullName: "Person A",
    transactions: [
        {
            transactionDate: "06-01-2022",
            amount: 120,
            result: 90,
        },
        {
            transactionDate: "07-01-2022",
            amount: 150,
            result: 150,
        },
        {
            transactionDate: "08-01-2022",
            amount: 50,
            result: 0,
        },
        {
            transactionDate: "08-01-2022",
            amount: 100,
            result: 50,
        },
    ],
}]
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Should render base component", () => {
    render(<CustomerTable />, container);
    const previewContainer = document.querySelector("[data-testid=customer-table]");
    expect(previewContainer).not.toBeNull;
});

it("Check if customer name renders correct", () => {
    render(<CustomerTable data={{ data }} />, container)
    const customerName = document.querySelector("[data-testid=customer-name]");
    expect(customerName).not.toBeNull;

})

it("check if the rewards points are correct", () => {
    render(<CustomerTable data={{ data }} />, container)
    let points = totalEarnedPoints(data[0].transactions);
    expect(points).toEqual(290);
})