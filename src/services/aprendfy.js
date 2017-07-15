const BASE_URL = 'https://aprendfy.herokuapp.com/v1/app/';
const CATEGORIES = 'categories';

type categoriesResponsePayloadType = {
    _id: string,
    __v: number,
    name: string,
    color: string,
    created_at: Date,
    updated_at: Date
}

export async function getAllCategories() {
  try {
    const response = await fetch(`${BASE_URL}${CATEGORIES}`, {
      method: 'get',
      headers: {
        /* eslint max-len: ["error", 500] */
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTYzNDljNDZjZDQyNjAwMTE2Y2U0NTciLCJ1cGRhdGVkX2F0IjoiMjAxNy0wNy0xMFQwOTozMjo1Mi4yNTFaIiwiY3JlYXRlZF9hdCI6IjIwMTctMDctMTBUMDk6MzI6NTIuMjUxWiIsIm5hbWUiOiJVc3XDoXJpbyBQYWRyw6NvIiwiZW1haWwiOiJ1c3VhcmlvQHBhZHJhby5jb20iLCJfX3YiOjAsInVzZXJTdGF0dXMiOiJQRU5ESU5HIiwidHlwZSI6IlBVQkxJU0hFUiIsImlhdCI6MTQ5OTk0Njk4OX0.aQKSVDOSDni0OqIrCDugmbSKNSs_V5zsnxkqlaQoMWo',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw Error(response);
    }

    const responseJson = await response.json();
    return mapCategoriesResponseIntoArray(responseJson.payload);
  } catch (error) {
    console.error(error);
    return [];
  }
}

const mapCategoriesResponseIntoArray = (categoriesResponse :categoriesResponsePayloadType) => {
  return categoriesResponse.map(category => toCategoryRepresentation(category));
};

const toCategoryRepresentation = (obj) => {
  return { title: obj.name, color: obj.color };
};
