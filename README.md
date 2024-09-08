# CoinMarketCap API

CoinMarketCap RESTful API typescript client generated from [Postman collection]

```
npm install @zhelvis/cmc
```

## Documentation

- [CoinMarketCap RESTful API docs] 

## Usage

```ts
import { client, metadataV2 } from '@zhelvis/cmc';

client.setConfig({
    baseUrl: 'https://pro-api.coinmarketcap.com',
    headers: {
        'x-cmc_pro_api_key': '<your-api-key>',
    },
})

await metadataV2({
    query: {
        id: "1"
    }
});
```

## Development

This project uses [Bun] runtime for development tasks.
Linting and formatting is done using [Biome].
Building is done using [Rollup].
Docs are generated using [TypeDoc].

```sh
# Install dependencies
bun install

# Run linter and formatter
bun run check

# Download fresh postman collection and generate typescript client
bun run generate

# Create docs based on generated code
bun run docs

# Create production build
bun run build
```

[Postman collection]: https://pro-api.coinmarketcap.com/v1/tools/postman
[CoinMarketCap RESTful API docs]: https://coinmarketcap.com/api/documentation/v1/
[Bun]: https://bun.sh/
[Biome]: https://biomejs.dev/
[Rollup]: https://rollupjs.org/
[TypeDoc]: https://typedoc.org/
