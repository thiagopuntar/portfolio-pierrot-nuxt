const useComponentProps = async (component: string) => {
  const query = groq`*[_type == "${component}"]`;
  const { data } = await useSanityQuery(query);
  return toRaw(data.value);
};

export default useComponentProps;
