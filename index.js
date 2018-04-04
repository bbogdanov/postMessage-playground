function frame(fileLocation) {

    var location = fileLocation;

    var win = window;

    var popup;

    function open() {
        popup = win.open(location, 'example', 'height=200,width=150');

        if (win.focus) popup.focus()
    }

    function getWindow() {
        return popup;
    }

    return {
        getWindow: getWindow,
        open: open
    }
};