import { ImCheckmark } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

function Thankyou() {
  return (
    <>
   <Header />
   <div className="py-16">
        <h1 className="flex justify-center text-rose-600 text-9xl">
          <ImCheckmark />
        </h1>
        <h4 className="text-center font-semibold text-3xl">THANK YOU!</h4>
        <p className="text-center mt-6">
          Your Enquiry has been Processed Successfully. Our Executive will get
          in touch with you shortly.
        </p>
        <Link to="/" className="flex items-center justify-center font-bold py-8">
          <BsArrowRight /> &nbsp;Back to Home
        </Link>
        </div>
    </>
  )
}

export default Thankyou