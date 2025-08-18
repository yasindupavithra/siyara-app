# FurnitureStore Clone - Standalone Frontend

A complete frontend clone of the FurnitureStore furniture website built with React, Redux, and Styled Components. This version works entirely without a backend - all data is managed locally with the ability to manually add products with photos.

## 🚀 Features

- **Complete E-commerce Experience**: Browse, filter, and purchase furniture
- **Local Data Management**: No backend required - all data stored locally
- **Manual Product Addition**: Add your own products with photos through admin panel
- **Shopping Cart**: Add/remove items and manage quantities
- **Checkout Process**: Complete purchase flow with payment options
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Product Filtering**: Filter by price, brand, and category
- **Product Details**: Detailed product pages with image galleries

## 🛠️ Tech Stack

- **Frontend**: React 17, Redux, Styled Components
- **Routing**: React Router DOM
- **UI Components**: Material-UI
- **State Management**: Redux with Redux Toolkit
- **Data Storage**: LocalStorage for persistence
- **Image Handling**: FileReader API for local image uploads

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm run install-deps
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 How to Use

### Browsing Products
- Visit the homepage to see featured products
- Click on "Product List" to see all available products
- Use filters to narrow down your search
- Click on any product to view detailed information

### Adding Your Own Products
1. Navigate to `/admin/add-product` in your browser
2. Fill out the product form with:
   - Product name and description
   - Pricing (offer price and actual price)
   - Brand and category information
   - Ratings and stock information
   - Upload product images (multiple images supported)
3. Click "Add Product" to save
4. Your product will appear in the product list immediately

### Shopping Experience
1. Add products to your cart
2. View cart and adjust quantities
3. Proceed to checkout
4. Fill in shipping details
5. Choose payment method
6. Complete purchase

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── Components/
│   │   ├── Admin/
│   │   │   └── AddProduct.jsx          # Product addition form
│   │   ├── Cart/                       # Shopping cart components
│   │   ├── Checkout/                   # Checkout process
│   │   ├── Home/                       # Homepage components
│   │   ├── Login/                      # Authentication
│   │   ├── Navbar/                     # Navigation
│   │   ├── ProductDetails/             # Product detail pages
│   │   ├── ProductList/                # Product listing
│   │   └── Data.jsx                    # Local product data
│   ├── Redux/
│   │   ├── Product/                    # Product state management
│   │   ├── Cart/                       # Cart state management
│   │   └── store.js                    # Redux store configuration
│   ├── Routes/
│   │   └── Routing.jsx                 # Application routing
│   └── Images/                         # Static images and icons
```

## 🔧 Customization

### Adding More Products
- Use the admin panel at `/admin/add-product`
- Products are stored in browser localStorage
- No server setup required

### Modifying Existing Products
- Edit the `products` array in `src/Components/Data.jsx`
- Add more predefined products to the array
- Custom products are stored separately in localStorage

### Styling Changes
- Modify styled components in individual component files
- Update global styles in `src/index.css`
- Theme configuration in `src/Utils/theme.js`

## 🌟 Key Features Explained

### Local Data Management
- All product data is stored locally using JavaScript objects
- Custom products are persisted in browser localStorage
- No external API calls or database setup required

### Image Upload System
- Uses FileReader API to convert uploaded images to base64
- Supports multiple image uploads per product
- Images are stored as data URLs in localStorage
- Preview functionality for uploaded images

### State Management
- Redux manages application state
- Cart data persists across browser sessions
- Product filtering and search functionality
- User authentication state (simplified)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Build the project: `npm run build`
2. Upload the `Frontend/build` folder to your hosting platform
3. Configure routing to handle React Router (redirect all routes to index.html)

## 🔒 Data Persistence

- **Products**: Stored in localStorage as 'customProducts'
- **Cart**: Stored in localStorage as 'cart'
- **User Data**: Stored in localStorage as 'user'

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check if images are properly uploaded
   - Ensure image files are valid (JPG, PNG, etc.)
   - Clear browser cache if needed

2. **Products not appearing**
   - Check browser console for errors
   - Verify localStorage is enabled
   - Clear localStorage and re-add products if needed

3. **Cart not persisting**
   - Ensure localStorage is not disabled
   - Check for browser privacy settings
   - Clear browser data if necessary

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Original FurnitureStore website for design inspiration
- React and Redux communities for excellent documentation
- Material-UI for component library

---

**Note**: This is a frontend-only implementation for demonstration purposes. For production use, consider adding proper backend services for data persistence and security.
