function calculateMicrostripAntenna() {
    var c = 299792458; // Speed of light in vacuum in m/s

    var frequency = parseFloat(document.getElementById('frequency').value) * Math.pow(10, 9); // Convert GHz to Hz
    var epsilon_r = parseFloat(document.getElementById('epsilon_r').value);
    var height = parseFloat(document.getElementById('height').value) / 1000; // Convert mm to m
    var Zo = parseFloat(document.getElementById('zo').value);
    var elecLengthDeg = parseFloat(document.getElementById('elecLength').value);

    var A = (Zo / 60) * Math.sqrt((epsilon_r + 1) / 2) + ((epsilon_r - 1) / (epsilon_r + 1)) * (0.23 + 0.11 / epsilon_r);
    var W = (8 * height * Math.exp(A)) / (Math.exp(2 * A) - 2); // Approximation for W based on Zo
    var epsilon_eff = (epsilon_r + 1) / 2 + (epsilon_r - 1) / 2 * (1 / Math.sqrt(1 + 12 * (height / W)));
    var L = (c / (frequency * Math.sqrt(epsilon_eff))) * (elecLengthDeg / 360); // Approximation for L based on electrical length

    document.getElementById('results').innerHTML = 
        'Width (W) = ' + (W * 1000).toFixed(6) + ' mm<br>' + 
        'Length (L) = ' + (L * 1000).toFixed(6) + ' mm<br>';
}