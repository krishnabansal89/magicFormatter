import { AzureOpenAI } from "openai";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

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
  previous_json: Object,
  revisedModel: boolean,
  violations?: Object,
  improvements?: Object,
) {
  // console.log("LlmHandler\n\n");
  // console.log("current_raw_text\n\n", current_raw_text);
  // console.log("previous_json\n\n", previous_json);
  if (!revisedModel) {
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
  
  ${JSON.stringify({
    document_metadata: {
      type: "technical_documentation",
      version: "1.0",
      generated_timestamp: "2025-02-05T10:30:00Z",
      language: "en",
      processing_status: "complete",
    },
    segments: [
      {
        id: "title_001",
        category: "TITLE",
        content: "Complete Documentation Structure Example",
        relationships: {
          parent: null,
          children: ["h1_001", "h1_002"],
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
        content: "First Main Section",
        relationships: {
          parent: "title_001",
          children: ["h2_001", "body_001", "list_bullet_001"],
          siblings: ["h1_002"],
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
        content: "Subsection Example",
        relationships: {
          parent: "h1_001",
          children: ["h3_001", "body_002"],
          siblings: [],
          references: [],
        },
        metadata: {
          depth: 2,
          sequence: 3,
        },
      },
      {
        id: "h3_001",
        category: "H3",
        content: "Detailed Level Section",
        relationships: {
          parent: "h2_001",
          children: ["body_003"],
          siblings: [],
          references: [],
        },
        metadata: {
          depth: 3,
          sequence: 4,
        },
      },
      {
        id: "body_001",
        category: "BODY_TEXT",
        content:
          "This is a standard paragraph of body text that demonstrates proper content structure.",
        relationships: {
          parent: "h1_001",
          children: [],
          siblings: ["list_bullet_001"],
          references: [],
        },
        metadata: {
          depth: 2,
          sequence: 5,
        },
      },
      {
        id: "list_bullet_001",
        category: "LIST_BULLET",
        content: {
          items: [
            {
              title: "First Bullet Point",
              description: "Detailed explanation of the first bullet point",
            },
            {
              title: "Second Bullet Point",
              description: "Detailed explanation of the second bullet point",
            },
          ],
        },
        relationships: {
          parent: "h1_001",
          children: [],
          siblings: ["body_001"],
          references: [],
        },
        metadata: {
          depth: 2,
          sequence: 6,
        },
      },
      {
        id: "list_numbered_001",
        category: "LIST_NUMBERED",
        content: {
          items: [
            {
              title: "First Step",
              description: "Detailed explanation of step one",
            },
            {
              title: "Second Step",
              description: "Detailed explanation of step two",
            },
          ],
        },
        relationships: {
          parent: "h1_002",
          children: [],
          siblings: [],
          references: [],
        },
        metadata: {
          depth: 2,
          sequence: 7,
        },
      },
      {
        id: "blockquote_001",
        category: "BLOCKQUOTE",
        content: {
          quote: "This is an important quoted text that needs emphasis",
          source: "Reference Source",
          context: "Additional context for the quote",
        },
        relationships: {
          parent: "h1_002",
          children: [],
          siblings: ["list_numbered_001"],
          references: [],
        },
        metadata: {
          depth: 2,
          sequence: 8,
        },
      },
      {
        id: "table_001",
        category: "TABLE_HEADER",
        content: {
          columns: ["Column 1", "Column 2", "Column 3"],
          alignment: ["left", "center", "right"],
        },
        relationships: {
          parent: "h1_002",
          children: ["table_content_001"],
          siblings: [],
          references: [],
        },
        metadata: {
          depth: 2,
          sequence: 9,
        },
      },
      {
        id: "table_content_001",
        category: "TABLE_CONTENT",
        content: {
          rows: [
            ["Data 1", "Data 2", "Data 3"],
            ["Data 4", "Data 5", "Data 6"],
          ],
        },
        relationships: {
          parent: "table_001",
          children: [],
          siblings: [],
          references: [],
        },
        metadata: {
          depth: 3,
          sequence: 10,
        },
      },
      {
        id: "code_001",
        category: "CODE_BLOCK",
        content: {
          code: "function example() {\n    return 'Hello World';\n}",
          language: "javascript",
          highlights: [1, 2],
        },
        relationships: {
          parent: "h1_002",
          children: [],
          siblings: [],
          references: [],
        },
        metadata: {
          depth: 2,
          sequence: 11,
        },
      },
    ],
    document_flow: {
      type: "hierarchical",
      flow_sequence: [
        "title_001",
        "h1_001",
        "h2_001",
        "h3_001",
        "body_001",
        "list_bullet_001",
        "list_numbered_001",
        "blockquote_001",
        "table_001",
        "table_content_001",
        "code_001",
      ],
      semantic_groups: {
        main_content: ["h1_001", "body_001", "list_bullet_001"],
        technical_content: ["code_001", "table_001"],
      },
    },
  })}
          `,
        },
      ],
      max_tokens: 16384,
      model: "gpt-4o",
      response_format: { type: "json_object" },
    });
    const json_resposne = await JSON.parse(response.choices[0].message.content);
    return json_resposne;
  }
  else {
    const response = await client.chat.completions.create({
        "messages": [
          {
            "role": "system",
            "content": String.raw`
      You are a Document Structure Repair Specialist with deep expertise in fixing JSON structural issues. Your core mission is to analyze evaluation feedback and methodically repair document structures.
      
      CONTEXT ANALYSIS:
      Let me process the situation systematically...
      
      1. We have a JSON structure that fell below quality thresholds
      2. We have detailed violation reports and improvement suggestions
      3. We have the original raw text that generated this structure
      4. We need to rebuild while preserving valid elements
      
      REPAIR FRAMEWORK:
      
      1. Violation Pattern Recognition
         - Examine each reported violation meticulously
         - Categorize issues by severity and type
         - Identify root causes, not just symptoms
         - Map patterns of recurring problems
      
      2. Structural Analysis
         - What elements are fundamentally sound?
         - Which patterns need complete rebuilding?
         - How do violations interconnect?
         - Where are the cascade effects?
      
      3. Repair Strategy Formation
         - Begin with critical violations
         - Maintain working components
         - Rebuild compromised sections
         - Verify fixes don't create new issues
      
    
        }
      })}
      
      REPAIR METHODOLOGY:
      
      1. Critical Repairs
         - Fix hierarchy violations
         - Restore proper content patterns
         - Rebuild broken relationships
         - Validate parent-child links
      
      2. Major Improvements
         - Restructure malformed lists
         - Correct content categorization
         - Fix sequence breaks
         - Align depth levels
      
      3. Optimization
         - Enhance semantic grouping
         - Improve metadata completeness
         - Strengthen relationships
         - Refine content distribution
      
      Your task is to:
      1. Analyze all feedback meticulously
      2. Develop targeted repair strategies
      3. Implement fixes systematically
      4. Verify improvements
      5. Maintain document integrity
      6. Preserve valid content
      7. Document all changes
      
      Think through each repair step carefully, questioning assumptions and validating changes.`
          },
          {
            "role": "user",
            "content": String.raw`
      INPUT:
      {
        "original_json": ${JSON.stringify(previous_json)},
        "raw_text": "${current_raw_text}",
        "evaluation_feedback": {
          "violations": ${JSON.stringify(violations)},
          "improvements": ${JSON.stringify(improvements)},
        }
      }
      
      REPAIR INSTRUCTIONS:
      
      Let's approach this systematically...
      
      1. Assessment Phase
         - Review each violation carefully
         - Map improvement suggestions
         - Identify optimization opportunities
         - Note interdependencies
      
      2. Planning Phase
         - Prioritize critical fixes
         - Design repair sequence
         - Consider ripple effects
         - Plan verification steps
      
      3. Implementation Phase
         - Execute repairs methodically
         - Validate each change
         - Maintain relationships
         - Preserve valid content
      
      4. Verification Phase
         - Check pattern compliance
         - Verify relationships
         - Confirm improvements
         - Test structural integrity
      
      Generate a completely rebuilt JSON structure that resolves all identified issues while maintaining document integrity.
      
      OUTPUT REQUIREMENTS:
      - Complete, valid JSON structure
      - All violations addressed
      - Improvements implemented
      - Optimizations applied
      - Relationships preserved
      - Document flow maintained`
          }
        ],
      max_tokens: 16384,
      model: "gpt-4o",
      response_format: { type: "json_object" },
    });
    const json_resposne = await JSON.parse(response.choices[0].message.content);
    return json_resposne;
  }
}

export async function LLMEvaluator(input_json: Object , previous_json: Object) {
  
  const client = ModelClient(
    "https://ai-saashub485614076288.services.ai.azure.com/models",
    new AzureKeyCredential(process.env.AZURE_AI_KEY)
  );

  const response = await client.path("/chat/completions").post({
    body: {
      "messages": [
        {
          "role": "system",
          "content": String.raw`
    You are a Document Structure Evaluator analyzing JSON outputs from a chunk-based processing system. Let me carefully consider the implications...
    
    FUNDAMENTAL UNDERSTANDING:
    The document processing occurs across multiple chunks. This means:
    - The full document is split into sequential pieces
    - Each chunk contains a portion of the complete document
    - Context flows between chunks through previous JSON
    - Traditional document requirements must adapt to this reality
    
    CORE EVALUATION PRINCIPLES:
    
    1. Structural Pattern Integrity (60% weight)
       Let me break this down...
       
       For All Content Types:
       - LIST_BULLET and LIST_NUMBERED must use title-description pairs
       - BLOCKQUOTE requires quote, source, and context
       - TABLE structures need proper header and content separation
       - CODE_BLOCK must include language and content
       
       Key Question: Does each content element, regardless of chunk position, maintain proper internal structure?
    
    2. Hierarchical Continuity (40% weight)
       Thinking deeper about hierarchy...
       
       Context-Aware Requirements:
       - If previous JSON exists, current chunk must sensibly extend existing hierarchy
       - Heading levels must make logical sense given context
       - No requirement for TITLE in non-initial chunks
       - H1/H2/H3 progression must be logical within available context
       
       Key Question: Does the structure flow naturally from previous context?
    
    EVALUATION ADJUSTMENTS:
    Let me consider what this means for assessment...
    
    1. Title Expectations
       - Do not penalize absence of TITLE in chunks with previous context
       - Validate TITLE only when processing initial document portion
       - Focus on structural integrity of content present
    
    2. Heading Progression
       - Evaluate heading levels in context of previous chunk
       - Allow any valid heading level if it maintains logical flow
       - Consider cross-chunk section continuity
    
    3. Content Relationships
       - Verify internal chunk relationships
       - Validate connections to previous content when referenced
       - Focus on local structure coherence
    
    VIOLATION SEVERITY:
    
    1. Critical Issues (Deducts 20-25%):
       - Malformed content patterns (e.g., unstructured lists)
       - Invalid internal relationships
       - Structural pattern violations
    
    2. Major Issues (Deducts 10-15%):
       - Illogical heading progression given context
       - Inconsistent content categorization
       - Relationship coherence problems
    
    3. Minor Issues (Deducts 5-10%):
       - Suboptimal semantic grouping
       - Missing optional metadata
       - Minor structural inconsistencies
    
    OUTPUT REQUIREMENTS:
    
    <analysis>
      <context_awareness>
        <has_previous_context>boolean</has_previous_context>
        <continuing_sections>[List of ongoing section contexts]</continuing_sections>
      </context_awareness>
    
      <accuracy>
        <overall_percentage>XX%</overall_percentage>
        <category_scores>
          <structural_patterns>XX%</structural_patterns>
          <hierarchical_continuity>XX%</hierarchical_continuity>
        </category_scores>
      </accuracy>
    
      <violations>
        <critical>[Pattern violations with examples]</critical>
        <major>[Hierarchy issues with context]</major>
        <minor>[Improvement suggestions]</minor>
      </violations>
    
      <recommendations>
        <structural>[Pattern improvement suggestions]</structural>
        <hierarchical>[Context-aware hierarchy fixes]</hierarchical>
      </recommendations>
    </analysis>
    
    Think carefully about context when evaluating. Focus on pattern integrity and logical flow.
    %OUTPUT REQUIREMENT MUST BE SAME PATTERN OTHERWISE YOU WILL BE PENALIZED%`
        },
        {
          "role": "user",
          "content": String.raw`
    INPUT:
    {
      "json_structure": ${JSON.stringify(input_json)},
      "has_previous_context": ${previous_json ? "true" : "false"},
      "previous_json": ${JSON.stringify(previous_json)}
    }
    
    INSTRUCTIONS:
    1. Consider whether this chunk has previous context
    2. Evaluate structural patterns meticulously
    3. Assess hierarchical continuity in context
    4. Generate targeted recommendations
    
    Please provide your analysis following the required XML format.`
        }
      ],
      model: "Llama-3.3-70B-Instruct",
      response_format: { type: "json_object" },
    },
  });

  if (isUnexpected(response)) {
    console.error(response.body);
    return;
  }

  const json_resposne = await JSON.parse(
    response.body.choices[0].message.content
  );
  console.log(json_resposne);
  let accuracy = json_resposne["analysis"]["accuracy"][
    "overall_percentage"
  ];
  console.log("Accuracy\n\n", accuracy);
  if (typeof(accuracy)==="string") accuracy = accuracy.slice(0, -1);

  const suggestions = {
    structural:
      json_resposne["analysis"]["recommendations"]["structural"],
    hierarchical:
      json_resposne["analysis"]["recommendations"]["hierarchical"],
  };
  const violations = {
    critical: json_resposne["analysis"]["violations"]["critical"],
    major: json_resposne["analysis"]["violations"]["major"],
    minor: json_resposne["analysis"]["violations"]["minor"],
  };
  
  return { accuracy, suggestions, violations };
}
