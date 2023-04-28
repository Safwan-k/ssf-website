export class LocalStorage {
  private static RESPONSE = 'signup'
  private static PART_A = 'part_a'
  private static PART_B = 'part_b'

  public static getResponse(){
    return localStorage.getItem(this.RESPONSE)
  }

  public static setResponse(response:string) {
    localStorage.setItem(this.RESPONSE, response);
  }

  public static getPartA() {
    return localStorage.getItem(this.PART_A)
  }

  public static getPartB() {
    return localStorage.getItem(this.PART_B)
  }

  public static setPartA(response:string) {
    localStorage.setItem(this.PART_A, response);
  }

  public static setPartB(response:string) {
    localStorage.setItem(this.PART_B, response);
  }



}
