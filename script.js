const message = document.getElementById('msg-quote');
const img = document.getElementById('chuck-img');
const btn = document.getElementById('new-joke')

btn.addEventListener('click',
    async function () {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();

            const joke = data.value;
            const image = data.icon_url;

            const translatedJoke = await translateToSpanish(joke);

            message.textContent = translatedJoke;
            img.src = image;

        } catch (error) {
            console.error(error);
        }
    }
)

async function translateToSpanish(text) {
    try {

        const encodedText = encodeURIComponent(text);

        const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=en|es`;


        const response = await fetch(url);
        const data = await response.json();


        return data.responseData.translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        return text; //In case of any error you get the original text.
    }
}