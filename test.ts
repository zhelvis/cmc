import { client, metadataV2 } from './generated/index';

client.setConfig({
    baseUrl: 'https://pro-api.coinmarketcap.com/v1',
    headers: {
        'x-cmc_pro_api_key': '<your-api-key>',
    },
})

await metadataV2({
    query: {
        id: "1"
    }
});

