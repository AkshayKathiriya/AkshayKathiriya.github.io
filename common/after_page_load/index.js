mobileNumber = "+916353396338";

// link CSS file
var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "/common/after_page_load/styles.css";
document.head.appendChild(linkElement);

// Create WhatsApp FAB and append to body element
var aElement = document.createElement("a");
aElement.setAttribute("role", "button");
aElement.setAttribute("class", "whatsapp-fab");
aElement.setAttribute("href", `https://wa.me/${mobileNumber}`);
aElement.setAttribute("target", "_blank");

var imgElement = document.createElement("img");
imgElement.setAttribute("src", "/assets/images/whatsapp-logo.png");
imgElement.setAttribute("alt", "WhatsApp");

aElement.appendChild(imgElement);
document.body.appendChild(aElement);