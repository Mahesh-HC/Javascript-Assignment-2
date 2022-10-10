const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
    slider.addEventListener("input", calculateTip);
});

const billInput = document.getElementById('amount')
billInput.addEventListener('change', calculateTip)

function calculateTip() {
    const amount = document.querySelector('#amount')
    const percentage = document.querySelector('#percentage').value

    let bill = parseFloat(billInput.value)
    let tipAmount = parseFloat((bill * (percentage / 100)).toFixed(2));
    let totalBill = parseFloat((bill + tipAmount).toFixed(2));

    document.getElementById('tipAmount').innerHTML = `${tipAmount}`
    document.getElementById('percentageTip').innerHTML = `${percentage}%`
    document.getElementById('totalAmount').innerHTML = `${totalBill}`
}
calculateTip()