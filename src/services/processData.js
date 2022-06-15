export const extractData = (data) => {
  return data.features.map((feature) => ({
    magnitude: feature.properties.mag,
    coordinates: feature.geometry.coordinates.splice(0, 2),
  }));
};
