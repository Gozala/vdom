var isWidget = require("vtree/is-widget")
var initWidget = require("vtree/interface").initWidget

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a[initWidget] === b[initWidget]
        }
    }

    return false
}
