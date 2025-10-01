//Task 4

const introspec = (iface) => {
  const names = [];

  for (const one_name in iface) {
    const func = iface[one_name];
    if (typeof func === 'function') {
      names.push (func, func.length);
    }
  }
  console.log(names);
}

iface = {
  divide: (a, b) => a/b,
  name: "George",
  age: 15,
  sum: (a,b,c,d) => a+b+c+d
}



introspec(iface);
