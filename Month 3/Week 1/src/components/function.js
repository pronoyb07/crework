let funcs = {
  //to check syntax of email using regex
  checkEmail: (email) => {
    const re = /@[a-z]{1,}[.][a-z]{1,}/g;
    const re1 = /@/g;
    const re2 = /@[a-z]{1,}/g;
    const re3 = /@[a-z]{1,}[.]/g;
    const re4 = /@[a-z]{1,}[.][a-z]{1,}/g;

    const mailLower = email.toLowerCase();

    const res1 = re1.test(mailLower);
    const res2 = re2.test(mailLower);
    const res3 = re3.test(mailLower);
    const res4 = re4.test(mailLower);

    let res = re.test(email);

    if (res) {
      return " No errors";
    } else if (!res1) {
      return "Please include an @";
    } else if (!res2) {
      return "Please enter mail name";
    } else if (!res3) {
      return "Please include a dot";
    } else if (!res4) {
      return "Please enter .in .com";
    }
  },

  //to check syntax of password using regex
  checkPassword: (password) => {
    const pe1 = /\s/g; //white-space chars
    const pe2 = /[a-z]/g; //a-z
    const pe3 = /\W/g; //one special char
    const pe4 = /\d/g; //one digit
    const pe5 = /[A-Z]/g; //A-Z
    const num = password;
    let len = num.length;
    let resultp1,
      resultp2,
      resultp3,
      resultp4,
      resultp5,
      errorMsg = "";

    if (len >= 4 && len <= 12) {
      resultp1 = pe1.test(num); //non-space chars
      resultp2 = pe2.test(num); //one word char
      resultp3 = pe3.test(num); //one non-word
      resultp4 = pe4.test(num); //one digit
      resultp5 = pe5.test(num); //
      if (!resultp1) {
        //only non-space
        if (resultp2 && resultp3 && resultp4 && resultp5) {
          //   passStatus = true;
          errorMsg = "No errors";
        } else if (!resultp4) {
          // no digits
          errorMsg = "Please enter 0-9";
        } else if (!resultp2) {
          // no a-z
          errorMsg = "Please enter a-z";
        } else if (!resultp3) {
          // no spl chars
          errorMsg = "Please enter @#$!";
        } else if (!resultp5) {
          errorMsg = "Please enter A-Z";
        }
      } else {
        //white-space detected
        errorMsg = "no space allowed";
      }
    } else if (len < 4) {
      errorMsg = "Password too short";
    } else if (len > 12) {
      errorMsg = "Password too long";
    }
    return errorMsg;
  },
};

export default funcs;
