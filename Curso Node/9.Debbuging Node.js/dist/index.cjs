"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/services/email.ts
function getBaseEmail(senderName) {
  return __async(this, null, function* () {
    let base = `Ol\xE1 ${senderName}, gostaria de escrever algo`;
    return base;
  });
}

// src/index.ts
console.log(getBaseEmail("Caio"));
