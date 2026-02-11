<<<<<<< HEAD
function roll(num, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num);
    }, delay);
  });
}

async function run() {
  try {
    await roll(12212, 1000);
    console.log("wait its getting downloaded");

    await roll(12312, 2000);
    console.log("wait its getting downloaded");

    await roll(12412, 3000);
    console.log("wait its almost over");

    await roll(12512, 4000);
    console.log("Finished download flow");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Done with viva");
  }
}

=======
function roll(num, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num);
    }, delay);
  });
}

async function run() {
  try {
    await roll(12212, 1000);
    console.log("wait its getting downloaded");

    await roll(12312, 2000);
    console.log("wait its getting downloaded");

    await roll(12412, 3000);
    console.log("wait its almost over");

    await roll(12512, 4000);
    console.log("Finished download flow");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Done with viva");
  }
}

>>>>>>> de62638788781df27150e8023d87873b33a5dfbc
run();