To build the go-html-to-md library, run the following command:

```bash
cd packages/mui-docs-llms-txt-generator/sharedLibs/go-html-to-md
go build -o html-to-markdown.so -buildmode=c-shared html-to-markdown.go
chmod +x html-to-markdown.so
```
