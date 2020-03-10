// Returns a random string of `length`
export function getRandomString(length) {
    return[...Array(length)]
        .map(() => Math.random().toString(36)[2])
        .join('')
        .toUpperCase();
}


// Returns a random integer between min (inclusive) and max (inclusive).
export function getRandomInt(min, max) {
    [min, max] = [Math.ceil(min), Math.floor(max)];

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
