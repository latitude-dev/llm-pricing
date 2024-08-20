// Pricing data
const pricing = {
    "OpenAI": {
        'gpt-4o': { 'input': 5.0, 'output': 15.0 },
        'gpt-4o-2024-08-06': { 'input': 2.5, 'output': 10.0 },
        'gpt-4o-2024-05-13': { 'input': 5.0, 'output': 15.0 },
        'gpt-4o-mini': { 'input': 0.15, 'output': 0.6 },
        'gpt-4o-mini-2024-07-18': { 'input': 0.15, 'output': 0.6 },
        'chatgpt-4o-latest': { 'input': 5.0, 'output': 15.0 },
        'gpt-4-turbo': { 'input': 10.0, 'output': 30.0 },
        'gpt-4-turbo-2024-04-09': { 'input': 10.0, 'output': 30.0 },
        'gpt-4': { 'input': 30.0, 'output': 60.0 },
        'gpt-4-32k': { 'input': 60.0, 'output': 120.0 },
        'gpt-4-0125-preview': { 'input': 10.0, 'output': 30.0 },
        'gpt-4-1106-preview': { 'input': 10.0, 'output': 30.0 },
        'gpt-4-vision-preview': { 'input': 10.0, 'output': 30.0 },
        'gpt-3.5-turbo-0125': { 'input': 0.5, 'output': 1.5 },
        'gpt-3.5-turbo-instruct': { 'input': 1.5, 'output': 2.0 },
        'gpt-3.5-turbo-1106': { 'input': 1.0, 'output': 2.0 },
        'gpt-3.5-turbo-0613': { 'input': 1.5, 'output': 2.0 },
        'gpt-3.5-turbo-16k-0613': { 'input': 3.0, 'output': 4.0 },
        'gpt-3.5-turbo-0301': { 'input': 1.5, 'output': 2.0 },
        'davinci-002': { 'input': 2.0, 'output': 2.0 },
        'babbage-002': { 'input': 0.4, 'output': 0.4 },
    },
    "Anthropic": {
        'claude-3-5-sonnet-20240620': { 'input': 3.0, 'output': 15.0 },
        'claude-3-opus-20240229': { 'input': 15.0, 'output': 75.0 },
        'claude-3-sonnet-20240229': { 'input': 3.0, 'output': 15.0 },
        'claude-3-haiku-20240307': { 'input': 0.25, 'output': 1.25 },
        'claude-2.1': { 'input': 8.0, 'output': 24.0 },
        'claude-2.0': { 'input': 8.0, 'output': 24.0 },
        'claude-instant-1.2': { 'input': 0.8, 'output': 2.4 },
    },
    "Groq": {
        'gemma-7b-it': { 'input': 0.07, 'output': 0.07 },
        'gemma2-9b-it': { 'input': 0.2, 'output': 0.2 },
        'llama3-70b-8192': { 'input': 0.59, 'output': 0.79 },
        'llama3-8b-8192': { 'input': 0.05, 'output': 0.08 },
        'llama-guard-3-8b': { 'input': 0.05, 'output': 0.08 },
        'llama3-groq-70b-8192-tool-use-preview': { 'input': 0.89, 'output': 0.89 },
        'llama3-groq-8b-8192-tool-use-preview': { 'input': 0.19, 'output': 0.19 },
        'mixtral-8x7b-32768': { 'input': 0.24, 'output': 0.24 },
    },
    "Mistral": {
        'open-mistral-nemo-2407': { 'input': 0.3, 'output': 0.3 },
        'mistral-large-2407': { 'input': 3.0, 'output': 9.0 },
        'codestral-2405': { 'input': 1.0, 'output': 3.0 },
        'open-mistral-7b': { 'input': 0.25, 'output': 0.25 },
        'open-mixtral-8x7b': { 'input': 0.7, 'output': 0.7 },
        'open-mixtral-8x22b': { 'input': 2.0, 'output': 6.0 },
        'mistral-small-latest': { 'input': 1.0, 'output': 3.0 },
        'mistral-medium-latest': { 'input': 2.75, 'output': 8.1 },
    }
  };
  
  function handleRootRequest(request) {
      const domain = new URL(request.url).origin;
      const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>LLM Pricing API</title>
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%230080FF%22/></svg>">
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 800px;
                  margin: 0 auto;
                  padding: 20px;
              }
              h1, h2 {
                  color: #2c3e50;
              }
              code {
                  background-color: #f4f4f4;
                  padding: 2px 4px;
                  border-radius: 4px;
              }
              pre {
                  background-color: #f4f4f4;
                  padding: 10px;
                  border-radius: 4px;
                  overflow-x: auto;
              }
              .github-link {
                  background-color: #4CAF50;
                  color: white;
                  padding: 10px 20px;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  cursor: pointer;
                  border-radius: 4px;
              }
              .community-notice {
                  background-color: #f0f0f0;
                  border-left: 5px solid #2196F3;
                  padding: 10px;
                  margin-bottom: 20px;
              }
              .community-notice p {
                  margin-top: 0;
                  margin-bottom: 10px;
              }
              .latitude-footer {
                  font-size: 0.8em;
                  color: #777;
                  text-align: center;
                  padding: 10px 0;
                  width: 100%;
              }
              .latitude-footer a {
                  color: #777;
                  text-decoration: underline;
              }
              .content-wrapper {
                  padding-bottom: 24px; /* Ensure content doesn't overlap with footer */
              }
          </style>
      </head>
      <body>
          <div class="content-wrapper">
              <h1>LLM Pricing API</h1>
              
              <div class="community-notice">
                  <p><strong>This is a community-maintained project!</strong> Help us keep the information up-to-date by contributing to the GitHub repository.</p>
                  <a href="https://github.com/latitude-dev/llm-pricing/" class="github-link" target="_blank">Contribute on GitHub</a>
              </div>
              
              <p>This API provides information about various Large Language Models (LLMs) and their pricing across different providers. The data is maintained by the community to ensure accuracy and timeliness.</p>
              
              <h2>Base URL</h2>
              <p><code>${domain}</code></p>
              
              <h2>Endpoints</h2>
              
              <h3>1. List Models</h3>
              <p><strong>GET</strong> <code>/models</code></p>
              <p>Returns a list of all available LLM models and their providers.</p>
              <p>Example request:</p>
              <pre><code>curl ${domain}/models</code></pre>
              <p>Example response:</p>
              <pre><code>[
      {"name": "gpt-4", "provider": "OpenAI"},
      {"name": "claude-3-opus-20240229", "provider": "Anthropic"},
      ...
  ]</code></pre>
  
              <h3>2. Calculate Price</h3>
              <p><strong>GET</strong> <code>/prices</code></p>
              <p>Calculates the price for a given model based on input and output tokens.</p>
              <p>Query Parameters:</p>
              <ul>
                  <li><code>provider</code>: The provider of the model (e.g., OpenAI, Anthropic)</li>
                  <li><code>model</code>: The name of the model</li>
                  <li><code>input_tokens</code>: Number of input tokens</li>
                  <li><code>output_tokens</code>: Number of output tokens</li>
              </ul>
              <p>Example request:</p>
              <pre><code>curl "${domain}/prices?provider=OpenAI&model=gpt-4&input_tokens=1000&output_tokens=500"</code></pre>
              <p>Example response:</p>
              <pre><code>{
      "provider": "OpenAI",
      "model": "gpt-4",
      "input_tokens": 1000,
      "output_tokens": 500,
      "input_cost": 0.03,
      "output_cost": 0.03,
      "total_cost": 0.06
  }</code></pre>
  
              <h2>Supported Providers</h2>
              <ul>
                  <li>OpenAI</li>
                  <li>Anthropic</li>
                  <li>Groq</li>
                  <li>Mistral</li>
              </ul>
  
              <h2>Error Handling</h2>
              <p>The API returns appropriate error messages for invalid requests:</p>
              <ul>
                  <li>400 Bad Request: For invalid provider, model, or token counts</li>
                  <li>404 Not Found: For undefined routes</li>
              </ul>
  
              <h2>Rate Limiting</h2>
              <p>Please be aware that this API may be subject to rate limiting. Refer to Cloudflare Workers documentation for more information on usage limits.</p>
  
              <h2>Contributing</h2>
              <p>As a community-maintained project, we welcome contributions to keep the pricing and model information up-to-date. If you notice any discrepancies or have information about new models, please contribute by submitting a pull request or opening an issue on our GitHub repository.</p>
              <a href="https://github.com/latitude-dev/llm-pricing/" class="github-link" target="_blank">Contribute on GitHub</a>
  
              <footer>
                  <p>For more information or support, please contact the API administrator or open an issue on GitHub.</p>
              </footer>
          </div>
          <div class="latitude-footer">
              Made with ❤️ by <a href="https://latitude.so" target="_blank">Latitude</a>
          </div>
      </body>
      </html>`;
  
      return new Response(html, {
          headers: { 'Content-Type': 'text/html' }
      });
  }
  
  // Modify the handleRequest function to include the root path
  function handleRequest(request) {
      const url = new URL(request.url);
      const path = url.pathname;
  
      if (path === '/' || path === '') {
          return handleRootRequest(request);
      } else if (path === '/models') {
          return handleModelsRequest();
      } else if (path === '/prices') {
          return handlePricesRequest(url.searchParams);
      } else {
          return new Response('Not Found', { status: 404 });
      }
  }
  
  function handleModelsRequest() {
    const models = [];
    for (const [provider, providerModels] of Object.entries(pricing)) {
        for (const modelName of Object.keys(providerModels)) {
            models.push({ name: modelName, provider: provider });
        }
    }
    return new Response(JSON.stringify(models), {
        headers: { 'Content-Type': 'application/json' }
    });
  }
  
  function handlePricesRequest(params) {
    const provider = params.get('provider');
    const model = params.get('model');
    const input_tokens = parseInt(params.get('input_tokens'));
    const output_tokens = parseInt(params.get('output_tokens'));
  
    if (!pricing[provider]) {
        return new Response(JSON.stringify({ detail: "Invalid provider" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  
    if (!pricing[provider][model]) {
        return new Response(JSON.stringify({ detail: "Invalid model for the specified provider" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  
    if (isNaN(input_tokens) || isNaN(output_tokens) || input_tokens < 0 || output_tokens < 0) {
        return new Response(JSON.stringify({ detail: "Invalid token count" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  
    const modelPricing = pricing[provider][model];
    const inputCost = modelPricing.input * input_tokens / 1000000;
    const outputCost = modelPricing.output * output_tokens / 1000000;
    const totalCost = inputCost + outputCost;
  
    const response = {
        provider,
        model,
        input_tokens,
        output_tokens,
        input_cost: Number(inputCost.toFixed(6)),
        output_cost: Number(outputCost.toFixed(6)),
        total_cost: Number(totalCost.toFixed(6))
    };
  
    return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' }
    });
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });