const body = document.querySelector("body");

export function addClassHome() {
	body.classList.remove("universe", "explore");
	body.classList.add("home");
}

export function addClassUniverse() {
	body.classList.remove("home", "explore");
	body.classList.add("universe");
}

export function addClassExplore() {
	body.classList.remove("home", "universe");
	body.classList.add("explore");
}
