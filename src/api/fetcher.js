export async function fetchData(product) {
  const getData = await fetch(
    `https://api.calorieninjas.com/v1/nutrition?query=${product}`,
    {
      headers: {
        "X-Api-Key": "lYi/dSxQOv9UeHEHW3U7FQ==ZiqHusOzHTi98ZRI",
      },
    },
  );
  if (!getData.ok) {
    console.error("not working");
    throw new Error("Invalid URL");
  }
  
  return getData;
}

