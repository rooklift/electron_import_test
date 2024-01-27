"use strict";

const electron = require("electron");
const path = require("path");

let win;

electron.app.whenReady().then(() => {
	win = new electron.BrowserWindow({
		width: 1000,
		height: 600,
		useContentSize: true,
	});
	win.loadFile(path.join(__dirname, "renderer.html"));
});
