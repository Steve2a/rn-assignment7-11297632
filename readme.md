# rn-assignment6-11297632
This a react native application allows users to view a list of available products, add products to their cart, remove products from their cart, and view the items in their cart. The selected items are stored locally on the device using AsyncStorage.

## Features

- **HomeScreen**: Displays a list of available products.
- **CartScreen**: Displays selected items in the cart.
- **Add to Cart Button**: Allows users to add a product to the cart.
- **Remove from Cart Button**: Allows users to remove a product from the cart.
- **Local Storage**: Uses `AsyncStorage` to store selected items locally on the device.

## Functionality

- **View Available Products**: Users can see a list of available products on the `HomeScreen`.
- **Add Products to Cart**: Users can add products to their cart by clicking the "Add to Cart" button for each product.
- **Remove Products from Cart**: Users can remove products from their cart by clicking the "Remove from Cart" button for each selected item in the cart.
- **View Cart Items**: Users can view the items in their cart on the `CartScreen`.

## Screens

### HomeScreen

The `HomeScreen` displays a list of available products. Each product includes a name, price, image, and an "Add to Cart" button.

### CartScreen

The `CartScreen` displays the items that the user has added to their cart. Each item in the cart includes a name, price, image, and a "Remove from Cart" button.

## Local Storage

The application uses `AsyncStorage` to store selected items locally on the device. This ensures that the cart items persist even when the application is closed or restarted.

## Usage

1. **Viewing Products**: Open the application to view the list of available products on the `HomeScreen`.
2. **Adding to Cart**: Click the "Add to Cart" button on any product to add it to your cart.
3. **Viewing Cart**: Navigate to the `CartScreen` to view the items in your cart.
4. **Removing from Cart**: Click the "Remove from Cart" button on any item in the cart to remove it.


## Screenshots

![alt text](<Mockup/assets/Screenshot 2024-07-03 194400.png>) 
![alt text](<Mockup/assets/Screenshot 2024-07-03 194440.png>)