const $btnNum = $(".num");
const $operations = $(".operation");
const $clear = $(".clear");
const $equal = $(".equal");
console.log($btnNum.eq());
//functions

$btnNum.on("click", (event) => {
  const $index = event.currentTarget;
  const $firstNum = parseInt($index.innerText);
  console.log($firstNum);
  $(".shownum").append($firstNum);

  $operations.on("click", (event) => {
    const $op = event.currentTarget;
    const $opVal = $op.innerText;

    $(".shownum").append($opVal);

    $btnNum.on("click", (event) => {
      const $index = event.currentTarget;
      const $firstNum2 = parseInt($index.innerText);
      console.log($firstNum);
      // $(".shownum").append($firstNum2);

      $equal.on("click", (event) => {
        const op = $opVal;

        if (op === "+") {
          const $sum = $firstNum + $firstNum2;
          // $(".shownum").empty();
          $(".ans").prepend($sum);
        } else if (op === "-") {
          const $sum = $firstNum - $firstNum2;
          // $(".shownum").empty();
          $(".ans").prepend($sum);
        } else if (op === "/") {
          const $sum = $firstNum / $firstNum2;
          // $(".shownum").empty();
          $(".ans").prepend($sum);
        } else if (op === "*") {
          const $sum = $firstNum * $firstNum2;
          // $(".shownum").empty();
          $(".ans").prepend($sum);
        }
      });
    });
  });
});

$clear.on("click", (event) => {
  $(".shownum").text("");
});
