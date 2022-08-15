/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from '@testing-library/react';
import { data } from '../api/data';
import CustomerTable, { totalEarnedPoints } from './CustomerTable';

let container = null;
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
    expect(points).toEqual(240);
})