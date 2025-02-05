const smartChunker = (text:string) => {

    let paragraphs = text.split("\n");
    paragraphs = paragraphs.filter((paragraph) => paragraph.length > 0);
    let chunks = [];
    
    const CHUNK_LENGTH_THRESHOLD = 1000;

    const text_length = text.length;
    // console.log(text_length , paragraphs.length);
    const chunkNumber = Math.floor(text_length / CHUNK_LENGTH_THRESHOLD);

    for(let i=0; i<chunkNumber;i++)
    {
        let chunk = '';
        let chunk_length = 0;
        while(chunk_length < CHUNK_LENGTH_THRESHOLD && paragraphs.length > 0)
        {
            let paragraph = paragraphs.shift();
            chunk += paragraph + '\n';
            chunk_length += paragraph.length;
        }
        chunks.push(chunk);
    }

    return chunks;
}

const uIdGenerator = () => {
    return Math.random().toString(36).substr(2, 9);
}

export {smartChunker , uIdGenerator};