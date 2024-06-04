# Issue Tracker App 🚀

![Issue Tracker App](https://repository-images.githubusercontent.com/809435809/2931fd15-0763-468b-a845-55b13bcd8b01)

This is a full-stack issue tracking application built with Next.js, MongoDB, and Tailwind CSS. It allows users to create, read, update, and delete tickets, categorize them based on priority and status, and track their progress.

## Features

- Create new tickets with title, description, category, priority, and status
- Update and delete existing tickets
- View tickets grouped by category
- Display ticket priority using fire icons
- Show ticket creation timestamp and progress using visual indicators

## Why an Issue Tracker?

This app is essential for software development teams because it:

- Ensures no issues or bugs slip through the cracks.
- Facilitates better communication and collaboration among team members.
- Provides a centralized repository for tracking and analyzing issues.
- Helps maintain a high-quality codebase by quickly addressing identified problems.

## Tech Stack

- **Frontend**: React with Next.js
- **Backend**: MongoDB for data storage
- **Styling**: Tailwind CSS for UI design

## Components

### `TicketForm`

This component renders a form for creating or updating a ticket. It takes a `ticket` prop, which is an object containing the ticket data.

### `TicketCard`

This component renders a card-like UI for displaying ticket information. It takes a `ticket` prop, which is an object containing the ticket data.

### `StatusDisplay`

This component renders the ticket status (e.g., "done", "started", "not started").

### `PriorityDisplay`

This component renders a series of fire icons to represent the ticket priority level.

## API Routes

- `GET /api/Tickets/:id`: Fetches a single ticket by its ID.
- `PUT /api/Tickets/:id`: Updates an existing ticket.
- `POST /api/Tickets`: Creates a new ticket.
- `GET /api/Tickets`: Fetches all tickets.

## Contributing

If you'd like to contribute to the project, feel free to submit a pull request or open an issue.
