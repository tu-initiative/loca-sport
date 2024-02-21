export class RegexHelper {
  static Constants = class {
    static REGEX_EMAIL =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    static REGEX_NUMBER = /^\+?([1-9]\d*)$/;

    static REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/; // contain both upper and lower case letters and at least one special character

    //eslint-disable-next-line
    static REGEX_PHONE = /^[0-9\+]{10,12}$/;

    static REGEX_USERNAME = /^[A-Za-z0-9_]+$/;
  };

  static isEmail(input: string): boolean {
    const re = new RegExp(RegexHelper.Constants.REGEX_EMAIL);
    return re.test(input);
  }

  static isNumber(input: string): boolean {
    const re = new RegExp(RegexHelper.Constants.REGEX_NUMBER);
    return re.test(input);
  }
}
