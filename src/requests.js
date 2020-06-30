export const loadCollectionRequest = async (collectionName, params) => {
  const xhrRequest = new Promise();
  const response = await xhrRequest((resolve, reject) => {
    resolve({
      items: []
    });
  });
  return response.items;
};

export default loadCollectionRequest;
