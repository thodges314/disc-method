import items from "pages/pageDirectory";

export const toPascalCase = (string) =>
  `${string}`
    .normalize("NFD")
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      (_$1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());

export const location = () => {
  const [PCCategory, PCSubcategory] = window.location.pathname
    .split("/")
    .slice(1);
  if (!PCCategory) return ["Home", ""];
  const categoryObject = items.find(
    (item) => toPascalCase(item.name) === PCCategory
  );
  const category = categoryObject ? categoryObject.name : "";
  const subcategory = categoryObject
    ? categoryObject.items.find((item) => toPascalCase(item) === PCSubcategory)
    : "";
  return [category, subcategory];
};

export const debounce = (callback, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
};

export const hexToRgba = (hex, opacity) => {
  const leadingZeros = (hex) => 6 - hex.toString(16).length;
  const hexString = "0".repeat(leadingZeros(hex)) + hex.toString(16);
  const r = parseInt(hexString.slice(0, 2), 16);
  const g = parseInt(hexString.slice(2, 4), 16);
  const b = parseInt(hexString.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity || 1})`;
};
