import * as actions from "./actions.js";

export function registerClass() {
	const nav = document.querySelector("nav");

	nav.addEventListener("click", (event) => {
		const action = event.target.dataset.class;

		actions[action]();
	});
}
