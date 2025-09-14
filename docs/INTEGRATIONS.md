# Integration Guide

This document explains how to integrate external systems with the Stratego Platform.

## API Overview

The Stratego Platform provides a RESTful API for integrating with external systems. All API endpoints are accessible under the `/api` path.

### Authentication

All API requests require authentication using an API key. Include your API key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

API keys can be generated in the Settings > Integrations section of the platform.

### Rate Limiting

The API is rate-limited to 1000 requests per hour per API key. If you exceed this limit, you will receive a 429 (Too Many Requests) response.

### Response Format

All API responses are returned in JSON format with the following structure:

```json
{
  "success": true,
  "data": {},
  "count": 0,
  "message": "Optional message"
}
```

## Core API Endpoints

### Strategies

#### Get all strategies
```
GET /api/strategies
```

Parameters:
- `status` (optional): Filter by status (active, planned, completed)

#### Get a specific strategy
```
GET /api/strategies/{id}
```

#### Create a new strategy
```
POST /api/strategies
```

Body:
```json
{
  "title": "Strategy Title",
  "description": "Strategy Description",
  "status": "active",
  "startDate": "2023-01-01",
  "endDate": "2023-12-31",
  "ownerId": "user123",
  "organizationId": "org456"
}
```

#### Update a strategy
```
PUT /api/strategies/{id}
```

#### Delete a strategy
```
DELETE /api/strategies/{id}
```

### Projects

#### Get all projects
```
GET /api/projects
```

#### Get a specific project
```
GET /api/projects/{id}
```

#### Create a new project
```
POST /api/projects
```

#### Update a project
```
PUT /api/projects/{id}
```

#### Delete a project
```
DELETE /api/projects/{id}
```

### Assessments

#### Get all assessments
```
GET /api/assessments
```

#### Get a specific assessment
```
GET /api/assessments/{id}
```

#### Create a new assessment
```
POST /api/assessments
```

#### Update an assessment
```
PUT /api/assessments/{id}
```

#### Delete an assessment
```
DELETE /api/assessments/{id}
```

## Webhooks

The platform supports webhooks for real-time notifications of events. You can configure webhooks in the Settings > Integrations section.

### Supported Events

- `strategy.created`: Fired when a new strategy is created
- `strategy.updated`: Fired when a strategy is updated
- `strategy.deleted`: Fired when a strategy is deleted
- `project.created`: Fired when a new project is created
- `project.updated`: Fired when a project is updated
- `project.deleted`: Fired when a project is deleted
- `assessment.completed`: Fired when an assessment is completed

### Webhook Payload

Webhook payloads contain information about the event that occurred:

```json
{
  "event": "strategy.created",
  "timestamp": "2023-01-01T12:00:00Z",
  "data": {
    "id": "strategy123",
    "title": "New Strategy",
    "description": "Strategy Description",
    "status": "active"
  }
}
```

## Third-Party Integrations

### Jira Integration

Connect your Jira instance to sync project data:

1. Generate an API token in Jira
2. Configure the integration in Settings > Integrations
3. Map Jira projects to Stratego projects
4. Sync issues and progress automatically

### Salesforce Integration

Sync customer data and opportunities:

1. Create a connected app in Salesforce
2. Configure OAuth credentials in the platform
3. Select objects to sync (Accounts, Opportunities, etc.)
4. Set up field mappings

### Slack Integration

Receive notifications in Slack channels:

1. Create a Slack app in your workspace
2. Add the webhook URL to the platform
3. Configure which events trigger notifications
4. Customize notification messages

### Google Workspace Integration

Access Google Drive documents and sync calendar events:

1. Configure OAuth credentials
2. Grant necessary permissions
3. Select which Google services to integrate
4. Set up automatic document linking

## Custom Integration Example

Here's an example of how to create a custom integration using Node.js:

```javascript
const fetch = require('node-fetch');

class StrategoClient {
  constructor(apiKey, baseUrl) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
  
  async getStrategies(status) {
    const url = new URL(`${this.baseUrl}/api/strategies`);
    if (status) {
      url.searchParams.append('status', status);
    }
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.json();
  }
  
  async createStrategy(strategy) {
    const response = await fetch(`${this.baseUrl}/api/strategies`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(strategy)
    });
    
    return response.json();
  }
}

// Usage
const client = new StrategoClient('your-api-key', 'https://your-stratego-instance.com');

// Get all active strategies
client.getStrategies('active')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Create a new strategy
const newStrategy = {
  title: 'Digital Transformation Initiative',
  description: 'Comprehensive digital transformation',
  status: 'planned',
  startDate: '2023-01-01',
  endDate: '2023-12-31',
  ownerId: 'user123',
  organizationId: 'org456'
};

client.createStrategy(newStrategy)
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Error Handling

The API uses standard HTTP status codes:

- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `429`: Too Many Requests
- `500`: Internal Server Error

Error responses include a message describing the problem:

```json
{
  "success": false,
  "message": "Invalid API key"
}
```

## Best Practices

1. **Cache responses**: Cache API responses when appropriate to reduce load
2. **Handle rate limits**: Implement exponential backoff when hitting rate limits
3. **Validate data**: Always validate data before sending to the API
4. **Use webhooks**: Use webhooks for real-time updates instead of polling
5. **Secure credentials**: Never expose API keys in client-side code
6. **Monitor usage**: Monitor your API usage to ensure you stay within limits

## Support

For integration support, please contact our integration team at integrations@stratego-platform.com or refer to our [developer documentation](https://docs.stratego-platform.com).