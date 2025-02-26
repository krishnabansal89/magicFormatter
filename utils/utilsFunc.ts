const smartChunker = (text: string) => {
    const paragraphs = text.split("\n").filter(paragraph => paragraph.length > 0);
    const chunks: string[] = [];
    const CHUNK_LENGTH_THRESHOLD = 1000;

    let currentChunk: string[] = [];
    let currentLength = 0;

    for (const paragraph of paragraphs) {
        const paragraphLength = paragraph.length;
        // Calculate new length including the newline character after the paragraph
        const newLineLength = currentChunk.length > 0 ? 1 : 0; // Only add a newline if there's a previous paragraph
        const potentialLength = currentLength + paragraphLength + newLineLength;

        if (potentialLength > CHUNK_LENGTH_THRESHOLD) {
            if (currentChunk.length > 0) {
                // Finalize the current chunk
                chunks.push(currentChunk.join('\n') + '\n');
                currentChunk = [];
                currentLength = 0;
            }
            // Check if the current paragraph alone exceeds the threshold (including its trailing newline)
            if (paragraphLength + 1 > CHUNK_LENGTH_THRESHOLD) {
                // Add as a single chunk despite exceeding the threshold
                chunks.push(paragraph + '\n');
            } else {
                // Start new chunk with this paragraph
                currentChunk.push(paragraph);
                currentLength = paragraphLength + 1; // Include newline
            }
        } else {
            // Add paragraph to the current chunk
            currentChunk.push(paragraph);
            currentLength += paragraphLength + newLineLength; // Add paragraph and possible newline
        }
    }

    // Add any remaining paragraphs in the current chunk
    if (currentChunk.length > 0) {
        chunks.push(currentChunk.join('\n') + '\n');
    }
    console.log(chunks);

    return chunks;
};

const uIdGenerator = () => {
    return Math.random().toString(36).substr(2, 9);
}

type StyleProperty = {
  [key: string]: string | number | boolean | null;
};

type StyleConfig = {
  [styleType: string]: StyleProperty;
};

function updateStyleConfig(
    baseConfig: StyleConfig,
    customConfig: StyleConfig
  ): StyleConfig {
    // Create a deep copy of the base config to avoid mutating the original
    const updatedConfig: StyleConfig = JSON.parse(JSON.stringify(baseConfig));
    
    // Iterate through each style type in the custom config
    Object.keys(customConfig).forEach((styleType) => {
      // Skip if the style type doesn't exist in the base config
      if (!updatedConfig[styleType]) {
        console.warn(`Style type "${styleType}" not found in base configuration`);
        return;
      }
      
      // Get the custom properties for this style type
      const customProps = customConfig[styleType];
      
      // Update each property that exists in the custom config
      Object.keys(customProps).forEach((propKey) => {
        // Convert string values to numbers where appropriate
        let value = customProps[propKey];
        
        // If the base property is a number and the custom value is a string number, convert it
        if (
          typeof updatedConfig[styleType][propKey] === 'number' && 
          typeof value === 'string' && 
          !isNaN(Number(value))
        ) {
          value = Number(value);
        }
        
        // Update the property
        updatedConfig[styleType][propKey] = value;
      });
    });
    return updatedConfig;
  }
  
  

export {smartChunker , uIdGenerator , updateStyleConfig , StyleConfig};