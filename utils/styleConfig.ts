const FORMAL_STYLE_CONFIG = {
  TITLE: {
    FONT_SIZE: 26,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "CENTER",
    spacing: 2.0,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 30,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 10,
    PADDING_BOTTOM: 10
  },
  H1: {
    FONT_SIZE: 22,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.8,
    MARGIN_TOP: 20,
    MARGIN_BOTTOM: 12,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 5,
    PADDING_BOTTOM: 5
  },
  H2: {
    FONT_SIZE: 18,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.7,
    MARGIN_TOP: 18,
    MARGIN_BOTTOM: 10,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 4,
    PADDING_BOTTOM: 4
  },
  H3: {
    FONT_SIZE: 16,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.6,
    MARGIN_TOP: 16,
    MARGIN_BOTTOM: 8,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 3,
    PADDING_BOTTOM: 3
  },
  H4: {
    FONT_SIZE: 14,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.6,
    MARGIN_TOP: 14,
    MARGIN_BOTTOM: 8,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 3,
    PADDING_BOTTOM: 3
  },
  BODY_TEXT: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    spacing: 1.5,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 15,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 2,
    PADDING_BOTTOM: 2
  },
  LIST_BULLET: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.5,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 0,
    MARGIN_RIGHT: 36,
    BACKGROUND_COLOR: null,
    GLYPH_TYPE: "BULLET"
  },
  LIST_NUMBERED: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.5,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 0,
    MARGIN_RIGHT: 36,
    BACKGROUND_COLOR: null,
    GLYPH_TYPE: "NUMBER"
  },
  BLOCKQUOTE: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    ITALIC: true,
    FOREGROUND_COLOR: '#555555',
    ALIGNMENT: "LEFT",
    spacing: 1.5,
    MARGIN_TOP: 10,
    MARGIN_BOTTOM: 10,
    MARGIN_RIGHT: 50,
    BACKGROUND_COLOR: '#f2f2f2',
    PADDING_TOP: 10,
    PADDING_BOTTOM: 10,
    PADDING_LEFT: 20,
    PADDING_RIGHT: 20
  },
  TABLE_HEADER: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "CENTER",
    // spacing: 1.5,
    BACKGROUND_COLOR: '#eaeaea',
    PADDING_TOP: 6,
    PADDING_BOTTOM: 6,
    PADDING_LEFT: 10,
    PADDING_RIGHT: 10,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#cccccc'
  },
  TABLE_CONTENT: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    // spacing: 1.5,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 4,
    PADDING_BOTTOM: 4,
    PADDING_LEFT: 10,
    PADDING_RIGHT: 10,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#cccccc'
  },
  FIGURE: {
    caption: {
      FONT_SIZE: 11,
      FONT_FAMILY: 'Times New Roman',
      BOLD: false,
      ITALIC: true,
      FOREGROUND_COLOR: '#555555',
      ALIGNMENT: "CENTER",
      spacing: 1.0,
      MARGIN_TOP: 5,
      MARGIN_BOTTOM: 15
    },
    image: {
      ALIGNMENT: "CENTER",
      MARGIN_TOP: 10,
      MARGIN_BOTTOM: 5
    }
  },
  CODE_BLOCK: {
    FONT_SIZE: 10,
    FONT_FAMILY: 'Courier New',
    BOLD: false,
    FOREGROUND_COLOR: '#333333',
    ALIGNMENT: "LEFT",
    spacing: 1.0,
    MARGIN_TOP: 10,
    MARGIN_BOTTOM: 10,
    BACKGROUND_COLOR: '#f8f8f8',
    PADDING_TOP: 10,
    PADDING_BOTTOM: 10,
    PADDING_LEFT: 15,
    PADDING_RIGHT: 15,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#dcdcdc'
  }
};

const ACADEMIC_STYLE_CONFIG = {
  TITLE: {
    FONT_SIZE: 24,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "CENTER",
    spacing: 2.0,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 30,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 10,
    PADDING_BOTTOM: 10
  },
  H1: {
    FONT_SIZE: 18,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.8,
    MARGIN_TOP: 20,
    MARGIN_BOTTOM: 10,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 4,
    PADDING_BOTTOM: 4
  },
  H2: {
    FONT_SIZE: 16,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.8,
    MARGIN_TOP: 18,
    MARGIN_BOTTOM: 8,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 3,
    PADDING_BOTTOM: 3
  },
  H3: {
    FONT_SIZE: 14,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.8,
    MARGIN_TOP: 16,
    MARGIN_BOTTOM: 6,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 3,
    PADDING_BOTTOM: 3
  },
  H4: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.8,
    MARGIN_TOP: 14,
    MARGIN_BOTTOM: 6,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 2,
    PADDING_BOTTOM: 2
  },
  BODY_TEXT: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    // Double-spacing for academic standards:
    spacing: 2.0,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 15,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 2,
    PADDING_BOTTOM: 2
  },
  LIST_BULLET: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 2.0,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 0,
    MARGIN_RIGHT: 36,
    BACKGROUND_COLOR: null,
    GLYPH_TYPE: "BULLET"
  },
  LIST_NUMBERED: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 2.0,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 0,
    MARGIN_RIGHT: 36,
    BACKGROUND_COLOR: null,
    GLYPH_TYPE: "NUMBER"
  },
  BLOCKQUOTE: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    ITALIC: true,
    FOREGROUND_COLOR: '#555555',
    ALIGNMENT: "LEFT",
    spacing: 2.0,
    MARGIN_TOP: 10,
    MARGIN_BOTTOM: 10,
    MARGIN_RIGHT: 50,
    BACKGROUND_COLOR: '#f9f9f9',
    PADDING_TOP: 10,
    PADDING_BOTTOM: 10,
    PADDING_LEFT: 20,
    PADDING_RIGHT: 20
  },
  TABLE_HEADER: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "CENTER",
    // spacing: 2.0,
    BACKGROUND_COLOR: '#f3f3f3',
    PADDING_TOP: 6,
    PADDING_BOTTOM: 6,
    PADDING_LEFT: 10,
    PADDING_RIGHT: 10,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#d1d1d1'
  },
  TABLE_CONTENT: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Times New Roman',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    // spacing: 2.0,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 4,
    PADDING_BOTTOM: 4,
    PADDING_LEFT: 10,
    PADDING_RIGHT: 10,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#d1d1d1'
  },
  FIGURE: {
    caption: {
      FONT_SIZE: 11,
      FONT_FAMILY: 'Times New Roman',
      BOLD: false,
      ITALIC: true,
      FOREGROUND_COLOR: '#555555',
      ALIGNMENT: "CENTER",
      spacing: 1.0,
      MARGIN_TOP: 5,
      MARGIN_BOTTOM: 15
    },
    image: {
      ALIGNMENT: "CENTER",
      MARGIN_TOP: 10,
      MARGIN_BOTTOM: 5
    }
  },
  CODE_BLOCK: {
    FONT_SIZE: 10,
    FONT_FAMILY: 'Courier New',
    BOLD: false,
    FOREGROUND_COLOR: '#333333',
    ALIGNMENT: "LEFT",
    spacing: 1.0,
    MARGIN_TOP: 10,
    MARGIN_BOTTOM: 10,
    BACKGROUND_COLOR: '#f5f5f5',
    PADDING_TOP: 12,
    PADDING_BOTTOM: 12,
    PADDING_LEFT: 20,
    PADDING_RIGHT: 20,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#e0e0e0'
  }
};

const REGULAR_STYLE_CONFIG = {
  TITLE: {
    FONT_SIZE: 24,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "CENTER",
    spacing: 2.0,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 20,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 10,
    PADDING_BOTTOM: 10
  },
  H1: {
    FONT_SIZE: 20,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.5,
    MARGIN_TOP: 20,
    MARGIN_BOTTOM: 10,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 5,
    PADDING_BOTTOM: 5
  },
  H2: {
    FONT_SIZE: 16,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.4,
    MARGIN_TOP: 15,
    MARGIN_BOTTOM: 8,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 4,
    PADDING_BOTTOM: 4
  },
  H3: {
    FONT_SIZE: 14,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.3,
    MARGIN_TOP: 12,
    MARGIN_BOTTOM: 6,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 3,
    PADDING_BOTTOM: 3
  },
  H4: {
    FONT_SIZE: 12,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.3,
    MARGIN_TOP: 12,
    MARGIN_BOTTOM: 6,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 3,
    PADDING_BOTTOM: 3
  },
  BODY_TEXT: {
    FONT_SIZE: 11,
    FONT_FAMILY: 'Arial',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    spacing: 1.15,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 10,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 2,
    PADDING_BOTTOM: 2
  },
  LIST_BULLET: {
    FONT_SIZE: 11,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.15,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 0,
    MARGIN_RIGHT: 36,
    BACKGROUND_COLOR: null,
    GLYPH_TYPE: "BULLET"
  },
  LIST_NUMBERED: {
    FONT_SIZE: 11,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    spacing: 1.15,
    MARGIN_TOP: 0,
    MARGIN_BOTTOM: 0,
    MARGIN_RIGHT: 36,
    BACKGROUND_COLOR: null,
    GLYPH_TYPE: "NUMBER"
  },
  BLOCKQUOTE: {
    FONT_SIZE: 11,
    FONT_FAMILY: 'Arial',
    BOLD: false,
    ITALIC: true,
    FOREGROUND_COLOR: '#666666',
    ALIGNMENT: "LEFT",
    spacing: 1.15,
    MARGIN_TOP: 10,
    MARGIN_BOTTOM: 10,
    MARGIN_RIGHT: 50,
    BACKGROUND_COLOR: '#f9f9f9',
    PADDING_TOP: 10,
    PADDING_BOTTOM: 10,
    PADDING_LEFT: 20,
    PADDING_RIGHT: 20
  },
  TABLE_HEADER: {
    FONT_SIZE: 11,
    FONT_FAMILY: 'Arial',
    BOLD: true,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "CENTER",
    // spacing: 1.15,
    BACKGROUND_COLOR: '#f3f3f3',
    PADDING_TOP: 6,
    PADDING_BOTTOM: 6,
    PADDING_LEFT: 10,
    PADDING_RIGHT: 10,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#d1d1d1'
  },
  TABLE_CONTENT: {
    FONT_SIZE: 11,
    FONT_FAMILY: 'Arial',
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    ALIGNMENT: "LEFT",
    // spacing: 1.15,
    BACKGROUND_COLOR: null,
    PADDING_TOP: 4,
    PADDING_BOTTOM: 4,
    PADDING_LEFT: 10,
    PADDING_RIGHT: 10,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#d1d1d1'
  },
  FIGURE: {
    caption: {
      FONT_SIZE: 10,
      FONT_FAMILY: 'Arial',
      BOLD: false,
      ITALIC: true,
      FOREGROUND_COLOR: '#666666',
      ALIGNMENT: "CENTER",
      spacing: 1.0,
      MARGIN_TOP: 5,
      MARGIN_BOTTOM: 15
    },
    image: {
      ALIGNMENT: "CENTER",
      MARGIN_TOP: 10,
      MARGIN_BOTTOM: 5
    }
  },
  CODE_BLOCK: {
    FONT_SIZE: 10,
    FONT_FAMILY: 'Courier New',
    BOLD: false,
    FOREGROUND_COLOR: '#333333',
    ALIGNMENT: "LEFT",
    spacing: 1.0,
    MARGIN_TOP: 10,
    MARGIN_BOTTOM: 10,
    BACKGROUND_COLOR: '#f5f5f5',
    PADDING_TOP: 12,
    PADDING_BOTTOM: 12,
    PADDING_LEFT: 20,
    PADDING_RIGHT: 20,
    BORDER_WIDTH: 1,
    BORDER_COLOR: '#e0e0e0'
  }
};

export {FORMAL_STYLE_CONFIG , ACADEMIC_STYLE_CONFIG , REGULAR_STYLE_CONFIG}