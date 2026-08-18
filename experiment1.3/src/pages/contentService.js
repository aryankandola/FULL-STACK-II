const defaultContent = {
  title: "AI Technology",
  description: "Artificial Intelligence is changing the world."
};


export const getContent = () => {

  const savedContent = localStorage.getItem("content");

  if (savedContent) {
    return JSON.parse(savedContent);
  }

  return defaultContent;

};


export const saveContent = (content) => {

  localStorage.setItem(
    "content",
    JSON.stringify(content)
  );

};