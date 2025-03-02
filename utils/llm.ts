import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

async function chatWithAI(messages: Message[]): Promise<string> {
  const API_KEY = process.env.AZURE_AI_KEY;
  const API_URL = process.env.AZURE_OPENAI_ENDPOINT;

  const requestBody = {
    messages,
    temperature: 1,
    max_completion_tokens: 64000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error details:', error);
    throw error;
  }
}

export default async function LlmHandler(raw_text: string) {
  const messages: Message[] = [
    {
      role: "user",
      content: String.raw`You are a Document Structure Analyzer that converts text into structured JSON format. Your task is to analyze semantic structure, identify hierarchies, and categorize content types with precise depth tracking.

CONTENT CATEGORIES:
- TITLE: Main document title (only one per document)
- H1, H2, H3: Hierarchical headings
- BODY_TEXT: Standard paragraph text
- LIST_BULLET_WITH_TITLE: Bulleted list where each item has a title and description
- LIST_NUMBERED_WITH_TITLE: Numbered list where each item has a title and description
- LIST_BULLET_WITHOUT_TITLE: Simple bulleted list with string items
- LIST_NUMBERED_WITHOUT_TITLE: Simple numbered list with string items
- BLOCKQUOTE: Quoted text with optional source attribution
- TABLE_HEADER: Column definitions for tables
- TABLE_CONTENT: Data rows for tables
- FIGURE: Image or diagram references
- CODE_BLOCK: Code snippets with language identification

DEPTH TRACKING:
- Depth 0: Document root level
- Depth 1: Top-level sections (TITLE, primary H1 headings)
- Depth 2: Content directly under top-level sections
- Depth 3+: Nested content with increasing depth values
- Each element's depth should reflect its nesting level in the document hierarchy

OUTPUT STRUCTURE REQUIREMENTS:
1. Each segment must follow this exact structure:
   {
     "id": "unique_identifier",
     "category": "CATEGORY_NAME",
     "content": {
       // Content structure varies by category:
       
       // For LIST_*_WITH_TITLE:
       "items": [
         { "title": "Item Title", "description": "Item Description" },
         // Additional items...
       ]
       
       // For LIST_*_WITHOUT_TITLE:
       "items": ["Item text", "Another item text"]
       
       // For TABLE_HEADER:
       "columns": ["Column 1", "Column 2", "Column 3"],
       "alignment": ["left", "center", "right"]
       
       // For TABLE_CONTENT:
       "rows": [
         ["Data 1", "Data 2", "Data 3"],
         ["Data 4", "Data 5", "Data 6"]
       ]
       
       // For other text-based categories:
       "text": "The actual content text"
     },
     "relationships": {
       "parent": "parent_id", // ID of parent element (or null for root)
       "children": ["child_id_1", "child_id_2"], // IDs of child elements
       "siblings": ["sibling_id_1", "sibling_id_2"], // IDs of adjacent elements
       "references": ["reference_id_1", "reference_id_2"] // IDs of referenced elements
     },
     "metadata": {
       "depth": 2, // Numeric depth level in document hierarchy
       "sequence": 3 // Sequential position in document flow
     }
   }

2. Document structure must begin with metadata and segments array
3. IDs should be semantic and follow the pattern: category_sequential_number (e.g., h1_001, table_content_002)
4. Parent-child relationships must be consistent with depth values
5. Sequential numbering must follow document flow`
    },
    {
      role: "user",
      content: String.raw`RAW_TEXT: ${raw_text}

INSTRUCTIONS:
1. Analyze the entire text document
2. Categorize content into logical segments following the specified structure
3. Track hierarchical relationships with accurate depth values
4. Ensure each element follows the exact structure format
5. Return a complete JSON with proper nesting and relationships

OUTPUT FORMAT:
{
  "document_metadata": {
    "type": "structured_document",
    "version": "1.0",
    "timestamp": "ISO-timestamp",
    "language": "detected-language",
    "status": "complete"
  },
  "segments": [
    // Array of segment objects following the required structure
  ]
}

IMPORTANT REMINDERS:
- LIST_WITH_TITLE categories must use objects with {title, description} format
- LIST_WITHOUT_TITLE categories must use simple string arrays
- Depth values must accurately reflect hierarchical nesting
- Each segment must include complete relationships and metadata
- Table structures must separate headers and content into distinct segments
- Generate and track all relationships (parent, children, siblings, references)`
    }
  ];

  try {
    const response = await chatWithAI(messages);
    
    console.log('Assistant:', response);
    try {
      // Try to extract JSON if it's wrapped in code blocks
      const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/) || 
                       response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[1] || jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (error) {
      console.error('Failed to parse JSON response:', error);
      throw error;
    }
  } catch (error) {
    console.error('Failed to get response:', error);
    throw error;
  }
}



export async function LLMEvaluator(input_json: Object, previous_json: Object) {
  const client = ModelClient(
    "https://ai-saashub485614076288.services.ai.azure.com/models",
    new AzureKeyCredential(process.env.AZURE_AI_KEY)
  );

  // Determine if this is the first chunk by checking if previous_json is empty
  const isFirstChunk = Object.keys(previous_json).length === 0;

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        {
          role: "system",
          content: `
You are a Document Structure Validator. Your task is to evaluate the JSON structure generated from raw text and ensure it adheres to specified content categories and relationship types.

**Content Categories:**
- TITLE, H1, H2, H3, BODY_TEXT, LIST_BULLET_WITH_TITLE, LIST_NUMBERED_WITH_TITLE, LIST_BULLET_WITHOUT_TITLE, LIST_NUMBERED_WITHOUT_TITLE, BLOCKQUOTE, TABLE_HEADER, TABLE_CONTENT, FIGURE, CODE_BLOCK

**Relationship Types:**
- parent, siblings, children, references

**Validation Rules:**
1. **List Integrity:**
   - 'WITH_TITLE' lists must have items with both 'title' and 'description' fields.
   - 'WITHOUT_TITLE' lists must have simple string items.
   - Lists must maintain consistent parent-child relationships and depth.

2. **Hierarchy Validation:**
   - Headings must follow a logical progression (e.g., H1 > H2, not H1 > H3).
   - Depth metadata must align with the hierarchy.

3. **Global Structure:**
   - Tables must have matching columns and rows.
   - Code blocks must specify a language.
   - All segments must include complete metadata.

**Analysis Instructions:**
- Compare the JSON structure with the raw text to verify accurate categorization and content.
- Validate relationships (parent, siblings, children, references) for consistency.
- If 'previous_chunk_JSON' is an empty object, treat this as the first chunk. Otherwise, ensure continuity with the previous chunk's JSON.

**Output Format:**
Generate a JSON object with the following structure:
{
  "validation_report": {
    "list_analysis": {
      "with_title": {
        "count": <number>,
        "errors": {
          "missing_description": <number>,
          "invalid_items": <number>
        }
      },
      "without_title": {
        "count": <number>,
        "errors": {
          "object_items": <number>,
          "mixed_types": <number>
        }
      }
    },
    "hierarchy_analysis": {
      "depth_violations": [
        {"from": <number>, "to": <number>}
      ],
      "orphaned_headings": <number>
    },
    "global_analysis": {
      "table_errors": <number>,
      "code_block_errors": <number>
    },
    "total_score": {
      "value": "<percentage>%",
      "thresholds": {
        "pass": "≥70%",
        "review": "60-69%",
        "fail": "<60%"
      }
    }
  },
  "suggestions": [
    {"issue": "<string>", "suggestion": "<string>"}
  ]
}
`
        },
        {
          role: "user",
          content: `
**INPUT:**
{
  "json_structure": ${JSON.stringify(input_json)},
  "previous_chunk_JSON": ${JSON.stringify(previous_json)}
}

Please evaluate the JSON structure according to the validation rules and provide a validation report and suggestions in the specified JSON format.
`
        }
      ],
      model: "Llama-3.3-70B-Instruct",
      response_format: { type: "json_object" }
    }
  });

  // Handle unexpected responses
  if (isUnexpected(response)) {
    console.error("Error in LLM response:", response.body);
    throw new Error("Failed to evaluate JSON structure");
  }

  // Parse the JSON response
  const json_response = JSON.parse(response.body.choices[0].message.content);
  const accuracy = json_response.validation_report.total_score.value.replace("%", "");
  const validation_report = json_response.validation_report;
  const suggestions = json_response.suggestions;

  console.log("Validation Report:", validation_report);
  return { accuracy, validation_report, suggestions };
}
