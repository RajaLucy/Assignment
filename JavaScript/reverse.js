
var p="This is a sunny day";

  function rev1(a)
  {
return a.split(" ").map(e=> {return e.split("").reverse().join("")}).join(" ");

  }
  console.log(`The reverse String is  ${rev1(p)}`);
  