// validators - text, alphaNum, transactionRefNo, number, kitNumber, pan, email, amount, aadhaar, pincode,
// password, comment, address, companyName, city, state, mpin, otp, accountNumber

export const validate = (
  validator,
  val,
  onChangeText,
  setNamesError = () => {},
  isSpaceRequired,
) => {
  switch (validator) {
    case 'companyName':
    case 'text' || '':
    case 'logoUrl': {
      if (val.startsWith(' ')) return onChangeText('');
      else return onChangeText(val);
    }
    case 'address':
      if (val.startsWith(' ')) return onChangeText('');
      else if (/^[a-zA-Z0-9()/.,: #\\;'-]+$/.test(val))
        return onChangeText(val);
      break;
    case 'comment':
      if (/^[a-zA-Z0-9() /.,: #\\;'-]+$/.test(val)) return onChangeText(val);
      break;

    case 'name':
      if (/^[a-zA-Z ]+$/.test(val)) {
        let names = val.split(' ');
        if (names && names.length > 2) {
          return setNamesError(true);
        } else {
          setNamesError(false);
          return onChangeText(val.trimStart());
        }
      }
      break;
    case 'transactionRefNo':
    case 'alphaNum':
      if (
        isSpaceRequired
          ? /^[0-9a-zA-Z ]+$/.test(val)
          : /^[0-9a-zA-Z_]+$/.test(val)
      ) {
        return onChangeText(val.toUpperCase());
      }

      break;

    case 'kitNumber':
      if (val.startsWith(' ') || val.startsWith(0)) return onChangeText('');
      else if (/^[0-9]+$/.test(val) && val.length <= 10) {
        return onChangeText(val);
      }
      break;
    case 'number':
      if (val.startsWith(' ')) return onChangeText('');
      else if (/^[0-9]+$/.test(val)) {
        return onChangeText(val);
      }
      break;

    case 'pan':
      if (val.length === 10) {
      }
      if (val.length <= 5 && /^[a-zA-Z]+$/.test(val)) {
        return onChangeText(val);
      } else if (
        val.length > 5 &&
        val.length <= 9 &&
        /^[0-9]+$/.test(val.slice(5, val.length))
      ) {
        return onChangeText(val);
      } else if (
        val.length === 10 &&
        /^[a-zA-Z]+$/.test(val.slice(9, val.length))
      ) {
        return onChangeText(val);
      }

      break;

    case 'gst':
      if (val.length <= 2 && /^[0-9]+$/.test(val)) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length > 2 &&
        val.length <= 7 &&
        /^[a-zA-z]+$/.test(val.slice(2, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length > 7 &&
        val.length <= 11 &&
        /^[0-9]+$/.test(val.slice(7, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length === 12 &&
        /^[a-zA-Z]+$/.test(val.slice(11, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length === 13 &&
        /^[0-9]+$/.test(val.slice(12, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length === 14 &&
        /^[a-zA-Z]+$/.test(val.slice(13, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length === 15
        // &&
        // /^[0-9]+$/.test(val.slice(14, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      }
      break;

    case 'email':
      if (/^[0-9a-zA-Z.@]+$/.test(val)) return onChangeText(val);

      break;
    case 'amount':
      if (/^[0-9]+$/.test(val)) {
        let variable = val.replace(/\b(0(?!\b))+/g, '');
        if (parseInt(variable) > 0) {
          return onChangeText(val);
        }
      }
      break;
    case 'amount1':
      if (/^[0-9]+$/.test(val)) {
        let variable = val.replace(/\b(0(?!\b))+/g, '');
        if (parseInt(variable) > 0) {
          return onChangeText(val);
        }
      }
      break;

    case 'aadhaar':
      if (/^[0-9]+$/.test(val) && val.length <= 12) {
        return onChangeText(val);
      }
      break;

    case 'passport':
      if (val.length === 8) {
      }
      if (val.length <= 1 && /^[a-zA-Z]+$/.test(val)) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length > 1 &&
        val.length <= 8 &&
        /^[0-9]+$/.test(val.slice(1, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      }
      break;

    case 'voterId':
      if (val.length === 10) {
      }
      if (val.length <= 3 && /^[a-zA-Z]+$/.test(val)) {
        return onChangeText(val.toUpperCase());
      } else if (
        val.length > 3 &&
        val.length <= 10 &&
        /^[0-9]+$/.test(val.slice(3, val.length))
      ) {
        return onChangeText(val.toUpperCase());
      }
      break;

    case 'pincode':
      if (val.startsWith(' ') || val.startsWith(0)) return onChangeText('');
      else if (/^[0-9]+$/.test(val) && val.length <= 6) {
        return onChangeText(val);
      }
      break;

    case 'password':
      if (!val.includes(' ')) {
        onChangeText(val);
      }
      break;

    case 'city':
    case 'state':
      if (val.startsWith(' ')) onChangeText('');
      else if (/^[a-zA-Z ]+$/.test(val)) {
        onChangeText(val);
      }
      break;

    case 'mpin':
      if (/^[0-9]+$/.test(val) && val.length <= 4) {
        return onChangeText(val);
      }
      break;

    case 'otp':
      if (/^[0-9]+$/.test(val) && val.length <= 6) {
        return onChangeText(val);
      }
      break;

    case 'mobile':
      /^[0-9 ]+$/.test(val) && val.length <= 10;
      if (val.startsWith(0)) {
        return onChangeText('');
      } else if (
        /^[0-9]+$/.test(val) &&
        val.length <= 10 &&
        !val.startsWith(0)
      ) {
        // return onChangeText(val);
        return onChangeText(val);
      }
      break;

    case 'ifscCode':
      if (/^[0-9A-Za-z]+$/.test(val) && val.length <= 11) {
        return onChangeText(val);
      }
      break;

    case 'accountNumber':
      if (/^[0-9A-Za-z]+$/.test(val) && val.length <= 18) {
        return onChangeText(val.toUpperCase());
      }
      break;
    case 'alphaNum1':
      if (/^[0-9a-zA-Z_ ]+$/.test(val)) {
        return onChangeText(val);
      }

      break;
    case 'alphaNum2':
      if (/^[0-9a-zA-Z]+$/.test(val) && !val.includes(' ')) {
        return onChangeText(val);
      }

      break;
    default:
      return onChangeText(val);
  }
  if (val === '') onChangeText('');
};
