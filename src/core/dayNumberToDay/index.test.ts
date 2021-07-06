import IDate from "../..";

test("Should return corresponding day from the input", () => {
  expect(IDate(0)).toBe("Minggu");
  expect(IDate(1)).toBe("Senin");
  expect(IDate(2)).toBe("Selasa");
  expect(IDate(3)).toBe("Rabu");
  expect(IDate(4)).toBe("Kamis");
  expect(IDate(5)).toBe("Jumat");
  expect(IDate(6)).toBe("Sabtu");
});
