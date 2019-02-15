class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(string) {
    if (string !== undefined) {
      this.elements.forEach(el => el.innerHTML = string);
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
    this.elements.forEach(el => el.innerHTML = "");
  }

  append(arg) {
    args = Array.from(arg);
    for (let i = 0; i < args.length; i ++) {
      arg = args[i];
    this.elements.forEach(el => el.innerHTML += arg.outerHTML);
    }
  }

  attr(att, value) {
    if (value !== undefined) {
      this.elements.forEach(el => el.setAttributes(att) = value);
    } else {
      return this.elements[0].getAttributes(att);
    }
  }

  addClass(value) {
    this.elements.forEach(el => el.classList.add(value));
  }

  removeClass(value) {
    this.elements.forEach(el => el.classList.remove(value));
  }

}

module.export = DOMNodeCollection