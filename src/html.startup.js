﻿import * as Lang from './gtw-lang';

function component() {
    const element = document.createElement("div");

    const container = document.createElement("div");
    const flex = document.createElement("div");
    const textDiv = document.createElement("div");
    const header = document.createElement("h1");
    const para = document.createElement("p");

    var headerText;
    console.log(Lang.getLocale());
    if (Lang.getLocale() === "zh") {
        headerText = "去邊㗎";
    } else {
        headerText = "GoToWhere";
    }
    header.innerHTML = "<i class=\"fas fa-map-marked-alt\"></i> " + headerText;
    header.setAttribute("class", "display-3");

    para.setAttribute("class", "lead mb-0");
    para.setAttribute("data-i18n", "app-desc");

    textDiv.setAttribute("class", "w-100 text-dark");
    textDiv.appendChild(header);
    textDiv.appendChild(para);

    flex.setAttribute("class", "d-flex h-100 text-center align-items-center");
    flex.appendChild(textDiv);

    container.setAttribute("class", "container h-100");
    container.appendChild(flex);

    const progressPanel = document.createElement("div");
    const startupStatus = document.createElement("small");
    const progress = document.createElement("div");
    const progressBar = document.createElement("div");

    progressBar.setAttribute("class", "progress-bar progress-bar-striped progress-bar-animated");
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("id", "startup-progress");
    progressBar.setAttribute("style", "width: 0%");

    startupStatus.setAttribute("id", "startup-status");
    startupStatus.setAttribute("data-i18n", "startup-status-initializing");

    progress.setAttribute("class", "progress");
    progress.appendChild(progressBar);

    progressPanel.setAttribute("class", "progress-panel");
    progressPanel.appendChild(startupStatus);
    progressPanel.appendChild(progress);

    element.setAttribute("class", "startup");
    element.appendChild(container);
    element.appendChild(progressPanel);

    return element;
}

document.body.appendChild(component());