## Configuration
```bash
$ cp .env.example .env
```
Add POSTMARK_FROM_EMAIL and POSTMARK_API_TOKEN values to .env file


## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Example endpoint test

```bash
$ curl --header "Content-Type: application/json" --data '{"templateName":"template1", "to": "<your_email>", "subject": "test", "templateVariables": {"name": "hindrek"}}' -X POST localhost:3000/email
```
