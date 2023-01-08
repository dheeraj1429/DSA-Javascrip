// String
let str = 'this is some new string';

// console.log(str[1]);
// console.log(str.charAt(1));

// let a = "a";
// let b = "b";
// b = a;
// console.log(a === b);

// const z = 10;
// console.log(typeof String(z));
// console.log(+z);
// const s = new String(z);
// console.log(s);

// const a = "10";
// const b = "20";
// const z = "10 + 20";
// console.log(a + b);
// console.log(new String(z));
// console.log(eval(z.valueOf()));

// console.log("hi \v am dheeraj");

const longString =
   'This is a very long string which needs \
to wrap across multiple Lines because otherwe \
my code unreadable.';

// console.log(longString);

// console.log("❤️".split(""));

// console.log(longString.at(1));
// console.log(longString.charAt(1));

// console.log("t".charAt(10));

// console.log(longString.endsWith("unreadable."));
// console.log(longString.endsWith("."));
// console.log(longString.endsWith("e"));

// console.log(longString.includes("is", 10));
// console.log(longString.includes("z"));

// console.log(longString.indexOf("is", 10));

// const a = "réservé"; // with accents, lowercase
// const b = "RESERVE"; // no accents, uppercase

// console.log(longString.match(/[A-Z]/g));
// console.log(longString.match(/[a-z]/g));

// console.log(longString.padEnd(longString.length + 2, "."));
// console.log(a.slice(-4).padStart(a.length, "*"));
// const cart = "1424802890";
// console.log(cart.slice(-5).padStart(cart.length, "*"));

// console.log(a.slice(0, 3));

// console.log(longString.substring(1, 2));
// console.log("Mozilla".substring("Mozilla".length - 4));

// const dotted = "İstanbul";
// console.log(dotted.toLocaleLowerCase("en-us"));
// console.log(new String("hi").toString);

// timer problem
const globalObject = {
   timers: [],
};

class Timer {
   constructor(objectId, time, name) {
      this.objectId = objectId;
      this.time = time;
      this.name = name;
      this.job;
   }
   startTimer() {
      this.job = setInterval(() => {
         console.log(this.time, this.name);
      }, 1000);
   }
   update(updateTime) {
      console.log(updateTime);
      this.time = updateTime;
   }
}

const insertFunction = function (objectId, time, name) {
   const tracker = new Timer(objectId, time, name);
   // tracker.startTimer();

   globalObject.timers.push({
      [objectId]: tracker,
   });
};

const updateFunction = function (objectId, time) {
   globalObject.timers.find((el) => {
      if (el?.[objectId]?.objectId == objectId) {
         el?.[objectId].update(time);
      }
   });
};

insertFunction(10, 3000, 'ASD');
insertFunction(40, 6000, 'DSA');
updateFunction(10, 1000);
