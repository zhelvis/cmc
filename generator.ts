import { createClient } from "@hey-api/openapi-ts";
import { transpile } from "postman2openapi";

const responce = await fetch(
	"https://pro-api.coinmarketcap.com/v1/tools/postman",
);

if (!responce.ok) {
	throw new Error(responce.statusText);
}

const collection = await responce.json();

const openApiSpec = transpile(collection);

await createClient({
	client: "@hey-api/client-fetch",
	input: openApiSpec,
	output: "generated",
});
