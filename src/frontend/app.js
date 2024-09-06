document.getElementById('billForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Show loading spinner
    document.getElementById('loadingSpinner').style.display = 'block';

    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;
    const splitType = document.getElementById('splitType').value;

    // Validate phone number format (basic example)
    if (!/^\d{10}$/.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        document.getElementById('loadingSpinner').style.display = 'none';
        return;
    }

    // Validate amount
    if (amount <= 0) {
        alert('Amount must be greater than zero.');
        document.getElementById('loadingSpinner').style.display = 'none';
        return;
    }

    // Simulate sending data to the server
    console.log('Sending data to the server:', { phoneNumber, amount, splitType });

    // Clear form
    document.getElementById('billForm').reset();

    // Hide loading spinner
    document.getElementById('loadingSpinner').style.display = 'none';

    // Show confirmation message
    alert('Your bill details have been submitted successfully!');
});
