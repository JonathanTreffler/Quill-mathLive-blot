import MathLive from "mathlive/dist/mathlive.js";

export default {
	register: function(Quill) {
		let BlockEmbed = Quill.import("blots/block/embed");

		class MathLiveBlot extends BlockEmbed {
		  static create(content) {
		    let node = super.create();

				node.setAttribute("contenteditable", false);

				let div = document.createElement("div");

				$(node).append(div);
				console.log(node);

				this.MathLiveField = MathLive.makeMathField(div, {
					smartMode: true,
					virtualKeyboardMode: "manual",
					virtualKeyboardLayout: "qwertz",
					virtualKeyboardTheme: "material",
					virtualKeyboards: "all",
					onContentDidChange: (mf) => {
						const latex = mf.$text();
						console.log(latex);
					},
					inlineShortcuts: {
						"minus": "-",
						"-": "-",
						"plus": "+",
						"/": "\\frac",
						"super 1": "^1",
						"super 2": "^2",
						"super 3": "^3",
						"super 4": "^4",
						"super 5": "^5",
						"super 6": "^6",
						"super 7": "^7",
						"super 8": "^8",
						"super 9": "^8",
					},
				});

				node.MathLiveField.$latex(content);

				node.addEventListener("click", function() {
					node.MathLiveField.$focus();
				});

		    return node;
		  }

			static value(node) {
				return node.MathLiveField.$latex();
			}
		}

		MathLiveBlot.blotName = "mathLive";
		MathLiveBlot.tagName = "div";
		MathLiveBlot.className = "mathLiveBlot";

		Quill.register(MathLiveBlot);
	}
};
