export const convertUrl = (url) => {
  url = new URL(url);
  const urlParam = new URLSearchParams(url.search);
  const id = urlParam.get("id");

  return "https://drive.google.com/uc?id=" + id + "&export=download";
};
