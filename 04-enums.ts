// Enums
enum E {
    LOG = "log",
    LOG_SQUARE = "log square",
}

function run(command: E) {
    if (command === E.LOG) {
        return '11'
    }
}

run(E.LOG)