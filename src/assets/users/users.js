export const users = [
  {
    user_id: 1,
    username: "a",
    password: "a",
    hospital: {
      hospitalName: "Hospital one",
      hospitalId: 1,
      config: {
        tables: {
          HospitalInventory: {
            sortKey: "item_category",
            sortDirection: "asc",
            columns: [
              {
                name: "item_name",
                displayName: "Item name",
                validation: { required: true },
              },
              {
                name: "item_number",
                displayName: "Item number",
                validation: { required: true },
              },
              {
                name: "item_manufacturer",
                displayName: "Manufacturer",
                validation: { required: true },
              },
              {
                name: "item_category",
                displayName: "Category",
                validation: { required: true },
              },
              {
                name: "item_quantity",
                displayName: "Quantity",
                validation: { required: true },
              },
            ],
          },
        },
      },
    },
  },
  {
    user_id: 2,
    username: "user2",
    password: "password",
    hospital: {
      hospitalName: "Hospital two",
      hospitalId: 2,
      config: {
        tables: {
          HospitalInventory: [
            {
              name: "item_name",
              displayName: "Item name",
              validation: { required: true },
            },
            {
              name: "item_number",
              displayName: "Item number",
              validation: { required: true },
            },
            {
              name: "item_manufacturer",
              displayName: "Manufacturer",
              validation: { required: true },
            },
            {
              name: "item_category",
              displayName: "Category",
              validation: { required: true },
            },
            {
              name: "item_quantity",
              displayName: "Quantity",
              validation: { required: true },
            },
            {
              name: "item_expiry_date",
              displayName: "Expiry Date",
              validation: { required: true },
            },

            {
              name: "item_price",
              displayName: "Price",
              validation: { required: true },
            },
          ],
        },
      },
    },
  },
];
