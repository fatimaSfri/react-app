import InfoUser from "./l-info/InfoUser";
import OneRoom from "./l-info/OneRoom";
import TwoRoom from "./l-info/TwoRoom";
import Comment from "./l-info/Comment";
import Costs from "./l-info/Costs";

function ReservationForm() {
  return (
    <div className="p-4 bg-gray-100">
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <InfoUser></InfoUser>
        <OneRoom></OneRoom>
        <TwoRoom></TwoRoom>
        <Comment></Comment>
        <Costs></Costs>
      </div>
    </div>
  );
}

export default ReservationForm;