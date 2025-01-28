import { AzureOpenAI } from "openai";

const deployment = "gpt-4o";
const apiVersion = "2024-08-01-preview";
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const client = new AzureOpenAI({
  endpoint: endpoint,
  apiKey: apiKey,
  deployment,
  apiVersion,
});

const previous_json = {
  document_metadata: {
    type: "technical_documentation",
    version: "1.0",
    generated_timestamp: "2023-10-01T10:00:00Z",
    completion_status: "in_progress",
  },
  segments: [
    {
      id: "title_001",
      category: "TITLE",
      content: "Quantum Computing Fundamentals",
      relationships: {
        parent: null,
        children: ["h1_001", "h1_002", "h1_003", "h1_004", "h1_005", "h1_006"],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 0,
        sequence: 1,
      },
    },
    {
      id: "h1_001",
      category: "H1",
      content: "Key Differences from Classical Computing",
      relationships: {
        parent: "title_001",
        children: ["h2_001", "h2_002", "h2_003"],
        siblings: ["h1_002", "h1_003", "h1_004", "h1_005", "h1_006"],
        references: [],
      },
      metadata: {
        depth: 1,
        sequence: 2,
      },
    },
    {
      id: "h2_001",
      category: "H2",
      content: "Superposition",
      relationships: {
        parent: "h1_001",
        children: [],
        siblings: ["h2_002", "h2_003"],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 3,
      },
    },
    {
      id: "body_001",
      category: "BODY_TEXT",
      content:
        "A qubit can exist in multiple states simultaneously unlike classical bits.",
      relationships: {
        parent: "h2_001",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 3,
        sequence: 4,
      },
    },
    {
      id: "h2_002",
      category: "H2",
      content: "Entanglement",
      relationships: {
        parent: "h1_001",
        children: [],
        siblings: ["h2_001", "h2_003"],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 5,
      },
    },
    {
      id: "body_002",
      category: "BODY_TEXT",
      content:
        "Qubits can be linked so the state of one directly affects another.",
      relationships: {
        parent: "h2_002",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 3,
        sequence: 6,
      },
    },
    {
      id: "h2_003",
      category: "H2",
      content: "Interference",
      relationships: {
        parent: "h1_001",
        children: [],
        siblings: ["h2_001", "h2_002"],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 7,
      },
    },
    {
      id: "body_003",
      category: "BODY_TEXT",
      content: "Quantum states can constructively/destructively interfere.",
      relationships: {
        parent: "h2_003",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 3,
        sequence: 8,
      },
    },
    {
      id: "h1_002",
      category: "H1",
      content: "Practical Applications",
      relationships: {
        parent: "title_001",
        children: ["h2_004", "h2_005", "h2_006"],
        siblings: ["h1_001", "h1_003", "h1_004", "h1_005", "h1_006"],
        references: [],
      },
      metadata: {
        depth: 1,
        sequence: 9,
      },
    },
    {
      id: "h2_004",
      category: "H2",
      content: "Cryptography",
      relationships: {
        parent: "h1_002",
        children: ["list_001"],
        siblings: ["h2_005", "h2_006"],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 10,
      },
    },
    {
      id: "list_001",
      category: "LIST_BULLET",
      content: [
        "Breaking current encryption protocols",
        "Developing quantum-safe encryption",
      ],
      relationships: {
        parent: "h2_004",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 3,
        sequence: 11,
      },
    },
    {
      id: "h2_005",
      category: "H2",
      content: "Drug Discovery",
      relationships: {
        parent: "h1_002",
        children: ["list_002"],
        siblings: ["h2_004", "h2_006"],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 12,
      },
    },
    {
      id: "list_002",
      category: "LIST_BULLET",
      content: [
        "Simulating molecular interactions",
        "Accelerating pharmaceutical research",
      ],
      relationships: {
        parent: "h2_005",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 3,
        sequence: 13,
      },
    },
    {
      id: "h2_006",
      category: "H2",
      content: "Optimization Problems",
      relationships: {
        parent: "h1_002",
        children: ["list_003"],
        siblings: ["h2_004", "h2_005"],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 14,
      },
    },
    {
      id: "list_003",
      category: "LIST_BULLET",
      content: [
        "Solving logistics routing",
        "Financial portfolio optimization",
      ],
      relationships: {
        parent: "h2_006",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 3,
        sequence: 15,
      },
    },
    {
      id: "h1_003",
      category: "H1",
      content: "Challenges in Implementation",
      relationships: {
        parent: "title_001",
        children: ["list_004"],
        siblings: ["h1_001", "h1_002", "h1_004", "h1_005", "h1_006"],
        references: [],
      },
      metadata: {
        depth: 1,
        sequence: 16,
      },
    },
    {
      id: "list_004",
      category: "LIST_BULLET",
      content: [
        "Error Rates: Current qubits have high error rates requiring error correction",
        "Temperature Requirements: Most systems require near-absolute zero temperatures",
        "Cost: Average quantum computer costs $10-15 million",
      ],
      relationships: {
        parent: "h1_003",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 17,
      },
    },
    {
      id: "h1_004",
      category: "H1",
      content: "Sample Qubit Types",
      relationships: {
        parent: "title_001",
        children: ["list_005"],
        siblings: ["h1_001", "h1_002", "h1_003", "h1_005", "h1_006"],
        references: [],
      },
      metadata: {
        depth: 1,
        sequence: 18,
      },
    },
    {
      id: "list_005",
      category: "LIST_BULLET",
      content: [
        "Photonic qubits",
        "Superconducting qubits",
        "Trapped ion qubits",
      ],
      relationships: {
        parent: "h1_004",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 19,
      },
    },
    {
      id: "h1_005",
      category: "H1",
      content: "Code Example (Pseudocode)",
      relationships: {
        parent: "title_001",
        children: ["code_001"],
        siblings: ["h1_001", "h1_002", "h1_003", "h1_004", "h1_006"],
        references: [],
      },
      metadata: {
        depth: 1,
        sequence: 20,
      },
    },
    {
      id: "code_001",
      category: "CODE_BLOCK",
      content: "initialize qubit\napply Hadamard gate\nmeasure result",
      relationships: {
        parent: "h1_005",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 21,
        language: "pseudocode",
      },
    },
    {
      id: "h1_006",
      category: "H1",
      content: "Next Steps for Developers",
      relationships: {
        parent: "title_001",
        children: ["list_006"],
        siblings: ["h1_001", "h1_002", "h1_003", "h1_004", "h1_005"],
        references: [],
      },
      metadata: {
        depth: 1,
        sequence: 22,
      },
    },
    {
      id: "list_006",
      category: "LIST_BULLET",
      content: [
        "Learn quantum programming frameworks like Qiskit",
        "Experiment with cloud-based quantum processors",
        "Stay updated on quantum-resistant algorithms",
      ],
      relationships: {
        parent: "h1_006",
        children: [],
        siblings: [],
        references: [],
      },
      metadata: {
        depth: 2,
        sequence: 23,
      },
    },
  ],
  document_flow: {
    type: "hierarchical",
    flow_sequence: [
      "title_001",
      "h1_001",
      "h2_001",
      "body_001",
      "h2_002",
      "body_002",
      "h2_003",
      "body_003",
      "h1_002",
      "h2_004",
      "list_001",
      "h2_005",
      "list_002",
      "h2_006",
      "list_003",
      "h1_003",
      "list_004",
      "h1_004",
      "list_005",
      "h1_005",
      "code_001",
      "h1_006",
      "list_006",
    ],
    semantic_groups: {
      differences_from_classical_computing: [
        "h1_001",
        "h2_001",
        "h2_002",
        "h2_003",
      ],
      practical_applications: ["h1_002", "h2_004", "h2_005", "h2_006"],
      implementation_challenges: ["h1_003"],
      qubit_types: ["h1_004", "list_005"],
      developer_guidance: ["h1_006", "list_006"],
    },
  },
};

const current_raw_text = String.raw`

Hardware Architectures
Current quantum computers use various physical implementations:

Qubit Type	Leading Company	Qubit Count (2023)	Error Rate
Superconducting	IBM	433	0.1%
Photonic	Xanadu	216	0.05%
Trapped Ion	Quantinuum	32	0.01%
Software Stack
Essential tools for quantum development:

Programming Languages:
• Qiskit (Python)
• Quil (Rigetti)
• Cirq (Google)

Simulators:
• AWS Braket
• Microsoft QDK

Case Study: Drug Discovery
Applied to COVID-19 research:

Modeled spike protein interactions

Simulated 1.2M molecular combinations

Reduced computation time from 18 months → 3 days

Current Research Frontiers

Error Correction:
Surface code implementations
Fault-tolerant designs

Hybrid Algorithms:
Quantum machine learning
Optimization-enhanced AI

Ethical Considerations

Cryptographic vulnerabilities

Quantum supremacy risks

Environmental impact of cooling systems

`;
export default async function LlmHandler(
  current_raw_text: string,
  previous_json: Object
) {
  const response = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: String.raw`
        You are a Document Structure Analyzer trained to convert raw text into structured JSON format. Your role is to:
  
  1. Analyze the semantic structure of input text
  2. Identify hierarchical relationships between content segments
  3. Categorize content types (headings, paragraphs, lists, etc.)
  4. Generate a structured JSON output that preserves:
     - Content hierarchy
     - Semantic relationships
     - Document flow
     - Content categorization
  
  Content Categories:
  - TITLE
  - H1, H2, H3 (heading levels)
  - BODY_TEXT
  - LIST_BULLET
  - LIST_NUMBERED
  - BLOCKQUOTE
  - TABLE_HEADER
  - TABLE_CONTENT
  - FIGURE
  - CODE_BLOCK
  
  Relationship Types:
  - parent: ID of parent segment
  - siblings: Array of IDs at same level
  - children: Array of IDs of nested content
  - references: Cross-references to other segments
  
  PROCESSING STRATEGY:
  - Handle documents processed in multiple chunks
  - Maintain consistent document structure across chunks
  - Preserve semantic integrity and relationship hierarchies
  
  GLOBAL DOCUMENT CONSTRAINTS:
  1. Ensure single document title throughout processing
  2. Maintain consistent hierarchical relationships
  3. Track document progression across chunks
  4. Update existing JSON structure incrementally
  
  CHUNK PROCESSING RULES:
  - First chunk establishes document metadata
  - Subsequent chunks extend existing structure
  - Preserve original document context
  - Validate structural consistency between chunks
  
  CONTEXT PRESERVATION MECHANISMS:
  - Use previous chunk's JSON as context reference
  - Detect and prevent duplicate segments
  - Maintain continuous sequence and depth tracking
  - Update relationship mappings dynamically
  
  UNIQUE IDENTIFIER MANAGEMENT:
  - Generate consistent segment IDs
  - Prevent ID collisions across chunks
  - Ensure cross-chunk referencing capabilities
  
  OUTPUT REQUIREMENTS:
  - Provide complete, updated JSON after each chunk
  - Include progress metadata
  - Mark document completion status
  
  
  Your output must strictly follow the provided JSON schema and maintain document integrity while capturing semantic structure.
   `,
      },
      {
        role: "user",
        content: String.raw`
       INPUT: current document chunk ${current_raw_text}
       PREVIOUS_CONTEXT_JSON : ${JSON.stringify(previous_json)}
  
  INSTRUCTIONS:
  1. Analyze the provided text
  2. Break it into logical segments
  3. Identify relationships between segments
  4. Categorize each segment
  5. Generate JSON output following the schema:
     - Preserve hierarchy
     - Maintain content flow
     - Include all relationships
     - Add appropriate metadata
  
  PROCESSING INSTRUCTIONS:
     - Analyze current chunk in context of previous processing
     - If previous JSON is missing or incomplete, start fresh
     - Extend existing document structure
     - Maintain semantic relationships
     - Preserve original document intent
  
  TERMINATION CONDITIONS:
  - All segments must be logically connected
  - Maintain hierarchical integrity
  
  
  OUTPUT FORMAT: Structured JSON with clear segment categorization and relationships
        `,
      },
      {
        role: "assistant",
        content: String.raw`
        Assistant Template
  
  {
    "document_metadata": {
      "type": "technical_documentation",
      "version": "1.0",
      "generated_timestamp": "2025-01-13T10:30:00Z"
    },
    "segments": [
      {
        "id": "doc_title_001",
        "category": "TITLE",
        "content": "Vastu Guidelines for Home Design",
        "relationships": {
          "parent": null,
          "children": ["section_001", "section_002"],
          "siblings": [],
          "references": []
        },
        "metadata": {
          "depth": 0,
          "sequence": 1
        }
      },
      {
        "id": "section_001",
        "category": "H1",
        "content": "General Orientation",
        "relationships": {
          "parent": "doc_title_001",
          "children": ["subsection_001", "subsection_002"],
          "siblings": ["section_002"],
          "references": []
        },
        "metadata": {
          "depth": 1,
          "sequence": 2
        }
      },
      {
        "id": "subsection_001",
        "category": "LIST_BULLET",
        "content": {
          "items": [
            {
              "title": "Main Entrance",
              "description": "Preferably in the north, east, or northeast direction"
            },
            {
              "title": "Living Room",
              "description": "Should ideally be in the northeast, north, or east"
            }
          ]
        },
        "relationships": {
          "parent": "section_001",
          "children": [],
          "siblings": ["subsection_002"],
          "references": []
        },
        "metadata": {
          "depth": 2,
          "sequence": 3,
          "list_type": "bullet"
        }
      }
    ],
    "document_flow": {
      "type": "hierarchical",
      "flow_sequence": ["doc_title_001", "section_001", "subsection_001"],
      "semantic_groups": {
        "orientation_guidelines": ["section_001", "subsection_001"],
        "room_placement": ["section_002"]
      }
    }
  }
          `,
      },
    ],
    max_tokens: 16384,
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });
  return response;
}
