function asyncDouble(number) {
    return new Promise((res, rej) => {
        setTimeout(() => res(number * 2), 300);
    });
}
asyncDouble(5).then((res) => console.log(res))