/*
    Turns a string into a DOM element. 
    Taken from stackoverflow: https://stackoverflow.com/a/35385518
*/
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result.
    template.innerHTML = html;
    return template.content.firstChild;
}

// The widget that displays word info.
let widget = htmlToElement(`
    <div id="wordsmith-extension-widget" style="background-color: white;">
        <h1><p id="wordsmith-extension-word"></p></h1>
        <h3><p id="wordsmith-extension-pron"></p></h3>
        <hr>
        <p id="wordsmith-extension-psp"></p>
        <ol id="wordsmith-extension-defs"></ol>
        <ul>
            <li>Synonyms: <span id="wordsmith-extension-syns"></span></li>
            <li>Antonyms: <span id="wordsmith-extension-ants"></span></li>
        </ul>
        you can view the source code 
        <a href="https://github.com/sunyshore/extension-init">here</a>
    </div>
`);

/*
    Used to keep track of whether the widget is visible or not so that
    we can avoid trying to add or remove the widget multiple times in a row.
*/
let widgetVisible = false;

/*
    Adds the widget to the page below the selected text
*/
const addWidget = () => {
    if (!widgetVisible) {
        // Get the selected text's position.
        // This snippet is taken from here: https://stackoverflow.com/a/17887684
        s = window.getSelection();
        oRange = s.getRangeAt(0); //get the text range
        oRect = oRange.getBoundingClientRect();
        console.log(oRect);

        // Position the widget below the text
        widget.style.position = 'absolute';
        // We need to add window.scrollY and .scrollX to account for the window's scroll.
        widget.style.top = (oRect.bottom + window.scrollY) + 'px';
        widget.style.left = (oRect.left + window.scrollX) + 'px';

        document.body.appendChild(widget);
        widgetVisible = true;
    }
}

/*
    Removes the widget from the page.
*/
const removeWidget = () => {
    if (widgetVisible) {
        document.body.removeChild(widget);
        widgetVisible = false;
    }
}

/*
    Event listener that removes the widget if a click happens outside the widget.
*/
const outsideClickListener = event => {
    if (!widget.contains(event.target)) {
        removeWidget();
    }
}

/*
    Populates the widget with data.
*/
const setWidgetData = (data) => {
    word = widget.querySelector("#wordsmith-extension-word");
    word.innerHTML = data.word;

    pron = widget.querySelector("#wordsmith-extension-pron");
    pron.innerHTML = data.pron;

    type = widget.querySelector('#wordsmith-extension-psp');
    i = document.createElement('i');
    i.innerHTML = data.type;
    type.appendChild(i);

    defs = widget.querySelector('#wordsmith-extension-defs');
    data.defs.forEach(element => {
        li = document.createElement('li');
        li.innerHTML = element;
        defs.appendChild(li);
    })

    syns = widget.querySelector('#wordsmith-extension-syns');
    console.log(data.syns.length);
    if (data.syns.length) {
        syns.innerHTML = data.syns.join(', ');
    } else {
        syns.innerHTML = "Could not find any synonyms."
    }

    ants = widget.querySelector('#wordsmith-extension-ants');
    console.log(data.ants.length);
    if (data.ants.length) {
        ants.innerHTML = data.ants.join(', ');
    } else {
        ants.innerHTML = "Could not find any antonyms."
    }
}


// Add the outsideClickListener so that the widget is removed when a click happens outside of the widget.
document.addEventListener('click', outsideClickListener);

// When we get a message from the background script, set the widget's data and show it.
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        setWidgetData(request);
        addWidget();
        sendResponse();
    }
);