function rot13(str) {
  let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  console.log(alphabets.length);
  let newStr = '';

  for(let i=0;i<str.length;i++){
    let index = alphabets.indexOf(str[i]);
    if(index == -1){
      newStr += str[i];
    }else{
      let newIndex = (index+13)%26;
      newStr += alphabets[newIndex];
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");