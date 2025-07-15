const message = document.getElementById('msg-quote');
const img = document.getElementById('chuck-img');
const btn = document.getElementById('new-joke')

btn.addEventListener('click',
    async function GetJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();

            const joke = data.value;
            const image = data.icon_url;

            message.textContent = joke;
            img.src = image;

        } catch (error) {
            throw error(error);
        }
    }
)
