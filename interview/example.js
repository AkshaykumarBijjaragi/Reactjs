
let arr = [
    { name: "akshay", email: "dfgdfgfg", lastname: "bijja" },
    { name: "ravi", email: "ravi@gm", lastname: "bijja" },
    { name: "vishak", email: "vishak@gm", lastname: "bijja" },
  ];
  
   arr.map((item) => {
    if (item.email === "ravi@gm") {
      item.name = "ravishankar";
    }
  });
  
  console.log(arr);