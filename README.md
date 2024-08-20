# LLM Pricing API (Cloudflare Worker)

This API provides information about various Large Language Models (LLMs) and their pricing across different providers. The data is maintained by the community to ensure accuracy and timeliness. The API is implemented as a Cloudflare Worker, offering low-latency, serverless execution.

## About Cloudflare Workers

This API is deployed as a Cloudflare Worker, which means:
- Serverless execution with low latency across Cloudflare's global network
- No need to manage servers or infrastructure
- Automatic scaling to handle varying levels of traffic
- Edge computing capabilities for faster response times

## Base URL

```
https://llm-pricing-api.<your-subdomain>.workers.dev
```

Replace `<your-subdomain>` with the actual Cloudflare subdomain where the worker is deployed.

## Endpoints

### 1. List Models

**GET** `/models`

Returns a list of all available LLM models and their providers.

Example request:
```
curl https://llm-pricing-api.<your-subdomain>.workers.dev/models
```

Example response:
```json
[
  {"name": "gpt-4", "provider": "OpenAI"},
  {"name": "claude-3-opus-20240229", "provider": "Anthropic"},
  ...
]
```

### 2. Calculate Price

**GET** `/prices`

Calculates the price for a given model based on input and output tokens.

Query Parameters:
- `provider`: The provider of the model (e.g., OpenAI, Anthropic)
- `model`: The name of the model
- `input_tokens`: Number of input tokens
- `output_tokens`: Number of output tokens

Example request:
```
curl "https://llm-pricing-api.<your-subdomain>.workers.dev/prices?provider=OpenAI&model=gpt-4&input_tokens=1000&output_tokens=500"
```

Example response:
```json
{
  "provider": "OpenAI",
  "model": "gpt-4",
  "input_tokens": 1000,
  "output_tokens": 500,
  "input_cost": 0.03,
  "output_cost": 0.03,
  "total_cost": 0.06
}
```

## Supported Providers

- OpenAI
- Anthropic
- Groq
- Mistral

## Error Handling

The API returns appropriate error messages for invalid requests:
- 400 Bad Request: For invalid provider, model, or token counts
- 404 Not Found: For undefined routes

## Rate Limiting and Usage

As this API is deployed on Cloudflare Workers, it is subject to Cloudflare's platform limits:
- Up to 100,000 requests per day on the free plan
- 10ms CPU time per request
- 512MB memory limit

For more details on Cloudflare Workers limits, please refer to the [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/platform/limits/).

## Contributing

As a community-maintained project, we welcome contributions to keep the pricing and model information up-to-date. If you notice any discrepancies or have information about new models, please contribute by submitting a pull request or opening an issue.

### How to Contribute

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make your changes
4. Test your changes locally using [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update)
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

## Local Development

To run this project locally:

1. Install [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update)
2. Clone this repository
3. Run `wrangler dev` in the project directory to start a local development server
4. Make your changes and test them locally
5. Deploy your changes using `wrangler publish`

## Support

For more information or support, please open an issue in this repository.

## License

[MIT License](LICENSE)

## Acknowledgments

Made with ❤️ by [Latitude](https://latitude.so)

Powered by [Cloudflare Workers](https://workers.cloudflare.com/)