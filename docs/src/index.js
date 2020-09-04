import mathLiveBlot from "quill-mathlive-blot";
import "./style.css";

var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
        ['mathLive']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
});

mathLiveBlot.register(Quill);

var toolbar = quill.getModule('toolbar');
toolbar.addHandler('mathLive', function() {
  console.log('mathLive')
});

/*var mathLiveButton = document.querySelector('.ql-mathLive');
mathLiveButton.addEventListener('click', insert);*/

function insert() {
    let selection = quill.getSelection();
    console.log(selection);
    quill.insertEmbed(selection.index, "mathLive", "x");
}

document.getElementById("insert").addEventListener("click", insert);
