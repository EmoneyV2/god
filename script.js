document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const answers = {
            question1: document.querySelector('input[name="question1"]:checked').value,
            question2: document.querySelector('input[name="question2"]:checked').value,
            question3: document.querySelector('input[name="question3"]:checked').value,
            question4: document.querySelector('input[name="question4"]:checked').value,
            question5: document.querySelector('input[name="question5"]:checked').value,
            question6: document.querySelector('input[name="question6"]:checked').value,
            question7: document.querySelector('input[name="question7"]:checked').value,
            question8: document.querySelector('input[name="question8"]:checked').value
        };

        const godMap = {
            'Athena': Array.from({ length: 100 }, (_, i) => i), // Represents combinations 0 to 99
            'Artemis': Array.from({ length: 100 }, (_, i) => i + 100), // Represents combinations 100 to 199
            'Aphrodite': Array.from({ length: 100 }, (_, i) => i + 200), // Represents combinations 200 to 299
            'Poseidon': Array.from({ length: 100 }, (_, i) => i + 300), // Represents combinations 300 to 399
            'Zeus': Array.from({ length: 100 }, (_, i) => i + 400), // Represents combinations 400 to 499
            'Ares': Array.from({ length: 100 }, (_, i) => i + 500), // Represents combinations 500 to 599
            'Hera': Array.from({ length: 100 }, (_, i) => i + 600), // Represents combinations 600 to 699
            'Hades': Array.from({ length: 100 }, (_, i) => i + 700), // Represents combinations 700 to 799
            'Apollo': Array.from({ length: 100 }, (_, i) => i + 800) // Represents combinations 800 to 899
        };

        const godDescriptions = {
            'Athena': 'Athena is the goddess of wisdom, courage, inspiration, civilization, law and justice, People who get Athena are usually strong minded and patient',
            'Artemis': 'Artemis is the goddess of the hunt, wilderness, childbirth, virginity, People who get Artemis usually enjoy nature and love caring for others.',
            'Aphrodite': 'Aphrodite is the goddess of love, beauty, pleasure, passion, People who get Aphrodite are usually the fairest of them all and beleive in self care more than anything else.',
            'Poseidon': 'Poseidon is the god of the sea, earthquakes, and horses, People who get posedion are very fluid with their life and beleive all people are equal',
            'Zeus': 'Zeus is the god of the sky, lightning, thunder, law, order, and justice, People who get Zeus are natural born leaders and protectors of the ones they love',
            'Ares': 'Ares is the god of war, violence, bloodshed, and manly virtues, People who get Ares tend to put strength over everything',
            'Hera': 'Hera is the goddess of marriage, women, childbirth, and family, People who get Hera are family oriented and believe in protecting their people before anyone else',
            'Hades': 'Hades is the god of the dead and the king of the underworld, People who get Hades tend to keep to themselves but are still very intelligent.',
            'Apollo': 'Apollo is the god of music, arts, knowledge, healing, plague, prophecy, People who get Apollo can be considered self centered yet still kind'
        };

        const godImages = {
            'Athena': 'Athena.jpg',
            'Artemis': 'Artemis.jpg',
            'Aphrodite': 'Aphrodite.jpg',
            'Poseidon': 'Poseidon.jpg',
            'Zeus': 'Zeus.jpg',
            'Ares': 'Ares.jpg',
            'Hera': 'Hera.jpg',
            'Hades': 'Hades.jpg',
            'Apollo': 'Apollo.jpg'
        };

        let result;

        const index = Object.values(answers).reduce((sum, answer, i) => {
            return sum + (answer.charCodeAt(0) - 97) * Math.pow(2, i);
        }, 0);

        for (const [deity, combinations] of Object.entries(godMap)) {
            if (combinations.includes(index)) {
                result = {
                    name: deity,
                    description: godDescriptions[deity] || 'No description available',
                    image: godImages[deity] || 'placeholder.jpg'
                };
                break;
            }
        }

        if (!result) {
            result = { name: 'Unknown', description: 'You possess traits of multiple gods and goddesses!', image: 'placeholder.jpg' };
        }

        const godImage = document.getElementById('god-image');
        godImage.src = result.image;
        godImage.alt = result.name;

        document.getElementById('god-name').textContent = `You are ${result.name}, the Greek god/goddess!`;
        document.getElementById('god-description').textContent = result.description;

        document.getElementById('result').style.display = 'block';
        document.getElementById('quiz-form').style.display = 'none';
    });
});
