# Expense Tracker App

## Overview

The Expense Tracker App is a simple yet powerful tool that allows users to track their expenses and manage their budget. It includes features for adding, listing, and deleting expenses, as well as calculating the total amount spent and the remaining balance based on a user-defined budget.

## Features

- **Set Budget**: Users can set their total budget.
- **Add Expenses**: Users can add expenses with details like amount and description.
- **Delete Expenses**: Users can remove expenses from the list.
- **Responsive Design**: The app is designed to be responsive and works well on different screen sizes.

## Project link

## Technologies Used

- **React**: The app is built using the React library for creating dynamic user interfaces.
- **State Management**: `useState` hook is used to manage the state of the budget, amount spent, expenses, and budget input.
- **Component-based Architecture**: The app is divided into functional components (`ExpenseForm`, `ExpenseList`) to keep the code modular and manageable.
- **Bootstrap**: Bootstrap is used for styling and layout to create a responsive and visually appealing interface.

## Components

### `App`
The main component that maintains the overall state of the application including the budget, amount spent, and expenses. It also defines the methods to add and delete expenses.

### `ExpenseForm`
A component that renders the form for adding new expenses. It takes in props for the current budget and a callback function for adding expenses.

### `ExpenseList`
A component that displays the list of expenses and allows the user to delete individual expenses. It takes in props for the list of expenses and a callback function for deleting expenses.

## Concepts Used

- **React Functional Components**: The app uses functional components to create the UI.
- **React Hooks**: `useState` hook is used for managing the state of the components.
- **Props**: Props are used to pass data and functions between components.
- **Event Handling**: Event handlers are used to manage user interactions such as form submissions and button clicks.
- **Conditional Rendering**: Conditional rendering is used to display different UI elements based on the state.

