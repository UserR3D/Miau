export default function debounce(args, wait) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(args, wait);
  };
}
