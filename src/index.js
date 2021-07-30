module.exports = 
function check(str, bracketsConfig) {
  let wasChanged = true;
  while (wasChanged) {
    wasChanged = false;
    for (let i = 0; i < str.length - 1; i++) {
      for (let ii = 0; ii < bracketsConfig.length; ii++){
        if (str[i] == bracketsConfig[ii][0] && str[i+1] == bracketsConfig[ii][1]) {
          str = str.replace(str[i] + str[i+1], '');
          wasChanged = true;
          break;
        }
        if (wasChanged)
          break;
      }
    }
  }
  if (str.length == 0)
    return true;
  else 
    return false;
}
