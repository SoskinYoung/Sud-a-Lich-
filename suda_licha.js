document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);
    const result = document.getElementById('result');

    if (isNaN(number) || number <= 0) {
        alert("Zadej prosím platné kladné číslo!");
        result.textContent = "";
        return;
    }

    if (number % 2 === 0) {
        result.textContent = "Číslo je sudé";
    } else {
        result.textContent = "Číslo je liché";
    }

    if (number > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.textContent += " a je prvočíslo";
        }
    }
});
