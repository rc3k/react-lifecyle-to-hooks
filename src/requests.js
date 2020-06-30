export const loadCollectionRequest = async () => {
  const xhrRequest = new Promise();
  const response = await xhrRequest((resolve) => {
    resolve({
      items: [],
    });
  });
  return response.items;
};

export default loadCollectionRequest;
