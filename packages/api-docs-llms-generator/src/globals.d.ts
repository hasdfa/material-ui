declare module '*.txt' {
  const content: string;
  export default content;
}

declare module '*.jsx-as-file' {
  const filePath: string;
  export default filePath;
}

declare module '*.so' {
  const filePath: string;
  export default filePath;
}
