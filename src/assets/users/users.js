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
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_number",
                displayName: "Item number",
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_manufacturer",
                displayName: "Manufacturer",
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_category",
                displayName: "Category",
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_quantity",
                displayName: "Quantity",
                type: "number",
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
    username: "b",
    password: "b",
    hospital: {
      hospitalName: "Hospital two",
      hospitalId: 2,
      config: {
        tables: {
          HospitalInventory: {
            sortKey: "item_category",
            sortDirection: "asc",
            columns: [
              {
                name: "item_name",
                displayName: "Item name",
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_number",
                displayName: "Item number",
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_manufacturer",
                displayName: "Manufacturer",
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_category",
                displayName: "Category",
                type: "text",
                validation: { required: true },
              },
              {
                name: "item_quantity",
                displayName: "Quantity",
                type: "number",
                validation: { required: true },
              },
              {
                name: "item_expiry_date",
                displayName: "Expiry Date",
                type: "date",
                validation: { required: true },
              },
              {
                name: "item_price",
                displayName: "Price",
                type: "number",
                validation: { required: true },
              },
            ],
          },
        },
      },
    },
  },
];
