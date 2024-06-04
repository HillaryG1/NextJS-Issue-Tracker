import TicketForm from "@/app/(components)/TicketForm";

// Function to fetch ticket data by ID
const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  // Throw error if fetch fails
  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

// Page component to handle ticket creation/editing
const TicketPage = async ({ params }) => {
  // Determine if we are in edit mode or create mode
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    // Fetch existing ticket data if in edit mode
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    // Initialize new ticket data if in create mode
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
