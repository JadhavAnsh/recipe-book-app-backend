# Recipe Book Backend

A NestJS backend for the Recipe Book app, providing REST APIs for recipes and notes.

## Current Features
- ✅ REST API endpoints for recipes
- ✅ REST API endpoints for notes  
- ✅ GraphQL support for recipes
- ✅ MongoDB integration
- ✅ CORS enabled for development

## Future Features (To Be Added)
- 🔐 User Authentication (Firebase)
- 👥 User Management
- 🔒 Route Protection
- 📱 Push Notifications
- 📊 Analytics

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Set Environment Variables:**
   Create a `.env` file in the project root:
   ```env
   # Required
   MONGODB_URI=mongodb://localhost:27017/recipe-book
   PORT=3000

   # Optional: comma-separated list of allowed web origins for CORS
   # Include your Expo dev origin while developing on web
   # Example for Expo web on localhost and LAN:
   # WEB_ORIGIN=http://localhost:8081,http://192.168.1.10:8081
   WEB_ORIGIN=http://localhost:8081
   ```

3. **Start Development Server:**
   ```bash
   npm run start:dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   npm run start:prod
   ```

## API Endpoints

### Recipes (GraphQL)
- **GraphQL Playground**: `http://localhost:3000/graphql`
- **Queries**: Get recipes, search recipes
- **Mutations**: Create, update, delete recipes

### Notes (REST)
- **GET** `/notes` - Get all notes
- **POST** `/notes` - Create a new note
- **GET** `/notes/:id` - Get a specific note
- **PUT** `/notes/:id` - Update a note
- **DELETE** `/notes/:id` - Delete a note

### CORS

The server reads `WEB_ORIGIN` to decide which web origins are allowed. Requests without an origin (native apps, curl) are allowed by default. For Expo web, ensure your dev origin (e.g., `http://localhost:8081`) is present. Multiple origins can be specified, comma-separated.

## Tech Stack

- **Backend**: NestJS
- **Database**: MongoDB with Mongoose
- **API**: REST + GraphQL (Apollo)
- **Authentication**: None (to be added later)
- **Validation**: class-validator

## Project Structure

```
src/
├── recipes/           # Recipe management (GraphQL)
│   ├── dto/          # Data transfer objects
│   ├── entities/      # Recipe entities
│   ├── schemas/       # MongoDB schemas
│   └── recipes.module.ts
├── notes/             # Note management (REST)
│   ├── dto/          # Data transfer objects
│   ├── entities/      # Note entities
│   ├── schemas/       # MongoDB schemas
│   └── notes.module.ts
├── app.module.ts      # Main application module
├── main.ts           # Application entry point
└── app.controller.ts  # Basic health check endpoint
```

## Environment Variables

Currently required:
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 3000)

Optional:
- `WEB_ORIGIN`: Comma-separated list of allowed web origins for CORS

When authentication is added later:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

## Notes

- Authentication has been removed for now but will be re-implemented later
- The backend currently provides basic CRUD operations for recipes and notes
- CORS is enabled for all origins during development
- Ready for recipe and note management features
- Firebase Admin SDK has been removed but can be re-added when needed

## Development

- **Linting**: `npm run lint`
- **Formatting**: `npm run format`

## Running with Docker (Optional)

If you prefer Docker for MongoDB:

```bash
docker run --name recipe-mongo -p 27017:27017 -d mongo:6
```

Then use `MONGODB_URI=mongodb://localhost:27017/recipe-book` in your `.env`.
