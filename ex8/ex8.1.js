const inp = document.getElementById("inp");
inp.oninput = () => {
   if (inp.value.length === 13) {
      inp.value = inp.value.slice(0, inp.value.length - 1);
   }
   switch (inp.value.charAt(inp.value.length - 1)) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'Y':
         break;
      default:
         inp.value = inp.value.slice(0, inp.value.length - 1);
   }
}
