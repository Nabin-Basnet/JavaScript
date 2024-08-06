const form = document.getElementById('myForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const message = document.getElementById('message');

        // Form submit event
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from actually submitting
            message.textContent = 'Form submitted! Name: ' + nameInput.value + ', Email: ' + emailInput.value;
        });

        // Form reset event
        form.addEventListener('reset', () => {
            message.textContent = 'Form reset!';
        });

        // Input change event
        nameInput.addEventListener('change', () => {
            message.textContent = 'Name changed to: ' + nameInput.value;
        });

        emailInput.addEventListener('change', () => {
            message.textContent = 'Email changed to: ' + emailInput.value;
        });

        // Input event
        nameInput.addEventListener('input', () => {
            message.textContent = 'Name input: ' + nameInput.value;
        });

        emailInput.addEventListener('input', () => {
            message.textContent = 'Email input: ' + emailInput.value;
        });

        // Focus event
        nameInput.addEventListener('focus', () => {
            message.textContent = 'Name input focused';
        });

        emailInput.addEventListener('focus', () => {
            message.textContent = 'Email input focused';
        });

        // Blur event
        nameInput.addEventListener('blur', () => {
            message.textContent = 'Name input blurred';
        });

        emailInput.addEventListener('blur', () => {
            message.textContent = 'Email input blurred';
        });