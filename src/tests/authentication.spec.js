import store from "@/store/index.js";
import { users } from "@/assets/users/users.js";

describe("User login", () => {
  it("User is authenticated when using correct login details", () => {
    store.dispatch("auth/login", {
      username: users[0].username,
      password: users[0].password,
    });
    expect(store.getters["auth/getIsAuthenticated"]).toBe(true);
  });

  it("User is not authenticated when using incorrect login details", () => {
    expect(() => {
      store.dispatch("auth/login", {
        username: "non-existant-user",
        password: "password",
      });
    }).toThrow("Invalid username or password, please try again.");
  });
});
