function convertToUSD() {
    var cadInput = document.getElementById('cadInput').value;
    // Check for valid input
    if (!cadInput || isNaN(cadInput)) {
        alert("Please enter a valid amount in CAD.");
        return;
    }
    var cadAmount = parseFloat(cadInput);
    var rate = 0.75; // Hardcoded exchange rate
    var usdAmount = cadAmount * rate;
    document.getElementById('result').innerHTML = cadAmount.toFixed(3) + ' CAD is equal to ' + usdAmount.toFixed(3) + ' USD.';
}

function convertToCAD() {
    var usdInput = document.getElementById('usdInput').value;
    // Check for valid input
    if (!usdInput || isNaN(usdInput)) {
        alert("Please enter a valid amount in USD.");
        return;
    }
    var usdAmount = parseFloat(usdInput);
    var rate = 1.33; // Hardcoded exchange rate
    var cadAmount = usdAmount * rate;
    document.getElementById('result').innerHTML = usdAmount.toFixed(3) + ' USD is equal to ' + cadAmount.toFixed(3) + ' CAD.';
}
