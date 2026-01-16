import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'A simple Todo API built with Express.js and TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          required: ['id', 'title', 'completed', 'createdAt', 'updatedAt'],
          properties: {
            id: {
              type: 'string',
              description: 'The unique identifier of the todo',
            },
            title: {
              type: 'string',
              description: 'The title of the todo',
            },
            description: {
              type: 'string',
              description: 'The description of the todo',
            },
            completed: {
              type: 'boolean',
              description: 'Whether the todo is completed',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'When the todo was created',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'When the todo was last updated',
            },
          },
        },
        CreateTodoRequest: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              description: 'The title of the todo',
            },
            description: {
              type: 'string',
              description: 'The description of the todo',
            },
          },
        },
        UpdateTodoRequest: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'The title of the todo',
            },
            description: {
              type: 'string',
              description: 'The description of the todo',
            },
            completed: {
              type: 'boolean',
              description: 'Whether the todo is completed',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
