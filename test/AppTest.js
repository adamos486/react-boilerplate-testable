import App from "../src/App.js";

describe("app", () => {
  it("renders the component", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});