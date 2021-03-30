


 const getGifs = async(categoria)=>{

    try {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=ATPfkfhaLp9yPC0iPbss4sbZ1CJ8hzkp&q=${encodeURI(categoria)}&limit=20`
        const {data} = await (await fetch(url)).json()

        const gifs = data.map(gif =>{
            const {id, title} = gif;
            const {url} = gif.images?.downsized_medium;

            return{
                id,
                title,
                url
            }
        })


        return gifs;

    } catch (error) {
        console.log(error);
    }
}


export default getGifs;