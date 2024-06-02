import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <ProgressBar />
    </div>
  );
};

export default TicketCard;
