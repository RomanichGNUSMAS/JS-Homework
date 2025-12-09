async function Print() {
    let counter = 0
    let num = setInterval(() => {
        console.log('Ping');
        counter++
        if(counter == 5) clearInterval(num)
    }, 1000)

}
Print()