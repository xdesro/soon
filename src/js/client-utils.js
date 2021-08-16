const mapRange = (value, inputMin, inputMax, outputMin, outputMax, clamp) => {
  // Reference:
  // https://openframeworks.cc/documentation/math/ofMath/
  if (Math.abs(inputMin - inputMax) < Number.EPSILON) {
    return outputMin;
  } else {
    var outVal =
      ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
      outputMin;
    if (clamp) {
      if (outputMax < outputMin) {
        if (outVal < outputMax) outVal = outputMax;
        else if (outVal > outputMin) outVal = outputMin;
      } else {
        if (outVal > outputMax) outVal = outputMax;
        else if (outVal < outputMin) outVal = outputMin;
      }
    }
    return outVal;
  }
};

const lerp = (min, max, t) => min * (1 - t) + max * t;
export { mapRange, lerp };
