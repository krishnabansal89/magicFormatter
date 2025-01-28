const smartChunker = (text:string) => {

    const paragraphs = text.split('\n');
    let chunks = [];
    
    const CHUNK_LENGTH_THRESHOLD = 1000;

    const text_length = text.length;
    const chunkNumber = Math.floor(text_length / CHUNK_LENGTH_THRESHOLD);

    for(let i=0; i<=chunkNumber;i++)
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