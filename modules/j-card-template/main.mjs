import { FileUploader } from "./components/uploader.mjs";

const input = document.getElementById("background-image");
const option = document.getElementById("cover-image-position");
const preview = document.getElementById("cover");

const uploader = FileUploader(preview);

input.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    uploader.handleFile(file);
  }
});

option.addEventListener("change", (e) => {
  if (e.target.value) {
    const img = document.getElementById('cover-image');
    img.className = `${e.target.value}`;
  }
});
