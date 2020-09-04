import mathLiveBlot from "quill-mathlive-blot";
import "./style.css";

var quill = new Quill('#editor-container', {
	modules: {
		toolbar: {
			container: [
				[{
					header: [1, 2, false]
				}],
				['bold', 'italic', 'underline'],
				['image', 'code-block'],
				['mathLive']
			],
			handlers: {
				'mathLive': insert,
			}
		}
	},
	placeholder: '',
	theme: 'snow'
});

mathLiveBlot.register(Quill);

function insert() {
	let selection = quill.getSelection();
	quill.insertEmbed(selection.index, "mathLive", "x");
}
