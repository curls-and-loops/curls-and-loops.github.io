export function FileUploader(previewContainer) {
  function handleFile(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      img.id = "cover-image";
      img.style.maxWidth - "100%";
      previewContainer.innerHTML = ""; // laatste preview legen.
      previewContainer.appendChild(img);
    };

    reader.onerror = function () {
      previewContainer.textContent = "Error reading the image file.";
    };

    reader.readAsDataURL(file);
  }

  return { handleFile };
}
