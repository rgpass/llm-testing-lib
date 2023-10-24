describe("Binary results", () => {
  describe("when the statement is true", () => {
    it("returns 1", () => {
      const response = "1";

      expect(Number(response)).toBe(1);
    });
  });
});
