<<<<<<< HEAD
function roll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num); // pass value to next step
    }, delay);
  });
}
roll(12212, 1000)
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12312, 2000);
  })
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12412, 3000);
  })
  .then(() => {
    console.log("wait its almost over");
    return roll(12512, 4000);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Done with viva)");
  });


roll(12212, 1000)
  .then(() => (console.log("downloading..."), roll(12312, 2000)))
  .then(() => (console.log("downloading..."), roll(12412, 3000)))
  .then(() => (console.log("almost over..."), roll(12512, 4000)))
  .catch(console.log)
=======
function roll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num); // pass value to next step
    }, delay);
  });
}
roll(12212, 1000)
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12312, 2000);
  })
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12412, 3000);
  })
  .then(() => {
    console.log("wait its almost over");
    return roll(12512, 4000);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Done with viva)");
  });


roll(12212, 1000)
  .then(() => (console.log("downloading..."), roll(12312, 2000)))
  .then(() => (console.log("downloading..."), roll(12412, 3000)))
  .then(() => (console.log("almost over..."), roll(12512, 4000)))
  .catch(console.log)
>>>>>>> de62638788781df27150e8023d87873b33a5dfbc
  .finally(() => console.log("Done with viva)"));