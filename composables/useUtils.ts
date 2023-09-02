export const useUtils = () => {
  const fetchColorsWithRetry = (
    sanity: any,
    query: any,
    retryCount: number = 3
  ): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      let data = null;
      for (let i = 0; i < retryCount; i++) {
        try {
          const response = await sanity.fetch(query);
          if (response) {
            data = response;
            break;
          }
        } catch (error) {
          console.error('Error fetching data from Sanity:', error);
        }
      }

      if (data !== null) {
        resolve(data);
      } else {
        reject(new Error(`Failed to fetch data after ${retryCount} retries`));
      }
    });
  };
  return {
    fetchColorsWithRetry,
  };
};
