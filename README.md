# F+R Back-End
Simple product api, which manages product and producer entities.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have a MongoDB database running locally.

## Installing

To install F+R Back-End, follow these steps:

```bash
git clone https://github.com/gygabor/fr-backend.git
cd fr-backend
```

#### Istall dependencies

```bash
npm install
```

## Start the server

```bash
npm run start
```

Start with `nodemon`:

```bash
npm run start:dev
```

It starts the server running on the port 3000.

If you want to run it on different port, you can add it to the `.env`:

```
PORT=your_preferred_port
```

## Use custom MongoDb

If you use `MongoDb` with custom `uri`, you add it to the `.env`:

```
MONGO_DB=your_mongodb_uri
```

## API Documentation

### GraphQL Endpoint

`/graphql`

This is the primary endpoint for interacting with the GraphQL API.

You can send queries via GraphiQL, Postman or from terminal with curl.

- You can open GraphiQL on `http://localhost:3000/graphql`

### Queries

#### Query a Product

```gql
query Product($_id: String!) {
  product(_id: $_id) {
    _id
    name
    vintage
    producer {
      _id
      name
    }
  }
}
```

Variable:
```json
{
  "_id": "<product ID>"
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"query Product($_id: String!) {\n  product(_id: $_id) {\n    _id\n    name\n    vintage\n    producer {\n      _id\n      name\n    }\n  }\n}","variables":{"_id":<product ID>}}'
```

#### Query Products by Producer

```gql
query ProductsByProducer($producerId: String!) {
  productsByProducer(producerId: $producerId) {
    _id
    name
    producer {
      name
    }
  }
}
```

Variable:
```json
{
  "producerId": "<producer ID>"
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"query ProductsByProducer($producerId: String!) {\n  productsByProducer(producerId: $producerId) {\n    _id\n    name\n    producer {\n      name\n    }\n  }\n}","variables":{"producerId":"producer ID"}}'
```

#### Query Producers

```gql
query Producers {
  producers {
    _id
    name
    country
    region
  }
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"query Producers {\n  producers {\n    _id\n    name\n    country\n    region\n  }\n}","variables":{}}'
```

### Mutations

#### Create Products

```gql
mutation CreateProducts($products: [ProductInput!]!) {
  createProducts(products: $products)
}
```

Variable:
```json
{
  "products": [
    {
      "name": "Name",
      "vintage": "Date",
      "producer": {
        "name": "Producer Name",
        "country": "Italy",
        "region": "Calbaria"
      }
    }
  ]
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"mutation CreateProducts($products: [ProductInput!]!) {\n  createProducts(products: $products)\n}","variables":{"products":[{"name":"Name","vintage":"Date","producer":{"name":"Producer Name","country":"Italy","region":"Calbaria"}}]}}'
```

#### Create Products

```gql
mutation CreateProducts($products: [ProductInput!]!) {
  createProducts(products: $products)
}
```

Variable:
```json
{
  "products": [
    {
      "name": "Name",
      "vintage": "Date",
      "producer": {
        "name": "Producer Name",
        "country": "Italy",
        "region": "Calbaria"
      }
    }
  ]
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"mutation CreateProducts($products: [ProductInput!]!) {\n  createProducts(products: $products)\n}","variables":{"products":[{"name":"Name","vintage":"Date","producer":{"name":"Producer Name","country":"Italy","region":"Calbaria"}}]}}'
```

#### Create Product

```gql
mutation UpdateProduct($product: UpdateProductInput!) {
  updateProduct(product: $product)
}
```

Variable:
```json
{
  "product":
    {
      "_id": "Product ID",
      "name": "Château ",
      "vintage": "2011",
      "productId": "Product Id"
    }
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"mutation UpdateProduct($product: UpdateProductInput!) {\n  updateProduct(product: $product)\n}","variables":{"product":{"_id":"Product ID","name":"Château ","vintage":"2011"}}}'
```


#### Delete Products

```gql
mutation DeleteProducts($_ids: [String!]!) {
  deleteProducts(_ids: $_ids)
}
```

Variable:
```json
{
  "_ids":
    [
      "Product ID"
    ]
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"mutation DeleteProducts($_ids: [String!]!) {\n  deleteProducts(_ids: $_ids)\n}","variables":{"_ids":["Product ID"]}}'
```


#### Fetch Products fromCSV

You can fetch the csv from this location: `https://api.frw.co.uk/feeds/all_listings.csv`

```gql
mutation FetchProducts($url: String!) {
  fetchProducts(url: $url)
}
```

Variable:
```json
{
  "url": "https://api.frw.co.uk/feeds/all_listings.csv"
}
```

With curl:

```bash
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"mutation FetchProducts($url: String!) {\n  fetchProducts(url: $url)\n}\n","variables":{"url":"https://api.frw.co.uk/feeds/all_listings.csv"}}'
```
