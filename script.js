document.addEventListener('DOMContentLoaded', function () {
    // Get references to the buttons and messages
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    const message3 = document.getElementById('message3');

    // Function to change button color on click
    function changeColor(event) {
        event.target.style.backgroundColor = 'lightblue';
    }

    // Function to display a message when mouse is over the button
    function showMessage(event) {
        const message = document.getElementById('message' + event.target.id.charAt(event.target.id.length - 1));
        message.style.display = 'block';
    }

    // Function to hide the message when mouse leaves the button
    function hideMessage(event) {
        const message = document.getElementById('message' + event.target.id.charAt(event.target.id.length - 1));
        message.style.display = 'none';
    }

    // Function to hide the button on double-click
    function hideButton(event) {
        event.target.style.display = 'none';
    }

    // Attach event listeners to each button
    button1.addEventListener('click', changeColor);
    button1.addEventListener('mouseover', showMessage);
    button1.addEventListener('mouseout', hideMessage);
    button1.addEventListener('dblclick', hideButton);

    button2.addEventListener('click', changeColor);
    button2.addEventListener('mouseover', showMessage);
    button2.addEventListener('mouseout', hideMessage);
    button2.addEventListener('dblclick', hideButton);

    button3.addEventListener('click', changeColor);
    button3.addEventListener('mouseover', showMessage);
    button3.addEventListener('mouseout', hideMessage);
    button3.addEventListener('dblclick', hideButton);
});
