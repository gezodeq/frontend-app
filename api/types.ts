// types.ts
export type TokenType = 'INTEGER' | 'STRING' | 'BOOLEAN' | 'NULL' | 'OBJECT' | 'ARRAY' | 'NIL' | 'IDENTIFIER' | 'SEPARATOR' | 'OPERATOR' | 'PARENTHESIS' | 'BRACKET' | 'BRACE' | 'COMMA' | 'CLOSING' | 'OPENING' | 'DOT' | 'COLON';

export enum TokenTypeEnum {
  INTEGER = 'INTEGER',
  STRING = 'STRING',
  BOOLEAN = 'BOOLEAN',
  NULL = 'NULL',
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  NIL = 'NIL',
  IDENTIFIER = 'IDENTIFIER',
  SEPARATOR = 'SEPARATOR',
  OPERATOR = 'OPERATOR',
  PARENTHESIS = 'PARENTHESIS',
  BRACKET = 'BRACKET',
  BRACE = 'BRACE',
  COMMA = 'COMMA',
  CLOSING = 'CLOSING',
  OPENING = 'OPENING',
  DOT = 'DOT',
  COLON = 'COLON'
}

export type Token = {
  type: TokenTypeEnum;
  value: string;
  pos: number;
  end: number;
};

export type ASTNode = {
  type: 'OBJECT' | 'ARRAY' | 'NIL' | 'INTEGER' | 'STRING' | 'BOOLEAN' | 'IDENTIFIER';
  children?: ASTNode[];
  value?: string;
  properties?: { [key: string]: ASTNode };
  pos: number;
  end: number;
};