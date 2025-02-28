import RInfo from "./RInfo"  
import LInfo from "./LInfo"

export default function Information() {
  return (
    <div className="flex max-md:flex-col-reverse w-full border border-red-900">
      <RInfo></RInfo>
      <LInfo></LInfo>
    </div>
  )
}
