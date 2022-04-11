# x-virtual

a simple virtual list by react application. build your own virtual list

## Installation


```bash
npm install x-virtual
```

## Usage

```python
    <XVirtual
        data={Array.from({ length: 2000 }, (_, i) => `andy-${i}`)}
        itemHeight={40}
        windowHeight={window.innerHeight / 2}
        ref={eleRef}
    />
```

## References  [building a virtualized list from scratch](https://medium.com/ingeniouslysimple/building-a-virtualized-list-from-scratch-9225e8bec120#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxMzM4Y2EyNjgzNTg2M2Y2NzE0MDhmNDE3MzhhN2I0OWU3NDBmYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NDk1OTk2MzAsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNDM0OTYyMzUzNTAwOTQyMzkzMyIsImVtYWlsIjoiZWRpc29uamlubGVpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiamluIEVkaXNvbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4bS1ZeUtZUFNPU2wxVHd5QmNBTGJzNDhRTDAxNG00Y2NwZ1FPcj1zOTYtYyIsImdpdmVuX25hbWUiOiJqaW4iLCJmYW1pbHlfbmFtZSI6IkVkaXNvbiIsImlhdCI6MTY0OTU5OTkzMCwiZXhwIjoxNjQ5NjAzNTMwLCJqdGkiOiI5ZWViZjNjMGFmNzMxYjU2ZGViYzYwZjFkMGJmZWNlMzc3MDJlNzdlIn0.m951UZpGjIyW2TqFtjDJcqaMJ4MBC0MSmnwjUW_TPX2e7zP7vV-efPvd7dCPDhg02zKnbpu_icFwcGK6I74rkUsHcf7T7Esif1Nq3WUgbSSLiqIfBOiR_ZzV_kDZXDusiA_dmFoaAVd81e1td6zphYjJdFcPpNZN3T4o_9cq_h1QyY6BKpKYsvY5UQMXCyX95mlih9nAHAFeK1_fyJCmfqoKJjZihv8RFmNZB7w24wWeTyu3d6B2sgeCUKVcuVDqCXFQWbwixbt0WOF0RvLhm4Fiy9_sHTRQcLFSyreGzboUuYICa2Os5YF0ytginTPif2-baVOdlAG1SKS-b-pYdg).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)