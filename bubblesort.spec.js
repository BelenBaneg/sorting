describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Numeros ordenados", function () {
    //spyOn(bubble, "swap").and.callThrough();
    expect(bubbleSort([1, 3, 5])).toEqual([1, 3, 5]);
  });
  it("numeros desordenados", function () {
    spyOn(window, "swap").and.callThrough();
    const array = [5, 15, 1, 3, 4, 18, 65, 34, 19, 22, 36];
    bubbleSort(array);
    expect(swap.calls.count()).toEqual(12);
    expect(bubbleSort([5, 15, 1, 3, 4, 18, 65, 34, 19, 22, 36])).toEqual([
      1, 3, 4, 5, 15, 18, 19, 22, 34, 36, 65,
    ]);
  });
});


describe('Probando bubbleSort', function() {
  it('debería espiar la función swap', function() {
    spyOn(window, 'swap').and.callThrough(); 

    const array = [3, 1, 2];
    bubbleSort(array);

    expect(swap.calls.count()).toEqual(2); 
  });
});
