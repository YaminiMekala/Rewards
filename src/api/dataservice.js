export default function () {
  return Promise.resolve([
    {
      customerId: 1,
      fullName: "Person A",
      transactions: [
        {
          transactionDate: "06-01-2022",
          amount: 120,
        },
        {
          transactionDate: "07-01-2022",
          amount: 150,
        },
        {
          transactionDate: "08-01-2022",
          amount: 50,
        },
      ],
    },
    {
      customerId: 2,
      fullName: "Person B",
      transactions: [
        {
          transactionDate: "06-21-2022",
          amount: 75,
        },
        {
          transactionDate: "07-21-2022",
          amount: 105,
        },
        {
          transactionDate: "08-21-2022",
          amount: 155,
        },
      ],
    },
    {
      customerId: 3,
      fullName: "Person C",
      transactions: [
        {
          transactionDate: "06-15-2022",
          amount: 104,
        },
        {
          transactionDate: "07-15-2022",
          amount: 134,
        },
        {
          transactionDate: "08-15-2022",
          amount: 70,
        },
      ],
    },
    {
      customerId: 4,
      fullName: "Person D",
      transactions: [
        {
          transactionDate: "06-18-2022",
          amount: 104,
        },
        {
          transactionDate: "07-18-2022",
          amount: 134,
        },
        {
          transactionDate: "08-18-2022",
          amount: 70,
        },
      ],
    },
  ]);
}
