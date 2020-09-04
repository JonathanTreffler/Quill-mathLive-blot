import mathLiveBlot from "quill-mathlive-blot";
import "./style.css";

// MathLive options can be modified before the initialisation.
// If changed later it only applies to mathLive Instances created after the change.
mathLiveBlot.options.virtualKeyboardMode = "off";

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

// This function gets called by the quill toolbar handler.
// It can also be called programmatically
function insert() {
	let selection = quill.getSelection();
	// In this example a mathLive instance will start with the content "x"
	quill.insertEmbed(selection.index, "mathLive", "x");
}
