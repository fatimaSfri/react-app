import Discounts from "./r-info/Discounts"
import Billing from "./r-info/Billing"
import Pay from "./r-info/Pay"

export default function RInfo() {
  return (
    <div className=" border-4 border-red-500 ">
      <Discounts></Discounts>
      <Billing></Billing>
      <Pay></Pay>
    </div>
  )
}
