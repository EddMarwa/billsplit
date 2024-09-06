document.getElementById('billForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Show loading spinner
    document.getElementById('loadingSpinner').style.display = 'block';

    const amount = document.getElementById('amount').value;
    const splitType = document.getElementById('splitType').value;
    const phoneNumbers = Array.from(document.querySelectorAll('input[name="phoneNumber[]"]')).map(input => input.value);

    // Validate phone numbers
    if (phoneNumbers.some(num => !/^\d{10}$/.test(num))) {
        alert('Please enter valid 10-digit phone numbers.');
        document.getElementById('loadingSpinner').style.display = 'none';
        return;
    }

    // Validate amount
    if (amount <= 0) {
        alert('Amount must be greater than zero.');
        document.getElementById('loadingSpinner').style.display = 'none';
        return;
    }

    // Validate and process split type
    let shares = [];
    if (splitType === 'specific') {
        // Prompt user for specific shares
        const sharesInput = prompt('Enter the shares for each phone number, separated by commas (e.g., 50,50):');
        if (!sharesInput) {
            alert('Shares input was cancelled or empty.');
            document.getElementById('loadingSpinner').style.display = 'none';
            return;
        }

        shares = sharesInput.split(',').map(Number);
        if (shares.length !== phoneNumbers.length || shares.some(share => isNaN(share) || share <= 0)) {
            alert('Invalid share values. Ensure all shares are positive numbers and match the number of phone numbers.');
            document.getElementById('loadingSpinner').style.display = 'none';
            return;
        }
    } else {
        // Equal split logic
        shares = new Array(phoneNumbers.length).fill(amount / phoneNumbers.length);
    }

    // Confirm payment
    if (!confirm('Are you sure you want to proceed with these payments?')) {
        document.getElementById('loadingSpinner').style.display = 'none';
        return;
    }

    // Simulate sending data to the server
    console.log('Sending data to the server:', { phoneNumbers, amount, splitType, shares });

    // Clear form
    document.getElementById('billForm').reset();
    document.getElementById('phoneNumbersContainer').innerHTML = '<label for="phoneNumber1">Phone Number 1:</label><input type="text" id="phoneNumber1" name="phoneNumber[]" required>';

    // Hide loading spinner
    document.getElementById('loadingSpinner').style.display = 'none';

    // Show confirmation message
    alert('Your bill details have been submitted successfully!');
});

// Add more phone number fields
document.getElementById('addPhoneNumber').addEventListener('click', () => {
    const phoneNumbersContainer = document.getElementById('phoneNumbersContainer');
    const num = phoneNumbersContainer.children.length + 1;
    const newField = document.createElement('div');
    newField.innerHTML = `<label for="phoneNumber${num}">Phone Number ${num}:</label><input type="text" id="phoneNumber${num}" name="phoneNumber[]" required>`;
    phoneNumbersContainer.appendChild(newField);
});
