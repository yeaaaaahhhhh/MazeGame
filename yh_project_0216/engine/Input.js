class Input {
  //이해안됐음...keysDown이랑 frameKeysDown이랑 왜 두개나 필요하지
  static key;
  static fraemKey;

  static update() {
    this.frameKey=this.key;
    this.key=0;
  }
  static getKeyPressed() {
    return Input.key;
  }
  static attach(document) {
    document.body.addEventListener("keypress", keyPressed)
    function keyPressed(event) {
      //console.log("attach" + event.key);
      Input.key = event.key
      //console.log("key check",Input.key)
    }
  }
}

export default Input;