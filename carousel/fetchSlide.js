// This script is used for SWE UI photo gallery question
// It is loaded as an external script in the question codepen

// Owners: @justinh, @taylorm, @patrickm
(function () {

const SIMULATED_DELAY_BY_INDEX = [
  1500,
  2000,
  500,
  5000,
  2000,
  500,
  undefined,
  5000,
  2000,
  1000,
];

const IMG_BASE_URL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205";

const totalNumSlides = SIMULATED_DELAY_BY_INDEX.length;

window.fetchSlide = async function fetchSlide ({index} = {}) {
  if (index == null) {
    throw new Error(
      "fetchSlide was not passed a slide index. For example: fetchSlide({index: 0})."
    );
  }

  const simulatedDelay = SIMULATED_DELAY_BY_INDEX[index];

  if (simulatedDelay === undefined) {
    await new Promise(resolve => window.setTimeout(resolve, 500));
    const message = `The slide with index ${index} is not available.`;
    console.error(message);

    throw {
      index,
      message,
      totalNumSlides,
    }
  }

  console.info(`Requesting slide with index "${index}".`);

  await new Promise(resolve => window.setTimeout(resolve, simulatedDelay));

  return {
    index,
    totalNumSlides,
    url: `${IMG_BASE_URL}/carousel_${index}.jpg`,
    caption: `Caption for slide number ${index}`,
  };
};

})();
