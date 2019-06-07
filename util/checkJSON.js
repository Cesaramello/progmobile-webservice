const checkJSON = (text) => {

    if (typeof(text) !== "string") {
        return false;
    }

    try {
        const result = JSON.parse(text);
        if (result && typeof(result) === "object") {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }

}

module.exports = checkJSON;
