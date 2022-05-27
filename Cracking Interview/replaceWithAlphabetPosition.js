function alphabetPosition(text) {
    let test = "abcdefghijklmnopqrstuvwxyz";
    text = text.toLowerCase(); // makes all characters lowercase
    let textArr = [];
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < test.length; j++) {
            if (text[i] === test[j]) {
                textArr.push(j + 1);
            }
        }
    }
    text = textArr.join(" ");
    return text;
}
