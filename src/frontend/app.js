document.getElementById('billForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;
    const splitType = document.getElementById('splitType').value;

    // Handle the form data here (e.g., send it to the server)
    console.log({ phoneNumber, amount, splitType });
});
