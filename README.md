# Image Processing API
This is an image processing API that resizes an image based on the given width and height. The API is built using Node.js, Express.js, and TypeScript.

## Installation
- Run the application: `npm start`
- Build the application: `npm run build`
- Test the application: `npm test`
 
## Endpoints
- Resize Image
   - GET /images?filename=<filename>&width=<width>&height=<height>
   - Parameters:
      - filename: Name of the image file (JPEG).
      - width: Input width of the image.
      - height: Input height of the image.
   - Example: http://localhost:3000/api/images?filename=encenadaport&width=400&height=400 

