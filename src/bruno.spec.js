beforeAll(() => {
  console.log("before all hook");
});

beforeEach(() => {
  console.log("Before each hook");
});
test("Sum of two digits", () => {
  // Arrange

  // Act
  let sum = 2 + 2;

  // Assert
  expect(sum).toBe(4);
  console.log("Test suma bruno");
});

test("Sum of two digits2", () => {
  // Arrange

  // Act
  let sum = 2 + 2;

  // Assert
  expect(sum).toBe(4);
  console.log("Test suma bruno 2");
});
test("Sum of two digits3", () => {
  // Arrange

  // Act
  let sum = 2 + 2;

  // Assert
  expect(sum).toBe(4);
  console.log("Test suma bruno 3");
});

afterEach(() => {
  console.log("After Each hook");
});
afterAll(() => {
  console.log("After all hook");
});
