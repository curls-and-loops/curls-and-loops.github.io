import {FileUploader} from './components/uploader.mjs'

const input = document.getElementById('background-image');
const preview = document.getElementById('cover');

const uploader = FileUploader(preview);

input.addEventListener('change',(e) => {
    const file = e.target.files[0];

    if (file) {
        uploader.handleFile(file);
    }
});