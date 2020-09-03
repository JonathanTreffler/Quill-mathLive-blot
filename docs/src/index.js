import mathLiveBlot from "quill-mathlive-blot";
import "./style.css";

var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
});

mathLiveBlot.register(Quill);

function insert() {
    let selection = quill.getSelection();
    console.log(selection);
    quill.insertEmbed(selection.index, "mathLive", "x");
}

document.getElementById("insert").addEventListener("click", insert);
