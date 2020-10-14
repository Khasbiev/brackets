module.exports = function check(str, bracketsConfig) {
  let bracketsArray = [];
    for (let i = 0; i < bracketsConfig.length; i++){
  bracketsArray.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
}
    if (str.length % 2 === 0) {
for (let i = 0; i < bracketsArray.length; i++) {
  while (str.includes(bracketsArray[i])) {
    str = str.replace(bracketsArray[i], '');
    i = 0;
}
}
  return str.length === 0;
}else {
  return false;
}
}