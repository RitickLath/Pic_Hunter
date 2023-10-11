# Pic Hunter

This project showcases the implementation of a custom API to fetch images from the internet, providing a seamless user experience with the integration of a Shimmer UI loading effect.

## Prerequisites

Before running the project, ensure you have Node.js and npm installed on your machine.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   npm start
   ```

2. The application will fetch 9 random images from the internet using the Unsplash API and display them with a Shimmer UI loading effect.

3. **Enhanced User Experience**: The integration of the Shimmer UI provides users with a delightful experience while they wait for content to load. The subtle animation of placeholders assures users that something is happening behind the scenes.

4. **Customizable Loading Effect**: You can customize the number of images to fetch by modifying the `fetchImages` function in the `Custom_api.jsx` file. Adjust the number to fit your application's requirements.

## Components

### Custom_api.jsx

- `Custom_api.jsx` is the core component responsible for fetching and displaying images. The Shimmer UI integrated into this component enhances user experience during the loading process.

### ShimmerUI.jsx

- `ShimmerUI.jsx` is a versatile component that displays a Shimmer UI loading effect with a grid of animated placeholders, creating a sense of anticipation and excitement for users.

### App.jsx

- `App.jsx` serves as the entry point to the application, combining the `Custom_api` component with a header for a complete and visually engaging user interface.

### Basic Syntax
```
import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI"; // Import your Shimmer UI component

export default function CustomAPIComponent() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API request (replace with your actual API call)
    setTimeout(() => {
      fetchImageData()
    }, 2000); // Simulate a 2-second delay

  }, []);

  // Function to fetch image data (replace with your actual API call)
  async function fetchImageData() {
    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE");
      if (response.ok) {
        const data = await response.json();
        setImageData(data);
      }
      setIsLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching data: ", error);
      setIsLoading(false); // Handle errors and set loading to false
    }
  }

  return (
    <div>
      {isLoading ? (
        <ShimmerUI /> // Display the Shimmer UI component while loading
      ) : (
        <div>
          {/* Display your fetched data here */}
          {imageData.map((item, index) => (
            <img key={index} src={item.imageUrl} alt={`Image ${index}`} />
          )}
        </div>
      )}
    </div>
  );
}


```


## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to further customize this README to highlight the specific advantages of your project's user experience enhancements, and provide additional details as needed.
